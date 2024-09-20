import RenderPerson from "./RenderPerson";
import ListPeople from "./ListPeople";
import Link from "next/link";
import type { NextPage } from "next";

const C2CPatternPage: NextPage = () => {
  return (
    <div>
      <div className="prose prose-lg dark:prose-invert">
        <h1>Passing a Client Component into another, from an RSC</h1>
        <p>
          Building on the previous pattern,{" "}
          <Link href="./import">Passing Client Components into RSCs</Link>: In
          addition to the server component (<code>ListPeople</code>), we also
          have two components <code>RenderPerson</code> and{" "}
          <code>RenderAge</code>. Inside the RSC, we import both. We invoke the
          first and pass the second as a prop:
        </p>
        <pre>
          <code>{"<RenderPerson RenderAge={RenderAge} />"}</code>
        </pre>
        <p>
          <em>(Click on each to reveal age, client-side)</em>
        </p>
      </div>
      <ListPeople {...{ RenderPerson }} />
    </div>
  );
};

export default C2CPatternPage;
