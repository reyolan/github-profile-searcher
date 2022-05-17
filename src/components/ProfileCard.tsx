import {
  Text,
  Card,
  createStyles,
  Title,
  Image,
  Group,
  Stack,
} from "@mantine/core";

const useStyles = createStyles(theme => ({
  card: {
    maxWidth: "500px",
    margin: "auto",
  },
  imageWrapper: {
    width: "220px",
  },
}));

function ProfileCard() {
  const { classes } = useStyles();
  return (
    <div>
      <Card className={classes.card} shadow="sm" p="xs">
        <Title order={1} align="center">
          Github Profile
        </Title>
        <Group>
          <div className={classes.imageWrapper}>
            <Image
              radius={15}
              src="https://avatars.githubusercontent.com/u/94411241?v=4"
              alt="Profile Image"
            />
          </div>
          <Stack justify="space-between">
            <Text>Username</Text>
            <Text>Followers</Text>
            <Text>Number of Repositories</Text>
          </Stack>
        </Group>
        <Title order={2} align="center">
          Top 4 Repositories
        </Title>
      </Card>
    </div>
  );
}

export default ProfileCard;
