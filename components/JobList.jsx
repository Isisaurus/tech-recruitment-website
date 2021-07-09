import JobCard from './JobCard';

import { Grid } from '@material-ui/core';

export default function JobList({ jobs }) {
  if (!jobs.length) return <div>No match found.</div>;

  return (
    <Grid container spacing={6} alignItems="flex-start" justifyContent="center">
      {jobs.map((job) => (
        <JobCard key={job.sys.id} job={job} />
      ))}
    </Grid>
  );
}
