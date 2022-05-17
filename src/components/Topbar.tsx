import { Header, Title, Button, createStyles } from "@mantine/core";
import { BrandGithub, Sun } from "tabler-icons-react";

const useStyles = createStyles(theme => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing.xs,
  },
}));

function Topbar() {
  const { classes } = useStyles();
  return (
    <Header className={classes.wrapper} height={64}>
      <BrandGithub size={32} strokeWidth={2} color={"black"} />
      <Title order={1} align="center">
        Github Profile Search
      </Title>

      <Sun size={24} strokeWidth={2} color={"black"} />
    </Header>
  );
}

export default Topbar;
