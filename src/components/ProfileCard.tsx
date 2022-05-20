import { ProfileInfo, RepoInfo } from "./ContentArea";
import {
  Text,
  Card,
  createStyles,
  Title,
  Image,
  Group,
  Stack,
  SimpleGrid,
  Anchor,
} from "@mantine/core";

type ProfileCardProps = {
  profileInfo: ProfileInfo;
  repoInfo: RepoInfo[];
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
  fourRepository: {
    justifyItems: "center",
  },
}));

function ProfileCard({ profileInfo, repoInfo }: ProfileCardProps): JSX.Element {
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
          <Text>
            Username:{" "}
            <Anchor href={profileInfo.htmlUrl} target="_blank">
              {profileInfo.username}
            </Anchor>
          </Text>
          <Text>Followers: {profileInfo.followers}</Text>
          <Text>Number of Repositories: {profileInfo.publicRepos}</Text>
        </Stack>
      </Group>
      <Title className={classes.headerTwo} order={2} align="center">
        4 Most Recent Repositories
      </Title>
      <SimpleGrid className={classes.fourRepository} cols={2} spacing="xs">
        {repoInfo.map(repo => (
          <Anchor href={repo.htmlUrl} target="_blank">
            {repo.name}
          </Anchor>
        ))}
      </SimpleGrid>
    </Card>
  );
}

export default ProfileCard;
