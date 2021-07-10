import JobCard from './JobCard';

import { Grid, Container, Typography } from '@material-ui/core';

export default function JobList({ jobs }) {
  if (!jobs.length)
    return (
      <Container style={{ minHeight: '40vh' }}>
        <Typography variant="subtitle2" style={{ fontSize: '1rem' }}>
          Sorry! No matches found.
        </Typography>
      </Container>
    );

  return (
    <Grid container spacing={6} alignItems="flex-start" justifyContent="center">
      {jobs.map((job) => (
        <JobCard key={job.sys.id} job={job} />
      ))}
    </Grid>
  );
}
