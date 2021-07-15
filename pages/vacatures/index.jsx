import { useState } from 'react';
import useStyles from './vacatures.styles';
import { ContentfulApi } from '../../utils/contentful';
import Error from './../../components/Error';
import FilterForm from '../../components/FilterForm';

import useSWR from 'swr';
import JobList from '../../components/JobList';

import {
  Container,
  Box,
  Button,
  Typography,
  CircularProgress,
} from '@material-ui/core';

const fetcher = async (query, page) => {
  const res = await ContentfulApi.callContentful(query, page);

  return res;
};

export async function getStaticProps() {
  const content = await fetcher(
    { cities: [], jobTypes: [], queryStr: [], lte: [], gte: [] },
    1
  );
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
  const classes = useStyles();

  // Filter form states
  const [queryStr, setQueryStr] = useState([]);

  const [query, setQuery] = useState({
    cities: [],
    jobTypes: [],
    queryStr,
    lte: [],
    gte: [],
  });
  const [currentPage, setCurrentPage] = useState(1);

  // SWR hook
  const { data, error, isValidating } = useSWR(
    () => [query, currentPage],
    (query, currentPage) => fetcher(query, currentPage),
    {
      initialData: content,
      shouldRetryOnError: false,
      revalidateOnFocus: false,
    }
  );

  // pagination buttons
  const totalPages = Math.ceil(data.total / 6);
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

  const clearQuery = () => {
    setCurrentPage(1);
    setQuery({ cities: [], jobTypes: [], queryStr: [], lte: [], gte: [] });
  };

  if (error) return <Error />;

  return (
    <Box>
      <Container className={classes.header}>
        <Typography variant="h1" component="h1" className={classes.h1}>
          Wind nu jouw <br /> droombaan.
        </Typography>
      </Container>
      <Container style={{ marginTop: '2rem', marginBottom: '4rem' }}>
        <form
          className={classes.searchContainer}
          onSubmit={(e) => {
            e.preventDefault();
            const queryStr = document.getElementById('queryStr').value;
            setQueryStr(queryStr);
            setQuery({
              cities: [],
              jobTypes: [],
              queryStr,
              lte: [],
              gte: [],
            });
          }}
        >
          <input
            className={classes.searchInput}
            type="search"
            placeholder="Zoek functie, organisatie of locatie."
            name="queryStr"
            id="queryStr"
          />
          <Button
            name="search"
            color="primary"
            variant="text"
            className={classes.searchButton}
            type="submit"
          >
            Zoek vacatures
          </Button>
        </form>
      </Container>

      <FilterForm
        handleClearQuery={clearQuery}
        handleSetQuery={(obj) => {
          setQuery(obj);
        }}
        values={values}
      />

      <Container style={{ marginTop: '2rem' }}>
        {isValidating ? (
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '2rem',
              marginBottom: '2rem',
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <JobList jobs={data.items} />
        )}
      </Container>
      <Container style={{ marginTop: '2rem', MarginBottom: '2rem' }}>
        {pageArr.map((num) => (
          <Button
            name={`page ${num}`}
            size="medium"
            key={num}
            className={classes.paginationButton}
            onClick={() => {
              setCurrentPage(num);
            }}
          >
            {num}
          </Button>
        ))}
      </Container>
    </Box>
  );
}
