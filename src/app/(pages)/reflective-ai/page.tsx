import type { Metadata } from 'next'
import ReflectiveAIArticle from './content.mdx'

const PAGE_URL = 'https://extralifestudio.com/reflective-ai/'
const PUBLISHED_DATE = '2026-07-06'
const MODIFIED_DATE = '2026-07-06'
const HEADLINE = 'What Is Reflective AI? Beyond Chatbots, Agents, and Assistants'
const DESCRIPTION =
  'Reflective AI is a fourth category beyond chatbots, agents, and assistants: systems whose output is insight, not answers. What it is, how it works, and how ARC implements it.'

export const metadata: Metadata = {
  title: `${HEADLINE} — ARC`,
  description: DESCRIPTION,
  authors: [{ name: 'Albira Rahman' }],
  alternates: {
    canonical: '/reflective-ai/',
  },
  openGraph: {
    title: 'What Is Reflective AI?',
    description:
      'Beyond chatbots, agents, and assistants: a fourth category of AI whose output is a change in your understanding — not an answer. The definitional essay, with ARC as the working implementation.',
    url: '/reflective-ai/',
    siteName: 'ARC',
    type: 'article',
    publishedTime: PUBLISHED_DATE,
    modifiedTime: MODIFIED_DATE,
    authors: ['Albira Rahman'],
    locale: 'en_US',
    images: [
      {
        url: '/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'ARC - Two Minds. One Pulse.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Reflective AI?',
    description:
      'Beyond chatbots, agents, and assistants: a fourth category of AI whose output is a change in your understanding — not an answer.',
    images: ['/og-cover.png'],
    creator: '@arc_project',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: HEADLINE,
  description: DESCRIPTION,
  url: PAGE_URL,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': PAGE_URL,
  },
  datePublished: PUBLISHED_DATE,
  dateModified: MODIFIED_DATE,
  author: {
    '@type': 'Person',
    name: 'Albira Rahman',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ARC Project',
    url: 'https://extralifestudio.com/',
  },
  image: 'https://extralifestudio.com/og-cover.png',
  about: {
    '@type': 'DefinedTerm',
    name: 'Reflective AI',
    description:
      'A class of systems in which multiple specialized cognitive roles engage in structured, inspectable dialogue about an input, and whose success metric is the depth and durability of the insight produced, for the user, rather than the speed, fluency, or task-completion rate of the output.',
  },
  keywords: [
    'Reflective AI',
    'ARC',
    'chatbots',
    'AI agents',
    'AI assistants',
    'two-mind architecture',
    'reflection engine',
  ],
}

export default function ReflectiveAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="prose prose-invert max-w-none">
        <ReflectiveAIArticle />
      </div>
    </>
  )
}
