import { useLocalStorage } from "@mantine/hooks";
import {
  MantineProvider,
  AppShell,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import ContentArea from "./components/ContentArea/ContentArea";
import Topbar from "./components/Topbar/Topbar";

function App(): JSX.Element {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "light",
  });
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
              h2: { fontSize: "20px" },
            },
          },
          primaryColor: "blue",
          loader: "oval",
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
