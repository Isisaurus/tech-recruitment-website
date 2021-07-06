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

  return {
    props: {
      content,
    },
    revalidate: 1,
  };
}

export default function Vacancies({ content }) {
  const [cities, setCities] = useState({});
  const [shouldFetch, setShouldFetch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error } = useSWR(
    () => (shouldFetch ? [cities, currentPage] : [{}, 1]),
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
        <button
          onClick={() => {
            setCities({ cities: 'Den Haag' });
            setCurrentPage(1);
            setShouldFetch(true);
          }}
        >
          SET CITY: Den Haag
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
