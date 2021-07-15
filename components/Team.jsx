import { Grid, Typography, Container } from '@material-ui/core';
import Image from 'next/image';
import useStyles from '../styles/team.styles';

function Team({ team }) {
  const classes = useStyles();
  return (
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
  );
}

export default Team;
