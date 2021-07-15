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
  Input,
  Hidden,
} from '@material-ui/core';
import useStyles from './FilterForm.styles';

import FilterListIcon from '@material-ui/icons/FilterListOutlined';

export default function FilterForm({
  handleClearQuery,
  handleSetQuery,
  values,
}) {
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
                name="set filter"
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
                name="clear filter"
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
