import Header from "../Header";
import Footer from "../Footer";
import useScrollManager from "../../lib/useScrollManager";

/**
 * PageShell - standard page frame: fixed header, main content, footer.
 * Scrolls to top (or to the #hash target) on every route change.
 *
 * Usage:  <PageShell><Section>…</Section></PageShell>
 */
const PageShell = ({ children, className = "" }) => {
  useScrollManager();

  return (
    <div className={`min-h-screen bg-ink text-cloud ${className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageShell;
