import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import Skeleton from '../../../components/Skeleton';
import { makeStyles } from '@material-ui/core';

import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { job: items[0] },
    revalidate: 1,
  };
}

const useStyles = makeStyles((theme) => ({
  h1: {
    maxWidth: '45rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.2rem',
    },
  },
  overview: {
    color: 'white',
  },
  labelContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '& > *': {
      marginTop: '1rem',
    },
  },
  labelButton: {
    textTransform: 'none',
    fontWeight: '400',
  },
  thumbnailContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '30rem',
    height: '70vh',
    maxHeight: '45rem',

    [theme.breakpoints.down('xs')]: {
      height: '50vh',
      padding: '0 1rem',
      paddingTop: '2rem',
      alignItems: 'flex-start',
    },
  },
  thumbnail: {
    position: 'absolute',
    zIndex: '-1',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    filter: 'blur(1px)',
    boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.4)',
  },
  paper: {
    marginTop: '-6em',
    padding: '1em 2em',
    boxShadow: '.3rem 1rem 1.5rem rgba(0,0,0,0.1)',
    maxHeight: '33rem',
    overflowX: 'auto',
    [theme.breakpoints.down('xs')]: {
      maxHeight: '25rem',
      padding: '.5rem 1rem',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ul: {
    margin: '4rem 0',
    [theme.breakpoints.down('xs')]: {
      margin: '2rem 0',
      paddingLeft: '0',
    },
  },
  fileInput: {
    '&::-webkit-file-upload-button': {
      visibility: 'hidden',
    },
    '#file-upload-button': {
      visibility: 'hidden',
    },
  },
}));

export default function VacancyDetails({ job }) {
  const classes = useStyles();
  const handleSubmit = () => {
    console.log('Submitted!');
  };

  if (!job) return <Skeleton />;
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
  // console.log(job);
  return (
    <Box style={{ marginTop: '4rem' }}>
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
              size="small"
              className={classes.labelButton}
              style={{ color: 'white' }}
              disabled
              startIcon={<LocationOnOutlinedIcon />}
            >
              {city}
            </Button>
            <Button
              size="small"
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
      <Container>
        <Typography component="h2" variant="h1" className={classes.h1}>
          Soliciteer
        </Typography>
        <Grid container component="form" onSubmit={handleSubmit}>
          <Grid
            item
            xs={12}
            sm={6}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <TextField
              id="name"
              label="Full Naam"
              variant="outlined"
              type="text"
              required
            />
            <TextField
              id="email"
              label="Email Adres"
              variant="outlined"
              type="email"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.fileInput}
              variant="outlined"
              type="file"
              required
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
