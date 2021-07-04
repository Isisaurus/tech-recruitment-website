import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 4000);
  }, [router]);

  return (
    <div>
      <div>
        <h1>404 - Not Found.</h1>
      </div>
      <div>
        <h2>Sorry! This page does not exist.🤔</h2>
      </div>
      <div>
        <p>
          Redirecting to <Link href="/">Homepage</Link>...
        </p>
      </div>
    </div>
  );
}
