import {
  MantineProvider,
  AppShell,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useState } from "react";
import ContentArea from "./components/ContentArea";
import Topbar from "./components/Topbar";

function App(): JSX.Element {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme: colorScheme,
          headings: {
            sizes: {
              h1: { fontSize: "24px" },
              h2: { fontSize: "17px" },
            },
          },
          primaryColor: "blue",
        }}
        withNormalizeCSS
        withGlobalStyles
      >
        <AppShell header={<Topbar />} fixed>
          <ContentArea />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
