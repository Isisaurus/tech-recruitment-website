import {
  makeStyles,
  Typography,
  Box,
  Container,
  Button,
} from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  hero: {
    position: 'relative',
    height: '90vh',
    background:
      'linear-gradient(0deg, rgba(0,0,0,0.75) 15%, rgba(0,0,0,0.35) 48%, rgba(0,0,0,0.8) 85%), url(/homepage/hero.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '4rem',

    overflow: 'hidden',
  },
  heroContent: {
    marginTop: '2rem',
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  heroBtn: {
    color: 'white',
    borderColor: 'inherit',
    marginTop: '2rem',
    '&:hover': {
      background: 'rgba(255,255,255, .2)',
    },
  },
  h1: {
    textAlign: 'center',
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem',
    },
  },
  h6: {
    marginTop: '2rem',
    textAlign: 'center',
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  bottomClip: {
    position: 'relative',
    top: '1vh',
    height: '10vh',
    '& > svg': {
      height: '100%',
      width: '100%',
      minWidth: '100%',
    },
  },
  circle1: {
    position: 'absolute',
    top: '0',
    right: '0',
    transform: 'translate(25%, -25%)',
    width: '30vw',
    height: '30vw',
    maxWidth: '20rem',
    maxHeight: '20rem',
    backgroundColor: 'white',
    borderRadius: '50%',
    boxShadow: '1rem 1rem 1rem rgba(0,0,0, .2)',
  },
  purpleCircle: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '10vw',
    height: '10vw',
    maxWidth: '4rem',
    maxHeight: '4rem',
    borderRadius: '50%',
    transform: 'translate(80%, 40%)',
    background:
      'linear-gradient(125deg, rgba(175,124,215,1) 0%, rgba(207,146,255,1) 19%, rgba(110,25,176,1) 80%)',
    boxShadow: '1rem 1rem 1.5rem rgba(0,0,0, .3)',
  },
  circle2: {
    position: 'absolute',
    bottom: '40%',
    left: '0',
    transform: 'translate(-40%, 55%)',
    width: '30vw',
    height: '30vw',
    maxWidth: '18rem',
    maxHeight: '18rem',
    backgroundColor: 'white',
    borderRadius: '50%',
    boxShadow: '-.5rem 1rem 1rem rgba(0,0,0, .2)',
    [theme.breakpoints.down('xs')]: {
      bottom: '30%',
      transform: 'translate(-60%, 60%)',
    },
  },
  bluecircle: {
    position: 'absolute',
    bottom: '0',
    right: '20%',
    width: '20vw',
    height: '20vw',
    maxWidth: '6rem',
    maxHeight: '6rem',
    borderRadius: '50%',
    transform: 'translate(40%, 20%)',
    background:
      'linear-gradient(215deg, rgba(84,151,208,1) 0%, rgba(104,186,255,1) 19%, rgba(18,99,168,1) 80%)',
    boxShadow: '-.5rem 1rem 1.5rem rgba(0,0,0, .3)',
    [theme.breakpoints.down('xs')]: {
      width: '10vw',
      height: '10vw',
      maxWidth: '4rem',
      maxHeight: '4rem',
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Box>
      <div className={classes.hero}>
        <div className={classes.circle1}>
          <div className={classes.purpleCircle}></div>
        </div>
        <div className={classes.heroContent}>
          <Typography variant="h1" className={classes.h1}>
            Maak alvast kennis met jeuw nieuwe baan.
          </Typography>

          <Typography variant="h6" className={classes.h6}>
            Realistische vacatures. Heldere verwachtingen.
          </Typography>
          <Link href="/vacatures">
            <a style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                size="large"
                className={classes.heroBtn}
              >
                Bekijk alle jobs
              </Button>
            </a>
          </Link>
        </div>
        <div className={classes.circle2}>
          <div className={classes.bluecircle}></div>
        </div>
        <div className={classes.bottomClip}>
          <svg
            width="1439"
            height="183"
            viewBox="0 0 1439 183"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M717.5 97C365.5 97 0.499512 6.49976 0.499512 6.49976L0.5 182.5H717.5H1439L1439 0C1439 0 1069.5 97 717.5 97Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <Container style={{ marginTop: '4rem' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facere
        aliquid, maxime doloremque nemo odit omnis reiciendis ex unde recusandae
        iure itaque in labore. Fuga, autem dolorum a esse, quidem quam quisquam
        officia accusamus vel at dicta nisi velit cumque adipisci sunt veniam
        laborum necessitatibus minima nulla ut nam impedit placeat. Voluptate
        quisquam ipsam ipsa, saepe consectetur corporis dolorem harum neque
        veniam rem officia quae vel modi sit ex error. Non, maxime. Explicabo
        sit dolores ut eius asperiores numquam natus quod maxime quis cum
        expedita ipsam harum qui quibusdam veniam suscipit id, ex esse
        laudantium fuga a reiciendis aut. Odit dolore adipisci enim aliquid.
        Quia laboriosam hic accusamus iure quisquam. Alias quasi quibusdam hic
        recusandae error. Tempora veritatis mollitia nulla velit cumque?
        Tempora, nemo rerum? Illum in id et culpa error voluptas adipisci ipsam
        tenetur repellendus quo labore, est sequi quisquam maxime officia
        exercitationem dignissimos odit quibusdam hic fugit! Repellat, quisquam
        doloremque neque omnis illum aspernatur corporis incidunt iure dolores.
        Harum natus tenetur quod ducimus deleniti nam repellendus vitae cum
        laborum rem nihil hic earum repudiandae aperiam aspernatur ullam autem
        quia velit, reprehenderit magnam inventore! Molestiae labore eveniet
        mollitia, facilis voluptate repellendus hic accusamus maxime inventore
        iste ut. Suscipit, sequi.
      </Container>
    </Box>
  );
}
