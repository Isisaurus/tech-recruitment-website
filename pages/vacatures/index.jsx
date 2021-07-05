import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { ContentfulApi } from '../../utils/contentful';
import JobCard from '../../components/JobCard';
import Pagination from '../../components/Pagination';
import Select from 'react-select';

const fetchJobs = async (query, page) => {
  const data = await ContentfulApi.callContentful(query, page);
  return data;
};

export async function getStaticProps() {
  const data = await fetchJobs();
  const totalPages = data.total / process.env.PAGE_SIZE;

  const { items, cities } = data;

  return {
    props: {
      jobs: items,
      totalPages,
    },
    revalidate: 1,
  };
}

export default function Vacancies({ jobs, currentPage, totalPages }) {
  // // console.log(jobs);
  // console.log(currentPage);
  // console.log(totalPages);

  const [data, setData] = useState(jobs);
  const handleDataChange = async () => {
    const newData = await fetchJobs({ cities: `Amsterdam,Den Haag` }, 1);
    setData(newData.items);
  };

  // console.log(data);

  useEffect(() => {}, [data]);

  return (
    <div style={{ marginLeft: '200px' }}>
      <div>
        <form>{/* <Select /> */}</form>
        <button onClick={handleDataChange}>Clcik to query</button>
      </div>
      {data.map((job) => (
        // <JobCard key={job.sys.id} job={job} />
        <div key={job.sys.id}>job</div>
      ))}
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
