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
  } = job.fields;
  const myLoader = ({ src }) => {
    return `https://${src}`;
  };

  return (
    <div>
      <Image
        loader={myLoader}
        src={thumbnail.fields.file.url}
        width={thumbnail.fields.file.details.image.width}
        height={thumbnail.fields.file.details.image.height}
        alt={`${jobTitle} thumbnail`}
      />
      <Link href={`/vacatures/${slug}`}>{jobTitle}</Link>
    </div>
  );
}
