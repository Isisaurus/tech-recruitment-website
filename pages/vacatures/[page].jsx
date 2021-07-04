import { ContentfulApi } from '../../utils/contentful';
import JobCard from '../../components/JobCard';
import Pagination from '../../components/Pagination';

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

  // conditional redirect if slug doesn't esixt
  if (!jobs.items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      jobs: jobs.items,
      currentPage: params.page,
      totalPages,
    },
    revalidate: 1,
  };
}

export default function VacancyPage({ jobs, currentPage, totalPages }) {
  if (!jobs) return <div>Loading...</div>;
  if (currentPage > totalPages) return <div>No more content.</div>;

  return (
    <div style={{ marginLeft: '200px' }}>
      {jobs.map((job) => (
        <JobCard key={job.sys.id} job={job} />
      ))}
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
