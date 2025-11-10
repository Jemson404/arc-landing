import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-foreground mb-8 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold text-foreground mb-6 mt-12 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-base text-muted-foreground mb-6 leading-relaxed">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-muted-foreground">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-muted-foreground leading-relaxed">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-6 my-6 italic text-foreground">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-card text-accent px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-card border border-border rounded-lg p-4 mb-6 overflow-x-auto">
        {children}
      </pre>
    ),
    hr: () => (
      <hr className="border-border my-12" />
    ),
    a: ({ href, children }) => (
      <a 
        href={href} 
        className="text-accent hover:text-accent/80 underline transition-colors"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic text-foreground">
        {children}
      </em>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-border rounded-lg">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-card">
        {children}
      </thead>
    ),
    tbody: ({ children }) => (
      <tbody>
        {children}
      </tbody>
    ),
    tr: ({ children }) => (
      <tr className="border-b border-border">
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 text-left font-medium text-foreground">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-muted-foreground">
        {children}
      </td>
    ),
    ...components,
  }
}