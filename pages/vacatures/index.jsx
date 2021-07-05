import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { ContentfulApi } from '../../utils/contentful';
import JobCard from '../../components/JobCard';
import Pagination from '../../components/Pagination';
import Select from 'react-select';

const fetchJobs = async (query, page) => {
  const data = await ContentfulApi.callContentful(query, page);
  const valueData = await ContentfulApi.getValues();
  return { data, valueData };
};

export async function getStaticProps() {
  const data = await fetchJobs();
  const totalPages = Math.ceil(data.data.total / process.env.PAGE_SIZE);

  const items = data.data.items;
  const values = data.valueData;

  return {
    props: {
      jobs: items,
      totalPages,
      values,
    },
    revalidate: 1,
  };
}

export default function Vacancies({ jobs, currentPage, totalPages, values }) {
  // console.log(jobs);
  // console.log(currentPage);
  // console.log(totalPages);
  // console.log(values);

  const [data, setData] = useState(jobs);
  const handleDataChange = async () => {
    const newData = await fetchJobs({ cities: `Amsterdam,Den Haag` }, 1);
    setData(newData.data.items);
  };

  // console.log(data);

  const handleCities = (values) => {
    console.log(values);
  };
  const handleTypes = (values) => {
    console.log(values);
  };

  useEffect(() => {}, [data]);

  return (
    <div style={{ marginLeft: '200px' }}>
      <div>
        <form>
          <Select
            options={values.cities}
            getOptionLabel={(option) => option}
            getOptionValue={(option) => option}
            instanceId="cities"
            placeholder="Filter by cities..."
            isMulti
            onChange={handleCities}
          />
          <br />
          <Select
            options={values.jobTypes}
            getOptionLabel={(item) => item}
            getOptionValue={(item) => item}
            instanceId="jobTypes"
            placeholder="Filter by job type..."
            isMulti
            onChange={handleTypes}
          />
          <br />
        </form>
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
