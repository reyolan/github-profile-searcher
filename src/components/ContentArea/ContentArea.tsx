import { useState, KeyboardEvent } from "react";
import { Center, Loader } from "@mantine/core";
import SearchBar from "../SearchBar/SearchBar";
import ProfileCard from "../ProfileCard/ProfileCard";
import getUserDetails from "../../utils/api";
import { UserDetails } from "../../types";
import {
  getFourRecentItem,
  getRepoNameAndUrl,
} from "../../utils/manipulate-data";

export type ProfileInfo = {
  username: string;
  followers: number;
  publicRepos: number;
  avatarUrl: string;
  htmlUrl: string;
};

export type RepoInfo = {
  htmlUrl: string;
  name: string;
};

type SearchError = "User not found" | "";

function ContentArea(): JSX.Element {
  const [searchInput, setSearchInput] = useState("");
  const [profileInfo, setProfileInfo] = useState<ProfileInfo | null>(null);
  const [repoInfo, setRepoInfo] = useState<RepoInfo[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState<SearchError>("");

  const onSubmit = (e: KeyboardEvent<HTMLInputElement>): void => {
    setSearchError("");
    if (e.key === "Enter") {
      setIsLoading(true);
      getUserDetails(searchInput)
        .then(res => {
          const [userDetails, userRepoDetails] = res as UserDetails;
          const { login, followers, public_repos, avatar_url, html_url } =
            userDetails;
          setProfileInfo({
            username: login,
            followers,
            publicRepos: public_repos,
            avatarUrl: avatar_url,
            htmlUrl: html_url,
          });
          const fourRecentRepo = getFourRecentItem(userRepoDetails);
          setRepoInfo(getRepoNameAndUrl(fourRecentRepo));
        })
        .catch(() => {
          setSearchError("User not found");
          setProfileInfo(null);
          setRepoInfo(null);
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <div>
      <SearchBar
        setSearchInput={setSearchInput}
        onSubmit={onSubmit}
        searchError={searchError}
      />
      {isLoading ? (
        <Center>
          <Loader size={36} />
        </Center>
      ) : (
        profileInfo &&
        repoInfo && (
          <ProfileCard profileInfo={profileInfo} repoInfo={repoInfo} />
        )
      )}
    </div>
  );
}

export default ContentArea;
