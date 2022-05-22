import { Title, SimpleGrid, Anchor } from "@mantine/core";
import { RepoInfo } from "../ContentArea/ContentArea";
import useStyles from "./RepoDetails.styles";

export type RepoDetailsProps = {
  repoInfo: RepoInfo[];
};

function RepoDetails({ repoInfo }: RepoDetailsProps) {
  const { classes } = useStyles();
  return (
    <>
      <Title className={classes.headerTwo} order={2} align="center">
        4 Most Recent Repositories
      </Title>
      <SimpleGrid className={classes.fourRepository} cols={2} spacing="xs">
        {repoInfo.map((repo, i: number) => (
          <Anchor href={repo.htmlUrl} key={i} target="_blank" align="center">
            {repo.name}
          </Anchor>
        ))}
      </SimpleGrid>
    </>
  );
}

export default RepoDetails;
