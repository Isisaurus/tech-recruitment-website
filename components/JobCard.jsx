import Image from 'next/image';

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
  return (
    <div>
      <Image
        src={`https://${thumbnail.fields.file.url}`}
        width={thumbnail.fields.file.details.image.width}
        height={thumbnail.fields.file.details.image.height}
      ></Image>
      <span>{jobTitle}</span>
    </div>
  );
}
