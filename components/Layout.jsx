import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header style={{ display: "flex", alignItems: "center" }}>
        <Link href="/">
          <a>
            <h3>Tech-Recruitment</h3>
          </a>
        </Link>
        <Link href="/vacatures">
          <a>
            <span style={{ marginLeft: "2rem" }}>Vacatures</span>
          </a>
        </Link>
        <Link href="/over-ons">
          <a>
            <span style={{ marginLeft: "2rem" }}>Over ons</span>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright@2021 Tech-Recruitment</p>
      </footer>
    </div>
  );
}
