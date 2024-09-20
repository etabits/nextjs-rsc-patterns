import type { NextPage } from "next";
import ClientWrapper from "./ClientWrapper";
import ServerIP from "./ServerIP";

const RenderedPatternPage: NextPage = () => {
  return (
    <>
      <div className="prose prose-lg dark:prose-invert">
        <h1>Passing RSCs into Client Components</h1>
        <p>
          We have a server component (<code>ServerIP</code>) that is rendered
          (invoked, <code>{"<ServerIP />"}</code>) and passed as a ReactNode
          prop to a client component (<code>ClientWrapper</code>).
        </p>
        <p>
          <a
            href="https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#supported-pattern-passing-server-components-to-client-components-as-props"
            target="_blank"
          >
            Next.js documentation: Passing Server Components to Client
            Components as Props
          </a>
        </p>
      </div>

      <ClientWrapper>
        <pre style={{ border: "4px inset green", padding: "4px" }}>
          <ServerIP />
        </pre>
      </ClientWrapper>
    </>
  );
};

export default RenderedPatternPage;
