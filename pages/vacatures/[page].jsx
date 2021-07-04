import { ContentfulApi } from '../../utils/contentful';
import JobCard from '../../components/JobCard';

export async function getStaticPaths() {
  const totalPosts = await ContentfulApi.getTotalPostsNumber();
  const totalPages = Math.ceil(totalPosts / process.env.PAGE_SIZE);

  const paths = [];

  /**
   * Start from page 2, so we don't replicate index.js
   * which is page 1
   */
  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    // enable fallback page
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const jobs = await ContentfulApi.getPaginatedItemSummaries(params.page);
  const totalPages = Math.ceil(jobs.total / process.env.PAGE_SIZE);

  return {
    props: {
      jobs: jobs.items,
      currentPage: 1,
      totalPages,
      revalidate: 1,
    },
  };
}

export default function VacancyPage({ jobs, currentPage, totalPages }) {
  //   console.log(jobs);
  //   console.log(currentPage);
  //   console.log(totalPages);
  if (!jobs) return <div>Loading...</div>;
  if (currentPage >= totalPages) return <div>No more content.</div>;

  return (
    <div style={{ marginLeft: '200px' }}>
      <h2>{`Page ${currentPage}`}</h2>
      {jobs.map((job) => (
        <JobCard key={job.sys.id} job={job} />
      ))}
    </div>
  );
}
