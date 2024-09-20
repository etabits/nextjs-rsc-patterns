import RenderPerson from "./RenderPerson";
import ListPeople from "./ListPeople";
import type { NextPage } from "next";

const ImportPatternPage: NextPage = () => {
  return (
    <div>
      <div className="prose-lg dark:prose-invert">
        <h1>Passing Client Components into RSCs</h1>
        <p>
          We have a server component (`ListPeople`) that fetches a list of
          `Person` records on the server. We also have a client component
          (`RenderPerson`) that would render a person record with some
          client-side interactivity. We import the latter and pass it
          (essentially as a callback) to the server component:
        </p>
        <pre>
          <code>{"<ListPeople Render={RenderPerson} />"}</code>
        </pre>
        <p>
          I came across this while experimenting, but have not found it in
          upstream docs. Please add a link (pull-request) if you do.
        </p>
        <p>
          <em>(Click on each to reveal age, client-side)</em>
        </p>
      </div>
      <ListPeople Render={RenderPerson} />
    </div>
  );
};

export default ImportPatternPage;
