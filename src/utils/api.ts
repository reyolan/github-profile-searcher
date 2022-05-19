export function apiUrl(searchedUser: string) {
  return {
    userUrl: `https://api.github.com/users/${searchedUser}`,
    repoUrl: `https://api.github.com/users/${searchedUser}/repos`,
  };
}

async function getRequest(url: string): Promise<unknown> {
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

function getUserDetails(searchedUser: string) {
  const url = apiUrl(searchedUser);
  const promises: [Promise<unknown>, Promise<unknown>] = [
    getRequest(url.userUrl),
    getRequest(url.repoUrl),
  ];

  return Promise.all(promises);
}

export default getUserDetails;
