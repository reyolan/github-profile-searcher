import { MantineProvider, AppShell } from "@mantine/core";
import ContentArea from "./components/ContentArea";
import Topbar from "./components/Topbar";

function App(): JSX.Element {
  return (
    <MantineProvider
      theme={{
        colorScheme: "light",
        headings: {
          sizes: {
            h1: { fontSize: "24px" },
            h2: { fontSize: "17px" },
          },
        },
      }}
      withNormalizeCSS
      withGlobalStyles
    >
      <AppShell header={<Topbar />} fixed>
        <ContentArea />
      </AppShell>
    </MantineProvider>
  );
}

export default App;
