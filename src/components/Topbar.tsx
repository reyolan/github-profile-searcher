import {
  Header,
  Title,
  Button,
  createStyles,
  useMantineTheme,
  ActionIcon,
  Anchor,
  useMantineColorScheme,
} from "@mantine/core";
import { BrandGithub, Sun } from "tabler-icons-react";

const useStyles = createStyles(theme => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing.xs,
  },
}));

function Topbar(): JSX.Element {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Header className={classes.wrapper} height={64}>
      <Anchor href="https://github.com/" target="_blank">
        <BrandGithub
          size={32}
          strokeWidth={2}
          color={colorScheme === "dark" ? theme.colors.dark[0] : "black"}
        />
      </Anchor>
      <Title order={1} align="center">
        Github Profile Search
      </Title>
      <ActionIcon
        variant="outline"
        color={colorScheme === "dark" ? "black" : theme.colors.dark[0]}
        title="Toggle light and dark mode"
        onClick={() => toggleColorScheme()}
      >
        <Sun
          size={24}
          strokeWidth={2}
          color={colorScheme === "dark" ? theme.colors.dark[0] : "black"}
        />
      </ActionIcon>
    </Header>
  );
}

export default Topbar;
