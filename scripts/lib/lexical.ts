/**
 * Converts a tiny markdown subset into Payload Lexical JSON so page copy can be
 * written as readable text in the seed script and edited normally in /admin.
 *
 * Supported: "## " / "### " headings, "- " bullet lists, blank-line paragraphs,
 * **bold**, and [text](/url) links.
 */

type TextNode = {
  type: "text";
  text: string;
  detail: 0;
  format: number;
  mode: "normal";
  style: "";
  version: 1;
};

type LinkNode = {
  type: "link";
  fields: { linkType: "custom"; url: string; newTab: boolean };
  children: TextNode[];
  direction: "ltr";
  format: "";
  indent: 0;
  version: 3;
};

type Inline = TextNode | LinkNode;

const BOLD = 1;

function text(value: string, format = 0): TextNode {
  return { type: "text", text: value, detail: 0, format, mode: "normal", style: "", version: 1 };
}

/** Splits **bold** and [label](url) into inline nodes. */
function inline(src: string): Inline[] {
  const out: Inline[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) {
    if (m.index > last) out.push(text(src.slice(last, m.index)));
    if (m[1] !== undefined) {
      out.push(text(m[1], BOLD));
    } else {
      const url = m[3];
      out.push({
        type: "link",
        fields: { linkType: "custom", url, newTab: /^https?:\/\//.test(url) },
        children: [text(m[2])],
        direction: "ltr",
        format: "",
        indent: 0,
        version: 3,
      });
    }
    last = m.index + m[0].length;
  }
  if (last < src.length) out.push(text(src.slice(last)));
  return out;
}

const block = { direction: "ltr" as const, format: "" as const, indent: 0 as const, version: 1 as const };

type BlockNode = { type: string; version: number; [k: string]: unknown };

export function toLexical(markdown: string) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const children: BlockNode[] = [];
  let para: string[] = [];
  let list: string[] = [];

  const flushPara = () => {
    if (!para.length) return;
    children.push({ type: "paragraph", textFormat: 0, children: inline(para.join(" ")), ...block });
    para = [];
  };
  const flushList = () => {
    if (!list.length) return;
    children.push({
      type: "list",
      listType: "bullet",
      tag: "ul",
      start: 1,
      children: list.map((item, i) => ({
        type: "listitem",
        value: i + 1,
        children: inline(item),
        ...block,
      })),
      ...block,
    });
    list = [];
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushPara();
      flushList();
      continue;
    }
    const heading = line.match(/^(##|###)\s+(.*)$/);
    if (heading) {
      flushPara();
      flushList();
      children.push({ type: "heading", tag: heading[1] === "##" ? "h2" : "h3", children: inline(heading[2]), ...block });
      continue;
    }
    if (line.startsWith("- ")) {
      flushPara();
      list.push(line.slice(2));
      continue;
    }
    flushList();
    para.push(line);
  }
  flushPara();
  flushList();

  return { root: { type: "root", children, ...block } };
}
