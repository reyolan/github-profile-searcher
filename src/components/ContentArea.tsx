import { useState, KeyboardEvent } from "react";
import SearchBar from "./SearchBar";
import ProfileCard from "./ProfileCard";
import getUserDetails from "../utils/api";
import getFourRecentItem from "../utils/manipulate-data";

export type ProfileInfo = {
  username: string;
  followers: number;
  publicRepos: number;
  avatarUrl: string;
};

function ContentArea(): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>("");
  const [profileInfo, setProfileInfo] = useState<ProfileInfo | null>(null);
  const [searchError, setSearchError] = useState<string>("");

  const onSubmit = (e: KeyboardEvent<HTMLInputElement>): void => {
    setSearchError("");
    if (e.key === "Enter") {
      getUserDetails(searchInput)
        .then((res: any) => {
          console.log(res);
          const [userDetails, userRepoDetails] = res;
          const { login, followers, public_repos, avatar_url } = userDetails;
          const details = getFourRecentItem(userRepoDetails);
          console.log(details);
          setProfileInfo({
            username: login,
            followers,
            publicRepos: public_repos,
            avatarUrl: avatar_url,
          });
          // userRepoDetails.sort((a: string, b: string) => a.date - b.date);
        })
        .catch(res => setSearchError("User not found"));
    }
  };

  return (
    <div>
      <SearchBar
        setSearchInput={setSearchInput}
        onSubmit={onSubmit}
        searchError={searchError}
      />
      {profileInfo && <ProfileCard profileInfo={profileInfo} />}
    </div>
  );
}

export default ContentArea;
