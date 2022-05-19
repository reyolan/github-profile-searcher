import { useState, KeyboardEvent } from "react";
import SearchBar from "./SearchBar";
import ProfileCard from "./ProfileCard";
import getUserDetails from "../utils/api";
import {
  UserDetailsApiResponse,
  RepoDetailsApiResponse,
  UserDetails,
} from "../types";
import { getFourRecentItem, getRepoNameAndUrl } from "../utils/manipulate-data";

export type ProfileInfo = {
  username: string;
  followers: number;
  publicRepos: number;
  avatarUrl: string;
};

export type RepoInfo = {
  htmlUrl: string;
  name: string;
};

function ContentArea(): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>("");
  const [profileInfo, setProfileInfo] = useState<ProfileInfo | null>(null);
  const [repoInfo, setRepoInfo] = useState<RepoInfo[] | null>(null);
  const [searchError, setSearchError] = useState<string>("");

  const onSubmit = (e: KeyboardEvent<HTMLInputElement>): void => {
    setSearchError("");
    if (e.key === "Enter") {
      getUserDetails(searchInput)
        .then(res => {
          const [userDetails, userRepoDetails] = res as UserDetails;
          const { login, followers, public_repos, avatar_url } = userDetails;
          setProfileInfo({
            username: login,
            followers,
            publicRepos: public_repos,
            avatarUrl: avatar_url,
          });
          const fourRecentRepo = getFourRecentItem(userRepoDetails);
          setRepoInfo(getRepoNameAndUrl(fourRecentRepo));
          console.log(fourRecentRepo);
        })
        .catch(() => setSearchError("User not found"));
    }
  };

  return (
    <div>
      <SearchBar
        setSearchInput={setSearchInput}
        onSubmit={onSubmit}
        searchError={searchError}
      />
      {profileInfo && repoInfo && (
        <ProfileCard profileInfo={profileInfo} repoInfo={repoInfo} />
      )}
    </div>
  );
}

export default ContentArea;
