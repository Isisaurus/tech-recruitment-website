import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// create a class out of all functions
export class ContentfulApi {
  static async getValues() {}
  // make fetch call to contentful API
  static async callContentful(query, page = 1) {
    try {
      console.log(query);
      const res = await client.getEntries({
        content_type: 'job',
        limit: process.env.PAGE_SIZE,
        skip: page === 1 ? 0 : page - 1,
        'fields.city': {
          // ['in']: 'Nijmegen,Amsterdam,Den Haag',
          ['in']: query?.cities || undefined,
        },
        'fields.salaryIndication': {
          ['gte']: query?.gte || undefined,
          ['lte']: query?.lte || undefined,
        },
        'fields.jobType': query?.jobType || undefined,
      });

      let citiesArr = [];

      res.items.forEach((item) => {
        citiesArr.push(item.fields.city);
      });

      console.log(citiesArr);
      // console.log(res);
      return { total: res.total, items: res.items };
    } catch (err) {
      console.log(err + '💥💥💥');
    }
  }
}
