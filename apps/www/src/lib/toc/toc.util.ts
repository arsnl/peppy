/* eslint-disable no-param-reassign */
import { toc } from "mdast-util-toc";
import { remark } from "remark";
import { visit } from "unist-util-visit";
import { type TocItems } from "@/lib/toc/toc.type";

const textTypes = ["text", "emphasis", "strong", "inlineCode"];

const flattenNode = (tree: any) => {
  const p: any[] = [];
  visit(tree, (node) => {
    if (!textTypes.includes(node.type)) {
      return;
    }
    p.push(node.value);
  });
  return p.join(``);
};

const getItems = (node: any, current: any): TocItems => {
  if (!node) {
    return {};
  }

  if (node.type === "paragraph") {
    visit(node, (item) => {
      if (item.type === "link") {
        current.url = item.url;
        current.title = flattenNode(node);
      }

      if (item.type === "text") {
        current.title = flattenNode(node);
      }
    });

    return current;
  }

  if (node.type === "list") {
    current.items = node.children.map((i: any) => getItems(i, {}));

    return current;
  }
  if (node.type === "listItem") {
    const heading = getItems(node.children[0], {});

    if (node.children.length > 1) {
      getItems(node.children[1], heading);
    }

    return heading;
  }

  return {};
};

const getToc = () => (node: any, file: any) => {
  const table = toc(node);
  const items = getItems(table.map, {});

  file.data = items;
};

export const getTableOfContents = async (
  content: string,
): Promise<TocItems> => {
  const result = await remark().use(getToc).process(content);

  return result.data;
};
