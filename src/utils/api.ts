export function apiUrl(searchedUser: string) {
  return {
    userUrl: `https://api.github.com/users/${searchedUser}`,
    repoUrl: `https://api.github.com/users/${searchedUser}/repos`,
  };
}

async function getRequest(url: string): Promise<any> {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application / vnd.github.v3 + json",
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export default getRequest;

// getRequest(searchInput).then(res => {
//   console.log(res);
//   const { login, followers, public_repos, avatar_url } = res;
//   setProfileInfo({
//     username: login,
//     followers,
//     publicRepos: public_repos,
//     avatarUrl: avatar_url,
//   });
// });
