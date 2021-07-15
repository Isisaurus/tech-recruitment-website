import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ marginBottom: '6rem', minHeight: '70vh' }}>{children}</div>
      <Footer />
    </>
  );
}
