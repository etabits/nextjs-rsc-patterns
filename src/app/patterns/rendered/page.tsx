import ClientWrapper from "./ClientWrapper";
import ServerIP from "./ServerIP";

const RenderedPatternPage: React.FC = () => {
  return (
    <>
      <div className="prose-lg dark:prose-invert">
        <h1>Passing RSCs into Client Components</h1>
        <p>
          We have a server component (ServerIP) that is rendered (invoked,
          {" <ServerIP />"}) and passed as a ReactNode prop to a client
          component (ClientWrapper).
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
