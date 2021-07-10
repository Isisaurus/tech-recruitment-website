// import Image from 'next/image';
import Link from 'next/link';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';

import {
  Grid,
  Typography,
  Card,
  CardContent,
  makeStyles,
  CardMedia,
  Box,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  thumbnail: {
    width: '500px',
    height: '200px',
    [theme.breakpoints.down('xs')]: {
      height: '150px',
    },
  },
  Card: {
    boxShadow: '-.5rem 1rem 2rem rgba(0,0,0, .15)',

    '&:hover': {
      boxShadow: '-.5rem 1rem 2rem rgba(4,103,177, .2)',
      transition: 'all .2s ease',
    },
  },
  CardContent: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '12rem',
  },
  button: {
    textTransform: 'none',
    fontWeight: 400,
    padding: 0,
  },
  labelContainer: {
    display: 'flex',
    marginTop: 'auto',
  },
}));

export default function JobCard({ job }) {
  const {
    jobTitle,
    slug,
    company,
    city,
    salaryIndication,
    thumbnail,
    jobType,
  } = job.fields;

  const myLoader = ({ src }) => {
    return `https:${src}`;
  };

  const classes = useStyles();

  return (
    <Grid item md={4} sm={6} xs={12}>
      <Link href={`/vacatures/job/${slug}`}>
        <a style={{ textDecoration: 'none' }}>
          <Card className={classes.Card}>
            <CardMedia
              image={`https:${thumbnail.fields.file.url}`}
              className={classes.thumbnail}
            />
            <CardContent className={classes.CardContent}>
              <Box>
                <Typography variant="caption">{company}</Typography>
                <Typography variant="h6" style={{ marginTop: '1em' }}>
                  {jobTitle}
                </Typography>
              </Box>
              <Box className={classes.labelContainer}>
                <Button
                  size="small"
                  className={classes.button}
                  style={{ marginRight: '2rem', color: '#7a7a7a' }}
                  disabled
                  startIcon={<LocationOnOutlinedIcon />}
                >
                  {city}
                </Button>
                <Button
                  size="small"
                  className={classes.button}
                  style={{ color: '#7a7a7a' }}
                  disabled
                  startIcon={<WatchLaterOutlinedIcon />}
                >
                  {jobType}
                </Button>
              </Box>
            </CardContent>
            {/* <Image
              loader={myLoader}
              src={thumbnail.fields.file.url}
              width={thumbnail.fields.file.details.image.width}
              height={200}
              alt={`${jobTitle} thumbnail`}
              className={classes.thumbnail}
            /> */}
          </Card>
        </a>
      </Link>
    </Grid>
  );
}
