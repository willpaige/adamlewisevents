import {
  RichText,
  LinkJSXConverter,
  type JSXConvertersFunction,
} from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import type { SerializedLinkNode } from "@payloadcms/richtext-lexical";

function internalDocToHref({ linkNode }: { linkNode: SerializedLinkNode }): string {
  const doc = linkNode.fields.doc;
  const value = doc?.value;
  const slug = value && typeof value === "object" ? (value.slug as string | null | undefined) : undefined;
  if (!slug) return "/";
  switch (doc?.relationTo) {
    case "services":
      return `/services/${slug}`;
    case "coverage-areas":
      return `/areas/${slug}`;
    default:
      return `/${slug}`;
  }
}

const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
});

export function RichTextSection({ body }: { body?: SerializedEditorState | null }) {
  if (!body) return null;
  return (
    <section className="rich-text-section">
      <div className="container">
        <RichText data={body} converters={converters} className="rich-text" />
      </div>
    </section>
  );
}
