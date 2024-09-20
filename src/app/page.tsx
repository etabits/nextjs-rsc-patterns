import { Suspense } from "react";
import { readdir } from "fs/promises";
import { dirname, join } from "path";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Suspense fallback={"Loading patterns..."}>
        <PatternsList />
      </Suspense>
    </div>
  );
}

const labels: Record<string, string> = {
  rendered: "Pass rendered server component to a client component via a prop",
};

const PatternsList: React.FC = async () => {
  console.log();
  const patterns = await readdir(
    join(dirname(new URL(import.meta.url).pathname), "patterns")
  );
  return (
    <ul>
      {patterns.map((p) => (
        <li key={p}>
          <Link href={`/patterns/${p}`}>{labels[p] ?? p}</Link>
        </li>
      ))}
    </ul>
  );
};
