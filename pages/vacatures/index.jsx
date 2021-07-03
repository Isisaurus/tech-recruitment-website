import { createClient } from 'contentful';
import JobCard from '../../components/JobCard';

export async function getStaticProps() {
  // make connection to contentful space
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: 'job',
  });

  return {
    props: {
      jobs: res.items,
    },
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
