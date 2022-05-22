import { createStyles } from "@mantine/core";

export default createStyles(theme => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing.xs,
  },
  actionIcon: {
    borderColor: theme.colorScheme === "dark" ? theme.colors.dark[0] : "black",
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.gray[7]
          : theme.colors.dark[0],
    },
  },
}));
