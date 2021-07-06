import JobCard from './JobCard';

export default function JobList({ jobs }) {
  if (!jobs.length) return <div>No match found.</div>;

  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.sys.id} job={job} />
      ))}
    </div>
  );
}
