import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { ContentfulApi } from '../../utils/contentful';

import Select from 'react-select';

import useSWR from 'swr';
import JobList from '../../components/JobList';

const fetcher = async (query, page) => {
  const res = await ContentfulApi.callContentful(query, page);

  return res;
};

export async function getStaticProps() {
  const content = await fetcher();
  const values = await ContentfulApi.getValues();

  return {
    props: {
      content,
      values,
    },
    revalidate: 1,
  };
}

export default function Vacancies({ content, values }) {
  const [cities, setCities] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [query, setQuery] = useState({});
  const [shouldFetch, setShouldFetch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error } = useSWR(
    () => (shouldFetch ? [query, currentPage] : [{}, 1]),
    (cities, page) => fetcher(cities, page),
    {
      initialData: content,
      shouldRetryOnError: false,
    }
  );

  const totalPages = Math.ceil(data.total / 6);

  // pagination buttons
  const createPagination = (total) => {
    let i = 0;
    let arr = [];
    while (i < total) {
      i++;
      arr.push(i);
    }
    return arr;
  };
  const pageArr = createPagination(totalPages);

  if (error) return <div>Sorry! Something went wrong!</div>;

  if (data)
    return (
      <div style={{ marginLeft: '200px' }}>
        <div style={{ margin: '2em 0' }}>
          <Select
            options={values.cities}
            getOptionLabel={(city) => city}
            getOptionValue={(city) => city}
            instanceId="cities"
            placeholder="Filter by cities.."
            onChange={(val) => {
              setCities(val);
            }}
            isMulti
          />
        </div>
        <div style={{ margin: '2em 0' }}>
          <Select
            options={values.jobTypes}
            getOptionLabel={(type) => type}
            getOptionValue={(type) => type}
            instanceId="jobTypes"
            placeholder="Filter by job type..."
            onChange={(val) => {
              setJobTypes(val);
            }}
            isMulti
          />
        </div>
        <button
          style={{ margin: '2em 0' }}
          onClick={() => {
            setQuery({ cities, jobTypes });
            setCurrentPage(1);
            setShouldFetch(true);
          }}
        >
          SET QUERY
        </button>
        <div>
          {pageArr.map((num) => (
            <button
              key={num}
              onClick={() => {
                setCurrentPage(num);
                setShouldFetch(true);
              }}
            >
              {num}
            </button>
          ))}
        </div>
        <div>
          <JobList jobs={data.items} />
        </div>
      </div>
    );

  return <div>Loading...</div>;
}
