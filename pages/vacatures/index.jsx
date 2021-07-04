import { createClient } from 'contentful';
import JobCard from '../../components/JobCard';

export async function getStaticProps() {
  // make connection to contentful space
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: 'job',
  });

  return {
    props: {
      jobs: res.items,
    },
    revalidate: 1,
  };
}

export default function Vacancies({ jobs }) {
  console.log(jobs);
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.sys.id} job={job} />
      ))}
    </div>
  );
}
