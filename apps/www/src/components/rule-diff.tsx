/* eslint-disable react/no-array-index-key */
import "server-only";
import React from "react";
import * as diff from "diff";
import { cn } from "@/lib/utils";

/**
 * Code inspired from https://github.com/praneshr/react-diff-viewer
 * and adapted to be comptatible with  React v18+, React Server Components and TailwindCSS.
 */

enum DiffType {
  DEFAULT = 0,
  ADDED = 1,
  REMOVED = 2,
}

type DiffInformation = {
  value?: string | DiffInformation[];
  type?: DiffType;
};

type LineInformation = {
  key: string;
  left?: DiffInformation;
  right?: DiffInformation;
};

type ComputedLineInformation = {
  lineInformation: LineInformation[];
};

type ComputedDiffInformation = {
  left: DiffInformation[];
  right: DiffInformation[];
};

/**
 * Splits diff text by new line and computes final list of diff lines based on
 * conditions.
 *
 * @param value Diff text from the js diff module.
 */
const constructLines = (value: string): string[] =>
  value ? value.replace(/\n$/, "").split("\n") : [];

/**
 * Computes word diff information in the line.
 *
 * @param oldValue Old word in the line.
 * @param newValue New word in the line.
 */
const computeDiff = (oldValue: string, newValue: string) =>
  diff.diffWords(oldValue, newValue).reduce<ComputedDiffInformation>(
    (acc, { added, removed, value }) => {
      const left = [];
      const right = [];

      if (added) {
        right.push({ type: DiffType.ADDED, value });
      }
      if (removed) {
        left.push({ type: DiffType.REMOVED, value });
      }
      if (!removed && !added) {
        right.push({ type: DiffType.DEFAULT, value });
        left.push({ type: DiffType.DEFAULT, value });
      }

      return {
        ...acc,
        left: [...acc.left, ...left],
        right: [...acc.right, ...right],
      };
    },
    {
      left: [],
      right: [],
    },
  );

/**
 * Computes line wise information based in the js diff information passed. Each
 * line contains information about left and right section. Left side denotes
 * deletion and right side denotes addition.
 */
const computeLineInformation = ({
  oldString,
  newString,
}: {
  oldString: string;
  newString: string;
}): ComputedLineInformation => {
  const diffArray = diff.diffLines(oldString.trimEnd(), newString.trimEnd(), {
    newlineIsToken: false,
    ignoreWhitespace: false,
    ignoreCase: false,
  });

  const lineInformation: LineInformation[] = [];
  const ignoreDiffIndexes: string[] = [];

  const _getLineInformation = ({
    value,
    diffIndex,
    added = false,
    removed = false,
    evaluateOnlyFirstLine = false,
  }: {
    value: string;
    diffIndex: number;
    added?: boolean;
    removed?: boolean;
    evaluateOnlyFirstLine?: boolean;
  }): LineInformation[] => {
    const lines = constructLines(value);

    return lines
      .map((line: string, lineIndex): LineInformation | undefined => {
        const key = `${diffIndex}-${lineIndex}`;
        const left: DiffInformation = {};
        const right: DiffInformation = {};

        if (
          ignoreDiffIndexes.includes(key) ||
          (evaluateOnlyFirstLine && lineIndex !== 0)
        ) {
          return undefined;
        }

        if (removed) {
          left.type = DiffType.REMOVED;
          left.value = line || " ";
          // When the current line is of type REMOVED, check the next item in
          // the diff array whether it is of type ADDED. If true, the current
          // diff will be marked as both REMOVED and ADDED. Meaning, the
          // current line is a modification.
          const nextDiff = diffArray[diffIndex + 1];
          if (nextDiff && nextDiff.added) {
            const nextDiffLines = constructLines(nextDiff.value)[lineIndex];
            if (nextDiffLines) {
              const nextDiffLineInfo = _getLineInformation({
                value: nextDiffLines,
                diffIndex,
                added: true,
                evaluateOnlyFirstLine: true,
              });

              const { value: rightValue, type } =
                nextDiffLineInfo?.[0]?.right || {};

              // When identified as modification, push the next diff to ignore
              // list as the next value will be added in this line computation as
              // right and left values.
              ignoreDiffIndexes.push(`${diffIndex + 1}-${lineIndex}`);
              if (left.value === rightValue) {
                // The new value is exactly the same as the old
                right.type = 0;
                left.type = 0;
                right.value = rightValue;
              } else {
                right.type = type;
                // Do char level diff and assign the corresponding values to the
                // left and right diff information object.
                const computedDiff = computeDiff(line, rightValue as string);
                right.value = computedDiff.right;
                left.value = computedDiff.left;
              }
            }
          }
        } else if (added) {
          right.type = DiffType.ADDED;
          right.value = line;
        } else {
          left.type = DiffType.DEFAULT;
          left.value = line;
          right.type = DiffType.DEFAULT;
          right.value = line;
        }
        return { right, left, key };
      })
      .filter((line): line is LineInformation => !!line);
  };

  diffArray.forEach(
    ({ added, removed, value }: diff.Change, diffIndex): void => {
      lineInformation.push(
        ..._getLineInformation({
          value,
          diffIndex,
          added,
          removed,
        }),
      );
    },
  );

  return {
    lineInformation,
  };
};

