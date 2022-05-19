import { RepoDetailsApiResponse } from "../types";

export function getFourRecentItem<T extends { created_at: string }>(
  repoDetails: T[]
) {
  const sortedRepo = repoDetails.sort((a, b) => {
    if (a.created_at < b.created_at) {
      return 1;
    } else if (a.created_at > b.created_at) {
      return -1;
    } else {
      return 0;
    }
  });
  return sortedRepo.slice(0, 4);
}

export function getRepoNameAndUrl(repos: RepoDetailsApiResponse[]) {
  return repos.map(repo => {
    return { htmlUrl: repo.html_url, name: repo.name };
  });
}
