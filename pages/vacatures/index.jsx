import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { ContentfulApi } from '../../utils/contentful';
import JobCard from '../../components/JobCard';
import Select from 'react-select';

export async function getStaticProps() {
  const res = await ContentfulApi.callContentful({});
  const { total, items: jobs } = res;

  return {
    props: {
      jobs,
      total,
    },
    revalidate: 1,
  };
}

export default function Vacancies({ jobs, total }) {
  console.log(jobs);
  return (
    <div style={{ marginLeft: '200px' }}>
      {jobs.map((job) => (
        <JobCard key={job.sys.id} job={job} />
      ))}
    </div>
  );
}
