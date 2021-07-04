import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import Skeleton from '../../components/Skeleton';

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
    // if false 404 page will show instead of fallback
    // if true: fallback page is a template for future content to be injected into
    fallback: true,
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

  // conditional redirect if slug doesn't esixt
  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { job: items[0] },
    revalidate: 1,
  };
}

export default function VacancyDetails({ job }) {
  if (!job) return <Skeleton />;
  const {
    jobTitle,
    company,
    location,
    salaryIndication,
    thumbnail,
    requirements,
    benefits,
    details,
    motivationLetter,
    jobType,
    city,
  } = job.fields;
  console.log(job);
  return (
    <div>
      <h3>{jobTitle}</h3>
      <div>{company}</div>
      <div>{city}</div>
      <div>{salaryIndication}</div>
      <div>
        <ul>
          {requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </div>
      <div>{documentToReactComponents(details)}</div>
    </div>
  );
}
