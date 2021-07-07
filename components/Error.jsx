import Link from 'next/link';
import { useRouter } from 'next/router';

function Error() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 4000);
  }, [router]);

  return (
    <div>
      <h1>Sorry...</h1>
      <p>
        Something went wrong. This is a problem on our end. We are taking you
        back to the <Link href="/">Homepage</Link> in a sec...
      </p>
      <div>
        <Link href="/">Go to Homepage</Link>
      </div>
    </div>
  );
}

export default Error;
