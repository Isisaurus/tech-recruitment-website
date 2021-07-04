import Image from 'next/image';
import Link from 'next/link';

export default function JobCard({ job }) {
  const {
    jobTitle,
    slug,
    company,
    location,
    salaryIndication,
    thumbnail,
    requirements,
    benefits,
    details,
    motivationLetter,
    jobType,
  } = job;

  return (
    <div>
      <Image
        src={thumbnail.url}
        width={thumbnail.width}
        height={thumbnail.height}
        alt={`${jobTitle} thumbnail`}
      />
      <Link href={`/vacatures/${slug}`}>{jobTitle}</Link>
    </div>
  );
}
