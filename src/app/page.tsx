import { Suspense } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="prose prose-invert">
        <h1>RSCs &lt;-&gt; Client Components Patterns</h1>
      </div>
      <Suspense fallback={"Loading patterns..."}>
        <PatternsList />
      </Suspense>
    </div>
  );
}

const patterns: Record<string, string> = {
  rendered: "Pass rendered server component to a client component via a prop",
  import: "Pass imported client component reference to RSC via a prop",
};

const PatternsList: React.FC = () => {
  return (
    <ol className="flex flex-col justify-center mt-10 list-decimal">
      {Object.entries(patterns).map(([slug, label]) => (
        <li key={slug} className="mb-12">
          <Link href={`/patterns/${slug}`} className="border rounded p-4">
            {label}
          </Link>
        </li>
      ))}
    </ol>
  );
};
