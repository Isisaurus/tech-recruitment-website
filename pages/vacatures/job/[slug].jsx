import { useState } from 'react';
import useStyles from './slug.styles';

import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Skeleton from './../../../components/Skeleton';
import { useRouter } from 'next/router';

import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';

import {
  Box,
  Container,
  Typography,
  Button,
  CardMedia,
  Paper,
  ListItem,
  Grid,
  TextField,
  Input,
  InputLabel,
} from '@material-ui/core';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// generate static pages at build time for each slug using Contantful Content Delivery API
export const getStaticPaths = async () => {
  // get all items
  const res = await client.getEntries({ content_type: 'job' });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    // if false 404 page will show instead of fallback
    // if true: fallback page is a template for future content to be injected into
    fallback: true,
  };
};

// fecth a single item based on slug at build time
// has access to contect object, which has params defined from getStaticPaths
export async function getStaticProps({ params }) {
  // get a single job based on slug field (unique)
  const { items } = await client.getEntries({
    content_type: 'job',
    'fields.slug': params.slug,
  });

  // conditional redirect if slug doesn't esixt
  if (!items.length) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: { job: items[0] },
    revalidate: 1,
  };
}

export default function VacancyDetails({ job }) {
  const router = useRouter();
  const [submit, setSubmit] = useState(false);
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById('soliciteer-form').reset();
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 5000);
  };

  if (router.isFallback) {
    return <Skeleton />;
  }

  const {
    jobTitle,
    company,
    salaryIndication,
    thumbnail,
    requirements,
    benefits,
    details,
    motivationLetter,
    jobType,
    city,
  } = job.fields;

  return (
    <>
      <Box style={{ marginTop: '2rem', marginBottom: '4rem' }}>
        <Box className={classes.thumbnailContainer}>
          <CardMedia
            image={`https:${thumbnail.fields.file.url}`}
            className={classes.thumbnail}
          />
          <Container className={classes.overview}>
            <Typography variant="body1">{company}</Typography>
            <Typography variant="h1" component="h1" className={classes.h1}>
              {jobTitle}
            </Typography>
            <Box className={classes.labelContainer}>
              <Button
                component="span"
                size="large"
                className={classes.labelButton}
                style={{ color: 'white' }}
                disabled
                startIcon={<LocationOnOutlinedIcon />}
              >
                {city}
              </Button>
              <Button
                size="large"
                component="span"
                className={classes.labelButton}
                style={{ color: 'white' }}
                disabled
                startIcon={<WatchLaterOutlinedIcon />}
              >
                {jobType}
              </Button>
              <Typography
                className={classes.labelButton}
              >{`~ ${salaryIndication} / maand`}</Typography>
            </Box>
          </Container>
        </Box>
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <Typography paragraph component="div">
              {documentToReactComponents(details)}
            </Typography>
          </Paper>
        </Container>
        <Container style={{ marginTop: '6rem' }}>
          <Typography variant="h1" component="h2" className={classes.h1}>
            Vereisten
          </Typography>
          <div>
            <Typography component="ul" className={classes.ul}>
              {requirements.map((req, i) => (
                <ListItem component="li" key={i} divider>
                  {req}
                </ListItem>
              ))}
            </Typography>
          </div>
        </Container>
        <Container style={{ marginTop: '6rem' }}>
          <Typography variant="h1" component="h2" className={classes.h1}>
            Voordelen
          </Typography>
          <div>
            <Typography component="ul" className={classes.ul}>
              {benefits.map((req, i) => (
                <ListItem component="li" key={i} divider>
                  {req}
                </ListItem>
              ))}
            </Typography>
          </div>
        </Container>
        <Container style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          <Typography component="h2" variant="h1" className={classes.h1}>
            Soliciteer
          </Typography>
          <Container>
            <Grid
              container
              component="form"
              id="soliciteer-form"
              onSubmit={handleSubmit}
              spacing={6}
            >
              <Grid
                item
                xs={12}
                sm={6}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <TextField
                  id="name"
                  label="Full Naam"
                  variant="standard"
                  type="text"
                  required
                  className={classes.TextField}
                />
                <TextField
                  id="email"
                  label="Email Adres"
                  variant="standard"
                  type="email"
                  required
                  className={classes.TextField}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <InputLabel component="label" htmlFor="cv">
                  Upload your CV*
                </InputLabel>
                <Input
                  id="cv"
                  name="cv"
                  color="primary"
                  variant="outlined"
                  type="file"
                  className={classes.fileInput}
                  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  required
                />
                {motivationLetter ? (
                  <>
                    <InputLabel component="label" htmlFor="motivation">
                      Upload your motivation*
                    </InputLabel>
                    <Input
                      id="motivation"
                      name="motivation"
                      color="primary"
                      variant="outlined"
                      type="file"
                      className={classes.fileInput}
                      accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      required
                    />
                  </>
                ) : null}
              </Grid>
              <Grid item sx={12}>
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  name="soliciteer"
                >
                  Soliciteer
                </Button>
              </Grid>
            </Grid>
          </Container>
          {submit ? (
            <Box className={classes.message}>
              <Typography variant="subtitle2">
                Thank you for your application! We will get back to you soon.
              </Typography>
            </Box>
          ) : null}
        </Container>
      </Box>
    </>
  );
}
