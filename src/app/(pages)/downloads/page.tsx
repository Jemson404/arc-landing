import DownloadGrid from "../../../../components/DownloadGrid";

export const metadata = {
  title: "Downloads — ExtraLife ARC",
  description: "Official ARC documents: Bible, Handbook, Investor Leaflet, Roadmap, and Pitch Deck."
};

export default function DownloadsPage() {
  return (
    <main className="px-6 py-12">
      <section className="mx-auto mb-8 max-w-2xl text-center">
        <h1 className="text-2xl font-semibold">Downloads</h1>
        <p className="mt-2 text-sm text-neutral-600">
          Files download directly — no sign-in required. All documents are kept current.
        </p>
      </section>
      <DownloadGrid />
    </main>
  );
}
