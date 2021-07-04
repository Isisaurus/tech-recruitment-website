import Image from 'next/image';
import Link from 'next/link';

export default function JobCard({ job }) {
  const {
    jobTitle,
    slug,
    company,
    city,
    salaryIndication,
    thumbnail,
    jobType,
  } = job;

  return (
    <div>
      <div>
        <Image
          src={thumbnail.url}
          width={200}
          height={200}
          alt={`${jobTitle} thumbnail`}
        />
      </div>
      <Link href={`/vacatures/job/${slug}`}>{jobTitle}</Link>
      <div>
        <p>{company}</p>
        <p>{city}</p>
        <p>{jobType}</p>
        <p>{salaryIndication}</p>
      </div>
      <hr />
    </div>
  );
}
