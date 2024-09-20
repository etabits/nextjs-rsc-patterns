import RenderPerson from "./RenderPerson";
import ListPeople from "./ListPeople";
import type { NextPage } from "next";

const ImportPatternPage: NextPage = () => {
  return (
    <div>
      <div className="prose prose-lg dark:prose-invert">
        <h1>Passing Client Components into RSCs</h1>
        <p>
          We have a server component (<code>ListPeople</code>) that fetches a
          list of <code>Person</code> records on the server. We also have a
          client component (<code>RenderPerson</code>) that would render a
          person record with some client-side interactivity. We import the
          latter and pass it to the server component:
        </p>
        <pre>
          <code>{"<ListPeople Render={RenderPerson} />"}</code>
        </pre>
        <p>
          You may pass these component imports via multiple RSC layers, allowing
          for higher-order components that can change final client behaviour
          based on passed arguments (props).
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
