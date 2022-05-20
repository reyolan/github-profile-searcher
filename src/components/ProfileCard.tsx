import RepoDetails, { RepoDetailsProps } from "./RepoDetails";
import ProfileDetails, { ProfileDetailsProps } from "./ProfileDetails";
import { Card, createStyles } from "@mantine/core";

type ProfileCardProps = RepoDetailsProps & ProfileDetailsProps;

const useStyles = createStyles(theme => ({
  card: {
    maxWidth: "500px",
    margin: "auto",
    padding: theme.spacing.md,
  },
}));

function ProfileCard({ profileInfo, repoInfo }: ProfileCardProps): JSX.Element {
  const { classes } = useStyles();
  return (
    <Card className={classes.card} shadow="sm">
      <ProfileDetails profileInfo={profileInfo} />
      <RepoDetails repoInfo={repoInfo} />
    </Card>
  );
}

export default ProfileCard;
