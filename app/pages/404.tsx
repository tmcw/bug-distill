import { Head, Link } from "blitz";

export default function Page404() {
  return (
    <>
      <Head>
        <title>Placemark 404: Page not found</title>
      </Head>
      <div className="h-screen flex items-center justify-center">
        <div className="w-64">
          <div className="pt-4 text-lg">Sorry, we couldn’t find that page.</div>
          <div className="pt-4 text-lg">
            <Link href="/">
              <a className="inline-flex items-center placemark-modal-action-button">
                Back to home
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
