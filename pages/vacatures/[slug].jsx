import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

// generate static pages at build time for each slug
export const getStaticPaths = async () => {
  // get all items
  const res = await client.getEntries({ content_type: 'job' });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    // 404 page will show instead of fallback
    fallback: false,
  };
};

// fecth a single item based on slug at build time
// has access to contect object, which has params defined from getStaticPaths
export async function getStaticProps({ params }) {
  // get a single recipe based on slug field (unique)
  const { items } = await client.getEntries({
    content_type: 'job',
    'fields.slug': params.slug,
  });

  return {
    props: { job: items[0] },
  };
}

export default function VacancyDetails({ job }) {
  console.log(job);
  return <div>Vacancy Details</div>;
}
