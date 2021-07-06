import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// create a class out of all functions
export class ContentfulApi {
  static async getValues() {
    try {
      const { items } = await client.getEntries({
        content_type: 'job',
      });
      let citiesSet = new Set();
      let jobTypeSet = new Set();
      items.forEach((item) => {
        citiesSet.add(item.fields.city);
        jobTypeSet.add(item.fields.jobType);
      });
      const cities = Array.from(citiesSet);
      const jobTypes = Array.from(jobTypeSet);

      return { cities, jobTypes };
    } catch (err) {
      console.log(err + '💥💥💥');
    }
  }
  // make fetch call to contentful API
  static async callContentful(query, page = 1) {
    /*
    const query = {
      cities: 'Amsterdam,DenHaag,Nijmegen',
      gte: 2000,
      lte: 3500,
      jobType: 'full-time,part-time'
    }
    */
    try {
      const res = await client.getEntries({
        content_type: 'job',
        limit: process.env.PAGE_SIZE,
        skip: page === 1 ? 0 : process.env.PAGE_SIZE * (page - 1),
        'fields.city': {
          // ['in']: 'Nijmegen,Amsterdam,Den Haag',
          ['in']: query?.cities || undefined,
        },
        'fields.salaryIndication': {
          ['gte']: query?.gte || undefined,
          ['lte']: query?.lte || undefined,
        },
        'fields.jobType': {
          ['in']: query?.jobType || undefined,
        },
      });

      return { total: res.total, items: res.items };
    } catch (err) {
      console.log(err + '💥💥💥');
    }
  }
}
