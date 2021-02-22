const fetchGraphQl = async (
  text: string | null | undefined,
  variables?: Record<string, unknown>,
) => {
  const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('https://api.github.com/graphql', {
    body: JSON.stringify({
      query: text,
      variables,
    }),
    headers: {
      Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  // Get the response as JSON
  return await response.json();
};

export default fetchGraphQl;
