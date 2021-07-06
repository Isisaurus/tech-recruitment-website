import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { ContentfulApi } from '../../utils/contentful';

import Select from 'react-select';

import useSWR from 'swr';
import JobList from '../../components/JobList';

const fetcher = async (page) => {
  const res = await ContentfulApi.callContentful({}, page);
  console.log(`FETCHER! ${page}`);
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
  const [shouldFetch, setShouldFetch] = useState(false);
  const [currentPage, setCurrentPage] = useState();
  console.log(currentPage);

  const { data, error } = useSWR(
    () => (shouldFetch ? currentPage : 1),
    fetcher,
    {
      initialData: content,
      shouldRetryOnError: false,
    }
  );

  console.log(data);
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
