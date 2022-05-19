export function apiUrl(searchedUser: string) {
  return {
    userUrl: `https://api.github.com/users/${searchedUser}`,
    repoUrl: `https://api.github.com/users/${searchedUser}/repos`,
  };
}

async function getRequest(url: string): Promise<Response> {
  const response = await fetch(url, {
    headers: {
      Accept: "application / vnd.github.v3 + json",
    },
  });

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
  return response.json();
}

async function getUserDetails(searchedUser: string) {
  const url = apiUrl(searchedUser);
  const promises = [getRequest(url.userUrl), getRequest(url.repoUrl)];

  const response = await Promise.all(promises);
  return response;
}

export default getUserDetails;
