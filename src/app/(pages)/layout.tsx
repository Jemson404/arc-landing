import Nav from '../components/Nav'

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <article className="prose prose-invert max-w-none">
            {children}
          </article>
        </div>
      </main>
    </>
  )
}