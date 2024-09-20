import ClientWrapper from "./ClientWrapper";
import ServerIP from "./ServerIP";

const RenderedPatternPage: React.FC = () => {
  return (
    <>
      <p>
        We have a server component (ServerIP) that is rendered (invoked,
        {" <ServerIP />"}) and passed as a ReactNode prop to a client component
        (ClientWrapper).
      </p>

      <ClientWrapper>
        <pre style={{ border: "4px inset green", padding: "4px" }}>
          <ServerIP />
        </pre>
      </ClientWrapper>
    </>
  );
};

export default RenderedPatternPage;
