import { MantineProvider, AppShell } from "@mantine/core";
import { useEffect } from "react";
import Topbar from "./components/Topbar";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

//gawa tayo top bar, which has the title and then upper right may dark mode
// then sa gitna is may search bar tayo
// sa baba ng search bar meron tayong card na pinapakita yung information

function App() {
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
      <AppShell header={<Topbar />}>
        <SearchBar />
        <ProfileCard />
      </AppShell>
    </MantineProvider>
  );
}

export default App;
