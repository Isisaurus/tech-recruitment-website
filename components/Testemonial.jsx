import {
  makeStyles,
  Card,
  CardContent,
  Divider,
  Typography,
} from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: 'rgba(122,122,122,.05)',
    transition: 'all ease in .3s',
    padding: '1rem',
    borderRadius: '0',
    maxWidth: '100%',
  },
  description: {
    minHeight: '18rem',
    [theme.breakpoints.down('xs')]: {
      height: '60vh',
      overflowY: 'auto',
    },
  },
  avatarContainer: {
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'center',
  },
}));

function Testemonial({ step, secondary }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      style={{ opacity: `${secondary ? '0.3' : '1'}` }}
    >
      <CardContent>
        <Typography paragraph className={classes.description}>
          {step.description}
        </Typography>
        <Divider />
        <div className={classes.avatarContainer}>
          <Image
            src={`/homepage/${step.img}`}
            alt={`${step.name}`}
            width={80}
            height={80}
          />
          <div style={{ marginLeft: '1rem' }}>
            <Typography variant="subtitle2" color="textSecondary">
              {step.name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{ marginTop: '.5em' }}
            >
              {step.title}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Testemonial;