const styles = {
  diffRemoved: cn("bg-destructive/30 text-destructive-foreground"),
  diffAdded: cn("bg-additive/30 text-additive-foreground"),
  line: cn("flex items-center"),
  wordDiff: cn("rounded-sm p-px"),
  wordAdded: cn("bg-additive text-additive-foreground"),
  wordRemoved: cn("bg-destructive text-destructive-foreground"),
  emptyLine: cn(""),
  contentText: cn("px-4"),
  content: cn("min-h-[1rem] flex-1 py-0.5"),
};

type _LineContentProps = {
  type: DiffType;
  value?: string | DiffInformation[];
};

const _LineContent = ({ type, value = "" }: _LineContentProps) => {
  const added = type === DiffType.ADDED;
  const removed = type === DiffType.REMOVED;
  const content = Array.isArray(value)
    ? value.map((wordDiff, index) =>
        Array.isArray(wordDiff.value) ? null : (
          <span
            key={index}
            className={cn(styles.wordDiff, {
              [styles.wordAdded]: wordDiff.type === DiffType.ADDED,
              [styles.wordRemoved]: wordDiff.type === DiffType.REMOVED,
            })}
          >
            {wordDiff.value}
          </span>
        ),
      )
    : value;

  return (
    <span
      className={cn(styles.content, {
        [styles.emptyLine]: !content,
        [styles.diffAdded]: added,
        [styles.diffRemoved]: removed,
      })}
    >
      <span className={styles.contentText}>{content}</span>
    </span>
  );
};

type _LineProps = { line: LineInformation };

const _Line = ({ line }: _LineProps) => {
  const { left, right } = line;
  const contents: _LineContentProps[] = [];

  if (left?.type === DiffType.REMOVED && right?.type === DiffType.ADDED) {
    contents.push({ type: left.type, value: left.value });
    contents.push({ type: right.type, value: right.value });
  } else if (
    (left?.type === DiffType.REMOVED || left?.type === DiffType.DEFAULT) &&
    right?.type !== DiffType.ADDED
  ) {
    contents.push({ type: left.type, value: left.value });
  } else if (right?.type === DiffType.ADDED) {
    contents.push({ type: right.type, value: right.value });
  }

  return (
    <>
      {contents.map((content, index) => (
        <span className={styles.line} key={index}>
          <_LineContent {...content} />
        </span>
      ))}
    </>
  );
};

export type RuleDiffProps = {
  oldString: string;
  newString: string;
};

export const RuleDiff = ({ oldString, newString }: RuleDiffProps) => {
  const { lineInformation } = computeLineInformation({ oldString, newString });

  return (
    <div className="relative mb-4 mt-6 overflow-hidden rounded-lg border bg-muted/30">
      <pre className="max-h-[650px] overflow-x-auto py-4">
        <code className="grid font-mono text-sm">
          {lineInformation.map((line) => (
            <_Line line={line} key={line.key} />
          ))}
        </code>
      </pre>
    </div>
  );
};
