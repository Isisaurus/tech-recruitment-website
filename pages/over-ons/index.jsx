import Image from 'next/image';

import {
  Container,
  Box,
  Typography,
  makeStyles,
  Link,
  CardMedia,
  Grid,
  Hidden,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  h1: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem',
    },
  },
  header: {
    marginTop: '4rem',
    marginBottom: '4rem',
    padding: 'inherit 0',
  },
  link: {
    textDecoration: 'none',
  },
  headerContent: {
    marginTop: '4rem',
    marginLeft: '4rem',
    width: 'auto',
    padding: '0',
    maxWidth: '45rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '2rem',
    },
  },
  teamMem: {
    marginTop: '2rem',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '2rem',
    padding: '0 4rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0 2rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1rem',
      justifyContent: 'center',
    },
  },
  name: {
    marginBottom: '.5em',
  },
  teamMemImageCont: {
    [theme.breakpoints.down('xs')]: {
      order: '-1',
    },
  },
}));

export default function OverOns({ team }) {
  const classes = useStyles();

  return (
    <Box>
      <Container className={classes.header}>
        <Typography variant="h1" component="h1" className={classes.h1}>
          Maak kennis met ons team
        </Typography>
        <Container className={classes.headerContent}>
          <Typography paragraph variant="body1">
            Eerlijkheid duurt het langst. Wij geloven dan ook dat transparantie
            en duidelijkheid essentieel zijn voor succes! Ons gezellige team van
            gedreven professionals staan altijd voor je klaar om de perfecte
            match te vinden. Even voorstellen…
          </Typography>
        </Container>
      </Container>
      <Container style={{ marginBottom: '4rem' }}>
        <CardMedia
          component="video"
          alt="promo video"
          src="/video.mp4"
          autoPlay
          loop
          muted
          controls
        />
        <Link
          href="https://www.pexels.com/video/view-of-erasmusbrug-bridge-rotterdam-5967730/"
          target="_blank"
          rel="noreferrer"
          color="textSecondary"
        >
          <Typography
            variant="overline"
            color="textSecondary"
            style={{ textTransform: 'none' }}
          >
            Video by Shabbir Hossain from Pexels
          </Typography>
        </Link>
      </Container>
      <Container style={{ marginTop: '4rem', marginBottom: '4rem' }}>
        {team.map((mem, i) =>
          i % 2 !== 0 ? (
            <Grid container key={i} spacing={4} className={classes.teamMem}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" className={classes.name}>
                  {mem.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ marginBottom: '1em', color: '#7a7a7a' }}
                >
                  {mem.title}
                </Typography>
                <Typography paragraph variant="body2">
                  {mem.introduction}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                classes={{ root: `${classes.teamMemImageCont}` }}
              >
                <Image
                  src={`/team/${mem.picture}`}
                  alt={`${mem.name}`}
                  width={400}
                  height={400}
                ></Image>
              </Grid>
            </Grid>
          ) : (
            <Grid container key={i} spacing={4} className={classes.teamMem}>
              <Grid item xs={12} sm={6}>
                <Image
                  src={`/team/${mem.picture}`}
                  alt={`${mem.name}`}
                  width={400}
                  height={400}
                ></Image>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" className={classes.name}>
                  {mem.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ marginBottom: '1em', color: '#7a7a7a' }}
                >
                  {mem.title}
                </Typography>
                <Typography paragraph variant="body2">
                  {mem.introduction}
                </Typography>
              </Grid>
            </Grid>
          )
        )}
      </Container>
    </Box>
  );
}

import path from 'path';
import { promises as fs } from 'fs';

export async function getStaticProps() {
  const directory = path.join(process.cwd(), '/public/data/team_data.json');

  const content = await fs.readFile(directory, 'UTF-8');
  const data = JSON.parse(content);

  return {
    props: {
      team: data,
    },
  };
}
