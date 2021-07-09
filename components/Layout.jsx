import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="page-content">{children}</div>
      <footer>
        <p>Copyright@2021 Tech-Recruitment</p>
      </footer>
    </div>
  );
}
