import { Suspense } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="prose prose-lg dark:prose-invert">
        <h1>RSCs &lt;-&gt; Client Components Patterns</h1>
        <p>
          Except for the first pattern, I came across these while experimenting
          but have not found it in upstream docs. Please add a link
          (pull-request) if you do.
        </p>
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
