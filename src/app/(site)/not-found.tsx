import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ paddingTop: "10rem" }}>
      <section className="contact">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label">404</p>
          <h2 className="section-heading">Page not found</h2>
          <p className="contact-sub" style={{ marginTop: "1.5rem" }}>
            The page you were looking for doesn&apos;t exist — but the dance floor is still open.
          </p>
          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/" className="btn-primary">
              Back home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
