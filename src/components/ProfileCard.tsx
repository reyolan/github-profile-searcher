import { ProfileCardProps } from "./ContentArea";
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

function ProfileCard({
  username,
  followers,
  publicRepos,
  avatarUrl,
}: ProfileCardProps): JSX.Element {
  const { classes } = useStyles();
  return (
    <div>
      <Card className={classes.card} shadow="sm" p="xs">
        <Title order={1} align="center">
          Github Profile
        </Title>
        <Group>
          <div className={classes.imageWrapper}>
            <Image radius={15} src={avatarUrl} alt="Profile Image" />
          </div>
          <Stack justify="space-between">
            <Text>Username: {username}</Text>
            <Text>Followers: {followers}</Text>
            <Text>Number of Repositories: {publicRepos}</Text>
          </Stack>
        </Group>
        <Title order={2} align="center">
          4 Most Recent Repositories
        </Title>
      </Card>
    </div>
  );
}

export default ProfileCard;
