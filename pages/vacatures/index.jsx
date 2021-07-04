import { createClient } from 'contentful';
import { ContentfulApi } from '../../utils/contentful';
import JobCard from '../../components/JobCard';
import Pagination from '../../components/Pagination';

export async function getStaticProps() {
  const jobs = await ContentfulApi.getPaginatedItemSummaries(1);
  const totalPages = Math.ceil(jobs.total / process.env.PAGE_SIZE);

  return {
    props: {
      jobs: jobs.items,
      currentPage: 1,
      totalPages,
    },
    revalidate: 1,
  };
}

export default function Vacancies({ jobs, currentPage, totalPages }) {
  // console.log(jobs);
  // console.log(currentPage);
  // console.log(totalPages);
  return (
    <div style={{ marginLeft: '200px' }}>
      {jobs.map((job) => (
        <JobCard key={job.sys.id} job={job} />
      ))}
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
