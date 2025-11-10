import Head from "next/head";
import DownloadGrid from "../components/DownloadGrid";

export default function DownloadsPage() {
  return (
    <>
      <Head>
        <title>Downloads — ExtraLife ARC</title>
        <meta name="description" content="Official ARC documents." />
      </Head>
      <main className="px-6 py-12">
        <section className="mx-auto mb-8 max-w-2xl text-center">
          <h1 className="text-2xl font-semibold">Downloads</h1>
          <p className="mt-2 text-sm text-neutral-600">
            Files download directly — no sign-in required. All documents are kept current.
          </p>
        </section>
        <DownloadGrid />
      </main>
    </>
  );
}
