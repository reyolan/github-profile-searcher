import RepoDetails, { RepoDetailsProps } from "../RepoDetails/RepoDetails";
import ProfileDetails, {
  ProfileDetailsProps,
} from "../ProfileDetails/ProfileDetails";
import { Card } from "@mantine/core";
import useStyles from "./ProfileCard.styles";

type ProfileCardProps = RepoDetailsProps & ProfileDetailsProps;

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
