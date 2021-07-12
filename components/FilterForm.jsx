import { useState } from 'react';

import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  makeStyles,
  Input,
  Hidden,
} from '@material-ui/core';

import FilterListIcon from '@material-ui/icons/FilterListOutlined';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '35rem',
    maxWidth: '100%',
  },
  rangeContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  TextField1: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2rem',
    },
  },
  buttonsContainer: {
    marginTop: '4rem',
    marginBottom: '1rem',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  button1: {
    marginRight: '2rem',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      marginBottom: '1rem',
    },
  },
}));

export default function FilterForm({
  handleClearQuery,
  handleSetQuery,
  values,
}) {
  // console.log(values);
  const classes = useStyles();

  const [gte, setGte] = useState([]);
  const [lte, setLte] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);

  const handleCityChange = (event) => {
    setCities(event.target.value);
  };
  const handleTypeChange = (event) => {
    setJobTypes(event.target.value);
  };

  const resetQueries = () => {
    setGte([]);
    setLte([]);
    setCities([]);
    setJobTypes([]);
  };

  return (
    <Container>
      <Accordion
        style={{
          background: 'rgba(122,122,122, 0.08)',
          boxShadow: 'none',
        }}
      >
        <AccordionSummary expandIcon={<FilterListIcon color="primary" />}>
          <Typography variant="h6" color="primary">
            Filter
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container>
            <Box className={classes.rangeContainer}>
              <TextField
                label="Min. salary (EUR)"
                type="number"
                variant="standard"
                defaultValue="0"
                onChange={(e) => {
                  setGte(e.target.value);
                }}
                className={classes.TextField1}
              />
              <Hidden smDown implementation="css">
                <Typography variant="subtitle2" style={{ padding: '0 1rem' }}>
                  -
                </Typography>
              </Hidden>
              <TextField
                label="Max. salary (EUR)"
                type="number"
                variant="standard"
                defaultValue="5000"
                onChange={(e) => {
                  setLte(e.target.value);
                }}
              />
            </Box>
            <Box
              style={{
                marginTop: '1rem',
              }}
            >
              <FormControl variant="standard" className={classes.formControl}>
                <InputLabel>Location</InputLabel>
                <Select
                  labelId="demo-mutiple-name-label"
                  id="demo-mutiple-name"
                  multiple
                  value={cities}
                  renderValue={(selected) => selected.join(', ')}
                  onChange={handleCityChange}
                  input={<Input />}
                >
                  {values.cities.map((city) => (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box
              style={{
                marginTop: '1rem',
              }}
            >
              <FormControl variant="standard" className={classes.formControl}>
                <InputLabel>Job Type</InputLabel>
                <Select
                  labelId="demo-mutiple-name-label2"
                  id="demo-mutiple-name2"
                  multiple
                  value={jobTypes}
                  renderValue={(selected) => selected.join(', ')}
                  onChange={handleTypeChange}
                  input={<Input />}
                >
                  {values.jobTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box className={classes.buttonsContainer}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  const queryStr = [];
                  handleSetQuery({ cities, jobTypes, queryStr, lte, gte });
                }}
                className={classes.button1}
              >
                Filter Jobs
              </Button>
              <Button
                onClick={() => {
                  resetQueries();
                  handleClearQuery();
                }}
              >
                Clear Filter
              </Button>
            </Box>
          </Container>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
