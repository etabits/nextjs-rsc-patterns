import RenderPerson from "./RenderPerson";
import ListPeople from "./ListPeople";
import Link from "next/link";
import type { NextPage } from "next";

const C2CPatternPage: NextPage = () => {
  return (
    <div>
      <div className="prose-lg dark:prose-invert">
        <h1>Passing a Client Component into another, from an RSC</h1>
        <p>
          Building on the previous pattern,{" "}
          <Link href="./import">Passing Client Components into RSCs</Link>: In
          addition to the server component (`ListPeople`), we also have two
          components `RenderPerson` and `RenderAge`. Inside the RSC, we import
          both. We invoke the first and pass the second as a prop:
        </p>
        <pre>
          <code>{"<RenderPerson RenderAge={RenderAge} />"}</code>
        </pre>
        <p>
          I came across this while experimenting, but have not found it in
          upstream docs. Please add a link (pull-request) if you do.
        </p>
        <p>
          <em>(Click on each to reveal age, client-side)</em>
        </p>
      </div>
      <ListPeople {...{ RenderPerson }} />
    </div>
  );
};

export default C2CPatternPage;
