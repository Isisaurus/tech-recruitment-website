// import Image from 'next/image';
import useStyles from './JobCard.styles';
import Link from 'next/link';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';

import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
} from '@material-ui/core';

export default function JobCard({ job }) {
  const { jobTitle, slug, company, city, thumbnail, jobType } = job.fields;

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
                  component="span"
                  size="small"
                  className={classes.button}
                  style={{ marginRight: '2rem', color: '#7a7a7a' }}
                  disabled
                  startIcon={<LocationOnOutlinedIcon />}
                >
                  {city}
                </Button>
                <Button
                  component="span"
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
          </Card>
        </a>
      </Link>
    </Grid>
  );
}
