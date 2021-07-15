import { useState } from 'react';
import { ContentfulApi } from '../../utils/contentful';
import Error from './../../components/Error';
import FilterForm from '../../components/FilterForm';

import useSWR from 'swr';
import JobList from '../../components/JobList';

import {
  Container,
  Box,
  Button,
  makeStyles,
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

const useStyles = makeStyles((theme) => ({
  paginationButton: {
    padding: '.5em',
    color: '#7a7a7a',
    '&:hover': {
      background: 'none',
      color: '#333',
    },
  },
  h1: {
    marginTop: '4rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem',
    },
  },
  header: {
    height: '40vh',
    maxHeight: '20rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      maxHeight: '13rem',
    },
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  searchInput: {
    outline: 'none',
    border: 'none',
    borderBottom: '2px solid #7a7a7a',
    padding: '.5rem 1rem .5rem 0',
    textAlign: 'left',
    fontSize: '1rem',
    width: '20rem',
    maxWidth: '100%',
    background: 'transparent',
    fontFamily: 'inherit',
    color: 'inherit',

    '&:focus': {
      borderBottom: '2px solid #0467B1',
    },
    '&::placeholder': {
      color: '#7a7a7a',
      opacity: '.8',
    },
  },
  searchButton: {
    margin: '0',
    paddingBottom: '.3rem',
    borderBottom: '2px solid #7a7a7a',
    borderRadius: 0,
    '&:hover': {
      borderBottom: '2px solid #0467B1',
    },
    [theme.breakpoints.down('xs')]: {
      borderBottom: '2px solid transparent',
      marginTop: '1rem',
      padding: '.3rem 0rem',
    },
  },
}));

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
