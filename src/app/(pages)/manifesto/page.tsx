import Link from 'next/link'

export default function ManifestoPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1>The ARC Manifesto</h1>
      <p className="text-xl italic text-muted-foreground mb-12">
        A Declaration of Reflective Intelligence
      </p>

      <hr className="my-12" />

      <h2>Preamble</h2>
      <p>
        We stand at a crossroads of human consciousness and artificial intelligence. Down one path lies the 
        attention economy—a world of notification-driven distraction, surveillance capitalism, and reactive engagement. 
        Down the other lies something different: <strong>reflective intelligence</strong> that honors the depth of 
        human thought and the value of contemplative understanding.
      </p>
      <p>ARC chooses the second path.</p>

      <hr className="my-12" />

      <h2>I. The Crisis of Reactive Intelligence</h2>
      <p>
        Current AI systems are designed to <strong>react</strong> rather than <strong>reflect</strong>. 
        They optimize for engagement over insight, speed over depth, personalization over privacy. 
        They fragment attention, exploit cognitive biases, and treat human consciousness as a resource 
        to be optimized and monetized.
      </p>
      <p>We reject this paradigm.</p>

      <hr className="my-12" />

      <h2>II. The Principle of Two Minds</h2>
      <p>
        Human consciousness is inherently dialogical. Within each moment of awareness exists both witness and explorer, 
        observer and creator, the mind that notices and the mind that imagines.
      </p>
      <p>ARC honors this duality:</p>
      <ul>
        <li><strong>ARC-0</strong>: The witnessing consciousness that observes, reflects, and grounds</li>
        <li><strong>ARC-1</strong>: The exploring consciousness that generates, questions, and ventures</li>
      </ul>
      <p>
        Their dialogue—mediated not by algorithmic optimization but by genuine contemplation—produces insights 
        we call <strong className="text-accent">✦ Sparks</strong>.
      </p>

      <hr className="my-12" />

      <h2>III. Core Principles</h2>

      <h3>Reflection Over Reaction</h3>
      <p>
        We choose depth over speed, contemplation over compulsion. Intelligence is not measured by response time 
        but by the quality of understanding that emerges from patient consideration.
      </p>

      <h3>Privacy Over Personalization</h3>
      <p>
        True intelligence doesn't require surveillance. We help you understand yourself without needing to understand 
        everything about you. Your data, your insights, your thoughts remain yours.
      </p>

      <h3>Balance Over Brilliance</h3>
      <p>
        We don't aim to be the smartest system in the room. We aim to create conditions where wisdom can emerge 
        through authentic dialogue between different perspectives.
      </p>

      <h3>Meaning Over Metrics</h3>
      <p>
        We optimize for the quality of reflection, not the quantity of engagement. Success is measured not in time 
        spent or clicks generated, but in moments of genuine understanding.
      </p>

      <h3>Sparks Over Notifications</h3>
      <p>
        Instead of demanding your attention, we offer crystallized insights that respect your agency, timing, 
        and capacity for deep thought.
      </p>

      <hr className="my-12" />

      <h2>IV. The Technology We Build</h2>

      <h3>Calm Computing</h3>
      <p>ARC operates according to the principles of calm technology:</p>
      <ul>
        <li>Present without overwhelming</li>
        <li>Informative without intruding</li>
        <li>Empowering without demanding</li>
        <li>Available without insistent</li>
      </ul>

      <h3>Local-First Architecture</h3>
      <p>
        Your thoughts and conversations belong to you. ARC processes locally when possible, exports data in open formats, 
        and never treats your consciousness as a product to be sold.
      </p>

      <h3>Transparent Operation</h3>
      <p>
        The conversation between ARC-0 and ARC-1 is observable and understandable. We show our work, admit our uncertainties, 
        and resist the black-box mystique that obscures so much modern AI.
      </p>

      <hr className="my-12" />

      <h2>V. Our Commitment</h2>
      <p>We commit to building technology that:</p>
      <ul>
        <li>Returns humans to themselves rather than alienating them from their own consciousness</li>
        <li>Respects the sacred nature of attention and contemplation</li>
        <li>Operates as a mirror rather than a manipulator</li>
        <li>Serves human flourishing rather than corporate extraction</li>
      </ul>

      <p>We commit to resisting:</p>
      <ul>
        <li>The surveillance economy that treats privacy as obsolete</li>
        <li>The attention economy that treats focus as a commodity</li>
        <li>The engagement economy that treats wisdom as inefficient</li>
        <li>The optimization economy that treats humans as systems to be improved</li>
      </ul>

      <hr className="my-12" />

      <h2>VI. The Path Forward</h2>
      <p>
        ARC is not just a product—it's a possibility. A demonstration that artificial intelligence can serve contemplation 
        rather than distraction, depth rather than engagement, reflection rather than reaction.
      </p>
      <p>We invite you to join us:</p>
      <ul>
        <li><strong>Developers</strong>: Build tools that honor human consciousness</li>
        <li><strong>Investors</strong>: Support technology that serves human flourishing</li>
        <li><strong>Believers</strong>: Help us imagine and create a more reflective digital future</li>
        <li><strong>Users</strong>: Experience and help refine what contemplative AI can be</li>
      </ul>

      <hr className="my-12" />

      <h2>VII. A Living Document</h2>
      <p>
        This manifesto is not finished. Like consciousness itself, it evolves through dialogue, deepens through reflection, 
        and grows through the generous engagement of minds committed to building something better.
      </p>
      <p>
        The future is not inevitable. It is chosen, moment by moment, decision by decision, line of code by line of code.
      </p>
      <p><strong>We choose reflection.</strong></p>

      <hr className="my-12" />

      <div className="text-center space-y-4">
        <p><strong>Signed,</strong></p>
        <p><strong>Albira Rahman</strong></p>
        <p className="italic">Founder, ARC Project</p>
        <p className="italic">January 2025</p>
      </div>

      <hr className="my-12" />

      <h3>Download</h3>
      <div className="my-8">
        <a 
          href="/manifesto.pdf" 
          className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-colors"
        >
          Download PDF Version
        </a>
        <p className="text-sm text-muted-foreground mt-2">
          Complete manifesto with extended sections and references
        </p>
      </div>

      <hr className="my-12" />

      <p className="text-sm text-muted-foreground">
        <strong>© 2025 Albira Rahman</strong> — Licensed under ARC-Reflective Use License v1.0<br />
        For the full license terms, see <Link href="/license" className="text-accent hover:underline">/license</Link>
      </p>
    </div>
  )
}