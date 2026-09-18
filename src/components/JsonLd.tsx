type JsonLdData = Record<string, unknown> | Record<string, unknown>[];

/** Renders one or more schema.org objects as a JSON-LD script. */
export function JsonLd({ data }: { data: JsonLdData }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Escape "<" so a stray "</script>" in CMS text can't break out of the tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
