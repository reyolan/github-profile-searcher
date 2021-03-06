import { ProfileInfo } from "../ContentArea/ContentArea";
import { Title, Text, Group, Anchor, Image, Stack } from "@mantine/core";
import useStyles from "./ProfileDetails.styles";

export type ProfileDetailsProps = {
  profileInfo: ProfileInfo;
};

function ProfileDetails({ profileInfo }: ProfileDetailsProps) {
  const { classes } = useStyles();
  return (
    <>
      <Title className={classes.headerOne} order={1} align="center">
        Github Profile
      </Title>
      <Group position="center">
        <div className={classes.imageWrapper}>
          <Image radius="lg" src={profileInfo.avatarUrl} alt="Profile Image" />
        </div>
        <Stack justify="space-between" spacing="md">
          <Text>
            <span className={classes.spanLabel}>Username: </span>
            <Anchor href={profileInfo.htmlUrl} target="_blank">
              {profileInfo.username}
            </Anchor>
          </Text>
          <Text>
            <span className={classes.spanLabel}>Followers: </span>{" "}
            {profileInfo.followers}
          </Text>
          <Text>
            <span className={classes.spanLabel}> Public Repositories: </span>{" "}
            {profileInfo.publicRepos}
          </Text>
        </Stack>
      </Group>
    </>
  );
}

export default ProfileDetails;
