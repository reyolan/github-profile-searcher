import { ProfileInfo } from "./ContentArea";
import {
  Text,
  Card,
  createStyles,
  Title,
  Image,
  Group,
  Stack,
  SimpleGrid,
} from "@mantine/core";

type ProfileCardProps = {
  profileInfo: ProfileInfo;
};

const useStyles = createStyles(theme => ({
  card: {
    maxWidth: "500px",
    margin: "auto",
    padding: theme.spacing.md,
  },
  imageWrapper: {
    width: "220px",
  },
  headerOne: {
    marginBottom: theme.spacing.md,
  },
  headerTwo: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
}));

function ProfileCard({ profileInfo }: ProfileCardProps): JSX.Element {
  const { classes } = useStyles();
  return (
    <Card className={classes.card} shadow="sm">
      <Title className={classes.headerOne} order={1} align="center">
        Github Profile
      </Title>
      <Group>
        <div className={classes.imageWrapper}>
          <Image radius={15} src={profileInfo.avatarUrl} alt="Profile Image" />
        </div>
        <Stack justify="space-between">
          <Text>Username: {profileInfo.username}</Text>
          <Text>Followers: {profileInfo.followers}</Text>
          <Text>Number of Repositories: {profileInfo.publicRepos}</Text>
        </Stack>
      </Group>
      <Title className={classes.headerTwo} order={2} align="center">
        4 Most Recent Repositories
      </Title>
      <SimpleGrid cols={2}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </SimpleGrid>
    </Card>
  );
}

export default ProfileCard;
