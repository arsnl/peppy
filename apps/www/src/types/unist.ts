import type { Node } from "unist-builder";

export type UnistNode = Node & {
  type: string;
  name?: string;
  tagName?: string;
  value?: string;
  properties?: {
    __rawString__?: string;
    __className__?: string;
    __event__?: string;
    [key: string]: unknown;
  } & NpmCommands;
  attributes?: {
    name: string;
    value: unknown;
    type?: string;
  }[];
  children?: UnistNode[];
};

export type UnistTree = Node & {
  children: UnistNode[];
};

export type NpmCommands = {
  __npmCommand__?: string;
  __yarnCommand__?: string;
  __pnpmCommand__?: string;
};
