import Link from 'next/link';
import { useRouter } from 'next/router';

import { Box, Typography, Button, Container } from '@material-ui/core';

function Error() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 4000);
  }, [router]);

  return (
    <Box>
      <Container
        style={{ minHeight: '25rem', marginTop: '2rem', height: '80vh' }}
      >
        <Typography variant="h2">Sorry...</Typography>

        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <Typography variant="body1">
            This is a problem on our end. We are taking you to the{' '}
            <Link href="/">
              <a
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                Homepage
              </a>
            </Link>
            ...
          </Typography>
        </div>
        <Button
          variant="outlined"
          color="primary"
          style={{ marginTop: '1rem', marginBottom: '1rem' }}
        >
          <Link href="/">
            <a style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="button">Got to Homepage</Typography>
            </a>
          </Link>
        </Button>
      </Container>
    </Box>
  );
}

export default Error;
