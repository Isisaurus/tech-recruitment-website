const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export async function fetchContent(query) {
  try {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space}`,
      {
        method: 'POST', // GraphQL *always* uses POST requests!
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${accessToken}`, // add access token header
        },
        // send the query in GraphiQL as a string
        body: JSON.stringify({ query }),
      }
    );
    const { data } = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
