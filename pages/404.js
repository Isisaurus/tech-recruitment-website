import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Container, Box, Typography, Button } from '@material-ui/core';

export default function NotFound() {
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
        <Typography variant="h2">404</Typography>

        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <Typography variant="body1">
            Sorry! This page does not exist. We are taking you to the{' '}
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
          name="back to homepage"
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
