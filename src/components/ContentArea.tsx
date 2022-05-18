import { useState, KeyboardEvent } from "react";
import SearchBar from "./SearchBar";
import ProfileCard from "./ProfileCard";
import getRequest, { apiUrl } from "../utils/api";

export type ProfileCardProps = {
  username: string;
  followers: number;
  publicRepos: number;
  avatarUrl: string;
};

function ContentArea(): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>("");
  const [profileInfo, setProfileInfo] = useState<ProfileCardProps>({
    username: "",
    followers: 0,
    publicRepos: 0,
    avatarUrl: "",
  });

  const onSubmit = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      const url = apiUrl(searchInput);

      Promise.all([getRequest(url.userUrl), getRequest(url.repoUrl)]).then(
        res => console.log(res)
      );
    }
  };

  return (
    <div>
      <SearchBar setSearchInput={setSearchInput} onSubmit={onSubmit} />
      <ProfileCard
        username={profileInfo?.username ?? ""}
        followers={profileInfo?.followers ?? 0}
        publicRepos={profileInfo?.publicRepos ?? 0}
        avatarUrl={profileInfo?.avatarUrl ?? ""}
      />
    </div>
  );
}

export default ContentArea;
