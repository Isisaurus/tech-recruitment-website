import { createClient } from 'contentful';
import { fetchContent } from '../../utils/contentful';
import JobCard from '../../components/JobCard';

export async function getStaticProps() {
  const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  const res = await fetchContent(`
    {
      jobCollection {
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
  `);

  return {
    props: {
      // jobs: res.items,
      jobs: res.jobCollection.items,
    },
    revalidate: 1,
  };
}

export default function Vacancies({ jobs }) {
  // console.log(jobs);
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.sys.id} job={job} />
      ))}
    </div>
  );
}
