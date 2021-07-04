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

export async function createQuery(page = 1) {
  const pageSize = 6;
  const total = await fetchContent(`
  {
    jobCollection {
       total
     }
   }
  `);
  const numOfTotalItems = total.jobCollection.total || 0;
  const skipMultiplier = page === 1 ? 0 : page - 1;
  const skip = skipMultiplier > 0 ? pageSize * skipMultiplier : 0;

  console.log(page);
  console.log(skip);
  return `
  {
    jobCollection (limit: ${pageSize}, skip: ${skip}) {
              items {
                sys {
                  id
                },
                jobTitle,
                company,
                city,
                salaryIndication,
                benefits,
                requirements,
                jobType,
                motivationLetter,
                thumbnail {
                  title
                  description
                  contentType
                  fileName
                  size
                  url
                  width
                  height
                },
                slug
              }
            }
    }
  `;
}

// create a class out of all functions
export class ContentfulApi {
  // make fetch call to contentful API
  static async callContentful(query) {
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
  // get number of all items from contentful
  static async getTotalPostsNumber() {
    const query = `
      {
        jobCollection {
           total
         }
       }
      `;

    const response = await this.callContentful(query);
    const totalPosts = response.data.jobCollection.total
      ? response.data.jobCollection.total
      : 0;

    return totalPosts;
  }
  //pagination
  static async getPaginatedItemSummaries(page) {
    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip =
      skipMultiplier > 0 ? process.env.PAGE_SIZE * skipMultiplier : 0;

    const query = ` {
        jobCollection (limit: ${process.env.PAGE_SIZE}, skip: ${skip}) {
                total
                  items {
                    sys {
                      id
                    },
                    jobTitle,
                    company,
                    city,
                    salaryIndication,
                    benefits,
                    requirements,
                    jobType,
                    motivationLetter,
                    thumbnail {
                      url
                      width
                      height
                    },
                    slug
                  }
                }
        }`;

    // Call out to the API
    const response = await this.callContentful(query);
    const data = response.jobCollection.items.length
      ? {
          total: response.jobCollection.total,
          items: response.jobCollection.items,
        }
      : { total: 0, items: [] };

    return data;
  }
}
