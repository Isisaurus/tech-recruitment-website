import Team from './../../components/Team';

import {
  Container,
  Box,
  Typography,
  Link,
  CardMedia,
  Hidden,
  makeStyles,
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
      <Hidden xsDown>
        <Container style={{ marginBottom: '4rem' }}>
          <CardMedia
            component="video"
            alt="promo video"
            src="/video.mp4"
            autoPlay
            loop
            muted
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
      </Hidden>
      <Team team={team} />
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
