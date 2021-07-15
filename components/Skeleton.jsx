import { Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

export default function SlugSkeleton() {
  return (
    <>
      <Box style={{ marginTop: '6rem', marginBottom: '4rem' }}>
        <Skeleton variant="rect" width={'100vw'} height={600} />
      </Box>
    </>
  );
}
