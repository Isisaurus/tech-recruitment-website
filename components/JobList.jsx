import JobCard from './JobCard';

export default function JobList({ jobs }) {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.sys.id} job={job} />
      ))}
    </div>
  );
}
