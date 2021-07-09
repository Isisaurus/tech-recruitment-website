import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { ContentfulApi } from '../../utils/contentful';
import Error from './../../components/Error';

import Select from 'react-select';

import useSWR from 'swr';
import JobList from '../../components/JobList';

import {
  Container,
  Box,
  Button,
  makeStyles,
  Typography,
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
    // revalidate: 1,
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
  header: {
    height: '40vh',
    maxHeight: '20rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  const [gte, setGte] = useState([]);
  const [lte, setLte] = useState([]);
  const [queryStr, setQueryStr] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [query, setQuery] = useState({ cities, jobTypes, queryStr, lte, gte });
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
    setGte([]);
    setLte([]);
    setQueryStr([]);
    setCities([]);
    setJobTypes([]);
    setCurrentPage(1);
    setQuery({ cities: [], jobTypes: [], queryStr: [], lte: [], gte: [] });
  };

  // console.log(isValidating);
  // // console.log(data);
  // console.log(query);

  if (error) return <Error />;

  if (isValidating) return <div>Loading...</div>;

  if (data)
    return (
      <Box>
        <Container className={classes.header}>
          <Typography variant="h1">
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
              color="primary"
              variant="text"
              className={classes.searchButton}
              type="submit"
            >
              Zoek vacatures
            </Button>
          </form>
        </Container>
        <Container>
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
          <div style={{ margin: '2em 0' }}>
            <label htmlFor="gte">More than equal</label>
            <input
              type="number"
              name="gte"
              id="gte"
              onChange={(e) => {
                setGte(e.target.value);
              }}
            />
          </div>
          <div style={{ margin: '2em 0' }}>
            <label htmlFor="lte">Less than equal</label>
            <input
              type="number"
              name="lte"
              id="lte"
              onChange={(e) => {
                setLte(e.target.value);
              }}
            />
          </div>
          <button
            style={{ margin: '2em 0' }}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(1);
              setQuery({ cities, jobTypes, queryStr, lte, gte });
            }}
          >
            SET QUERY
          </button>
          <button
            style={{ margin: '2em 0' }}
            onClick={(e) => {
              e.preventDefault();
              clearQuery();
            }}
          >
            CLEAR QUERY
          </button>
        </Container>
        <Container style={{ marginTop: '2rem' }}>
          <JobList jobs={data.items} />
        </Container>
        <Container style={{ margin: '2rem 0' }}>
          {pageArr.map((num) => (
            <Button
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
