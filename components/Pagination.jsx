import Link from 'next/link';
export default function Pagination({ currentPage, totalPages }) {
  const createPagination = (total) => {
    let i = 1;
    let arr = [];
    while (i < total) {
      i++;
      arr.push(i);
    }
    return arr;
  };
  const pageArr = createPagination(totalPages);

  return (
    <div style={{ background: 'grey', display: 'flex', color: 'white' }}>
      <Link href={`/vacatures`}>
        <a>1</a>
      </Link>
      {pageArr.map((num) => (
        <div key={num}>
          <Link href={`/vacatures/${num}`}>
            <a>{num}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
