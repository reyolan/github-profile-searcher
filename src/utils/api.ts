const BASE_URL = "https://api.github.com/users";

async function postRequest(searchedUser: string): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/${searchedUser}`, {
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

export default postRequest;
