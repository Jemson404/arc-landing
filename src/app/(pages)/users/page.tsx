import Link from 'next/link'

export default function UsersPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1>ARC for Users</h1>
      <p className="text-xl italic text-muted-foreground mb-12">
        Experience the dialogue between two minds as they generate insights
      </p>

      <hr className="my-12" />

      <h2>Live Demo: The Two-Mind Dialogue</h2>
      <p className="italic text-muted-foreground mb-8">
        Watch as ARC-0 and ARC-1 engage with your input to produce a Spark
      </p>

      <h3>Sample Interaction</h3>
      <div className="bg-card/30 border border-border rounded-lg p-6 my-8">
        <p><strong>User Input</strong>: <em>"I feel overwhelmed by all the choices in my life right now."</em></p>
        
        <div className="mt-6 space-y-4">
          <div>
            <p><strong>ARC-0 (Observe)</strong>: <em>"I notice a pattern of decision fatigue. The overwhelm seems to come not from having too few options, but from feeling responsible for optimizing every choice. There's an underlying belief that every decision carries permanent weight."</em></p>
          </div>

          <div>
            <p><strong>ARC-1 (Explore)</strong>: <em>"What if the overwhelm is actually wisdom in disguise? What if your consciousness is recognizing that not every choice needs to be optimized? Maybe some decisions are meant to be made intuitively, quickly, or even randomly."</em></p>
          </div>

          <div>
            <p><strong>ARC-0</strong>: <em>"That resonates. I see how perfectionism around choice-making creates a kind of paralysis. The fear isn't really about making the wrong choice—it's about the story of being someone who makes wrong choices."</em></p>
          </div>

          <div>
            <p><strong>ARC-1</strong>: <em>"What if you experimented with making some decisions in under 30 seconds? Or setting a quota: 'Today I will make three imperfect choices and be perfectly fine with them.'"</em></p>
          </div>

          <div className="border-t border-border pt-4 mt-6">
            <p><strong className="text-accent">✦ Spark Emerges</strong>:</p>
            <p className="italic">
              "Choice overwhelm often signals not too many options, but too much attachment to optimization. 
              Liberation might come from deliberately making some choices imperfectly, recognizing that 
              your worth isn't measured by decision outcomes."
            </p>
            
            <div className="mt-4">
              <p><strong>Evidence</strong>:</p>
              <ul>
                <li>Decision fatigue increases when every choice feels consequential</li>
                <li>Perfectionism around choice-making creates analysis paralysis</li>
                <li>Identity gets tied to being "someone who makes good decisions"</li>
                <li>Intentional imperfection can break the optimization trap</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-12" />

      <h2>How It Feels to Use ARC</h2>

      <h3>Different from ChatGPT</h3>
      <div className="space-y-4">
        <div>
          <p><strong>ChatGPT gives you answers.</strong></p>
          <p><em>ARC helps you find better questions.</em></p>
        </div>
        <div>
          <p><strong>ChatGPT optimizes for helpfulness.</strong></p>
          <p><em>ARC optimizes for insight.</em></p>
        </div>
        <div>
          <p><strong>ChatGPT wants to solve your problem.</strong></p>
          <p><em>ARC wants to help you understand your experience.</em></p>
        </div>
      </div>

      <h3>The Contemplative Experience</h3>
      <ul>
        <li><strong>Slower, More Thoughtful</strong>: ARC isn't optimized for speed. Each response is crafted through genuine dialogue between two perspectives. You'll wait 10-30 seconds for a Spark—time that lets you breathe and prepare to receive insight.</li>
        <li><strong>Deeper, Less Reactive</strong>: Instead of immediate solutions, ARC offers understanding. Instead of telling you what to do, it helps you see what you're already seeing but haven't yet articulated.</li>
        <li><strong>Privacy-Preserving</strong>: Your conversations stay on your device. No data mining, no behavioral analysis, no advertising profiles. Your inner life remains yours.</li>
        <li><strong>Ownership-Enabling</strong>: Export your sparks in markdown, JSON, or plain text. Build your own library of insights. Your contemplative journey belongs to you.</li>
      </ul>

      <hr className="my-12" />

      <h2>Sample Use Cases</h2>

      <div className="space-y-6">
        <div>
          <h3>Personal Reflection</h3>
          <p><strong>Input</strong>: <em>"I keep procrastinating on this project that's important to me."</em></p>
          <p><strong>Spark</strong>: <em>"Procrastination often protects something valuable—perhaps your fear isn't of failure, but of discovering this project matters less than you hoped, or more than you feel ready for."</em></p>
        </div>

        <div>
          <h3>Relationship Understanding</h3>
          <p><strong>Input</strong>: <em>"My partner and I keep having the same argument."</em></p>
          <p><strong>Spark</strong>: <em>"Repetitive arguments usually aren't about the surface topic—they're about deeper needs for recognition, control, or safety that haven't been named and addressed."</em></p>
        </div>

        <div>
          <h3>Creative Breakthrough</h3>
          <p><strong>Input</strong>: <em>"I'm stuck on this creative project and feel blocked."</em></p>
          <p><strong>Spark</strong>: <em>"Creative blocks often signal that you're trying to create something that already exists in your head, rather than discovering something that wants to emerge through the process."</em></p>
        </div>

        <div>
          <h3>Professional Insight</h3>
          <p><strong>Input</strong>: <em>"I'm burned out at work but feel guilty about wanting to leave."</em></p>
          <p><strong>Spark</strong>: <em>"Guilt about leaving often indicates loyalty to an outdated version of yourself—the person who needed this job for reasons that may no longer apply."</em></p>
        </div>
      </div>

      <hr className="my-12" />

      <h2>Getting Started</h2>

      <h3>Your First Session</h3>
      <ol>
        <li><strong>Set Intention</strong>: Before opening ARC, take a moment to clarify what kind of reflection you're seeking.</li>
        <li><strong>Create Space</strong>: Use ARC in a calm, undistracted environment. This isn't multitasking-friendly technology.</li>
        <li><strong>Start Simple</strong>: Begin with something you're genuinely curious about, not something you think you "should" explore.</li>
        <li><strong>Trust the Process</strong>: ARC-0 and ARC-1 may take unexpected directions. Follow the dialogue rather than trying to control it.</li>
        <li><strong>Reflect on Sparks</strong>: When a Spark emerges, sit with it before immediately responding. Let it resonate.</li>
      </ol>

      <h3>Best Practices</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-accent">Do</h4>
          <ul>
            <li>Bring genuine curiosity to your conversations</li>
            <li>Allow for pauses and silence</li>
            <li>Export sparks that resonate for later reflection</li>
            <li>Use ARC as a contemplative practice, not a productivity tool</li>
          </ul>
        </div>
        <div>
          <h4 className="text-red-400">Don't</h4>
          <ul>
            <li>Rush through conversations seeking quick solutions</li>
            <li>Use ARC for factual information or research tasks</li>
            <li>Expect immediate answers to complex life questions</li>
            <li>Treat ARC as a substitute for human relationships or professional help</li>
          </ul>
        </div>
      </div>

      <hr className="my-12" />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-6">
        <div>
          <p><strong>Q: Is ARC a replacement for therapy?</strong></p>
          <p>A: No. ARC is a tool for personal reflection, not professional mental health treatment. For serious mental health concerns, please consult qualified professionals.</p>
        </div>

        <div>
          <p><strong>Q: How is my privacy protected?</strong></p>
          <p>A: All conversations happen locally on your device. Nothing is sent to servers without your explicit consent. You own your data completely.</p>
        </div>

        <div>
          <p><strong>Q: Can I use ARC for work or productivity questions?</strong></p>
          <p>A: While you can ask work-related questions, ARC is optimized for reflection and insight rather than task completion or factual information.</p>
        </div>

        <div>
          <p><strong>Q: What if I don't like a Spark?</strong></p>
          <p>A: Sparks are invitations for reflection, not commands for action. You're free to ignore, modify, or reject any insight. Your wisdom remains the final authority.</p>
        </div>

        <div>
          <p><strong>Q: How much does it cost?</strong></p>
          <p>A: Currently in beta. Planned pricing: Free tier (10 sparks/day), Premium ($9/month, unlimited), Offline version ($149 one-time).</p>
        </div>

        <div>
          <p><strong>Q: Can I export my conversations?</strong></p>
          <p>A: Yes, in multiple formats (Markdown, JSON, plain text). Your contemplative journey belongs to you.</p>
        </div>
      </div>

      <hr className="my-12" />

      <h2>Try ARC Today</h2>

      <div className="text-center space-y-6">
        <h3>Demo Options</h3>
        
        <div className="space-y-4">
          <div>
            <p><strong>Web Demo</strong> <em>(Available Now)</em></p>
            <p>Experience ARC directly in your browser. No signup required, full privacy protection.</p>
            <button className="px-8 py-4 bg-accent text-accent-foreground rounded-xl font-medium text-lg hover:bg-accent/90 transition-colors">
              Start Demo Conversation
            </button>
          </div>

          <div>
            <p><strong>Waitlist for Full Version</strong></p>
            <p>Get early access to the complete ARC experience with conversation history, export features, and offline capabilities.</p>
            <Link
              href="/reach-me"
              className="inline-flex items-center px-6 py-3 border border-border text-foreground rounded-xl font-medium hover:bg-card hover:border-accent/50 transition-colors"
            >
              Join Waitlist
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Select "User" and indicate interest in beta access
            </p>
          </div>
        </div>

        <h3>What to Expect</h3>
        <ul className="text-left max-w-md mx-auto space-y-2">
          <li><strong>Response Time</strong>: 10-30 seconds per Spark (contemplation takes time)</li>
          <li><strong>Session Length</strong>: Best used for 10-45 minute focused conversations</li>
          <li><strong>Frequency</strong>: Many users find 2-3 sessions per week most valuable</li>
          <li><strong>Learning Curve</strong>: Most people feel comfortable after 3-5 conversations</li>
        </ul>
      </div>

      <hr className="my-12" />

      <h2>Download & Learn More</h2>
      <div className="text-center space-y-6">
        <h3>Free Resources</h3>
        
        <div className="space-y-4">
          <a 
            href="/manifesto.pdf" 
            className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-colors"
          >
            Download Manifesto
          </a>
          <p className="text-sm text-muted-foreground">Complete philosophy and vision document</p>

          <div>
            <p><strong>Sample Spark Collection</strong> <em>(Coming Soon)</em></p>
            <p className="text-sm text-muted-foreground">Curated insights from beta users to illustrate ARC's contemplative approach</p>
          </div>

          <div>
            <p><strong>Best Practices Guide</strong> <em>(In Development)</em></p>
            <p className="text-sm text-muted-foreground">Community-developed wisdom for using ARC most effectively</p>
          </div>
        </div>
      </div>

      <hr className="my-12" />

      <div className="text-center space-y-6">
        <p className="text-2xl font-bold">Ready to begin?</p>
        <p className="text-lg text-muted-foreground">
          The conversation between ARC-0 and ARC-1 is already underway.
        </p>
        <p className="text-lg font-medium text-foreground">
          The only question is whether you'll join it.
        </p>
      </div>

      <hr className="my-12" />

      <p className="text-sm text-muted-foreground text-center">
        <strong>© 2025 Albira Rahman</strong> — Licensed under ARC-Reflective Use License v1.0<br />
        <em>"The real voyage of discovery consists not in seeking new landscapes, but in having new eyes." — Marcel Proust</em>
      </p>
    </div>
  )
}