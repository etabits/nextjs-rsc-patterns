import Link from "next/link";
import { dirname, resolve } from "path";
import { readFile } from "fs/promises";

export default function Home() {
  return (
    <div>
      <div className="prose prose-lg dark:prose-invert">
        <h1>RSCs &lt;-&gt; Client Components Patterns</h1>
        <ReadmeMarkdown />
      </div>
      <PatternsList />
    </div>
  );
}

const patterns: Record<string, string> = {
  rendered: "Pass rendered server component to a client component via a prop",
  import: "Pass imported client component reference to RSC via a prop",
  c2c: "Pass a client component to another client component, composed in an RSC",
  handlers: "Assigning client-side event handlers directly from RSCs",
};

const PatternsList: React.FC = () => {
  return (
    <ol className="flex flex-col justify-center mt-10 list-decimal">
      {Object.entries(patterns).map(([slug, label]) => (
        <li key={slug} className="mb-4">
          <Link
            href={`/patterns/${slug}`}
            className="border rounded p-2 inline-block"
          >
            {label}
          </Link>
        </li>
      ))}
    </ol>
  );
};

const ReadmeMarkdown: React.FC = async () => {
  const readmePath = resolve(
    dirname(new URL(import.meta.url).pathname),
    "../../README.md"
  );
  const readme = await readFile(readmePath, "utf-8");

  // micro-markdown! need to have the real thing instead.
  const html = readme
    .replaceAll(/\n(.+)(?:\n|$)/g, "\n<p>$1</p>\n")
    .split("\n")
    .filter((l) => l.startsWith("<p>"))
    .map((l) => l.replaceAll(/`(.+)`/g, "<code>$1</code>"))
    .map((l) => l.replaceAll(/_(.+)_/g, "<em>$1</em>"))
    .join("\n");

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};
