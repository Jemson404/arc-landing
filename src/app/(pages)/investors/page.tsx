import Link from 'next/link'

export default function InvestorsPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1>ARC for Investors</h1>
      <p className="text-xl italic text-muted-foreground mb-12">
        Mirror framework, not attention engine. Profit through peace, scaled.
      </p>

      <hr className="my-12" />

      <h2>Investment Thesis</h2>

      <h3>Category: Reflective AI <em>(New Category)</em></h3>
      <p>
        ARC pioneers <strong>Reflective AI</strong> — a new category that prioritizes contemplation over engagement, 
        depth over speed, and user ownership over data extraction. While the market is saturated with reactive AI 
        optimizing for engagement metrics, ARC creates value through meaningful insight generation.
      </p>
      <p><strong>Market Positioning</strong>: The anti-ChatGPT for thoughtful individuals who value their attention and privacy.</p>

      <hr className="my-12" />

      <h2>Business Model</h2>

      <h3>Go-To-Market Ladder</h3>
      
      <div className="space-y-6">
        <div>
          <h4><strong>M1-M3: Freemium Web Platform</strong></h4>
          <ul>
            <li>Free tier: 10 sparks per day, basic export</li>
            <li>Premium tier ($9/month): Unlimited sparks, advanced export, conversation history</li>
            <li>Target: Philosophy students, researchers, contemplative practitioners</li>
            <li>Revenue goal: $50K MRR by Month 6</li>
          </ul>
        </div>

        <div>
          <h4><strong>M4-M9: Offline Runtime</strong></h4>
          <ul>
            <li>One-time purchase ($149): Local ARC installation, no subscriptions</li>
            <li>Enterprise license ($2,499): Team installations, admin controls</li>
            <li>Target: Privacy-conscious professionals, therapists, coaches</li>
            <li>Revenue goal: $200K MRR by Month 12</li>
          </ul>
        </div>

        <div>
          <h4><strong>M10-M15: Voice & Mobile Add-ons</strong></h4>
          <ul>
            <li>Voice contemplation interface ($29/month)</li>
            <li>Mobile mindfulness companion ($19/month)</li>
            <li>Integration APIs for wellness apps ($99/month per integration)</li>
            <li>Revenue goal: $500K MRR by Month 18</li>
          </ul>
        </div>

        <div>
          <h4><strong>M16+: $SPARK Ecosystem</strong></h4>
          <ul>
            <li>Tradeable insights marketplace (10% transaction fee)</li>
            <li>Premium contemplative content library ($49/month)</li>
            <li>ARC-certified coach network (20% revenue share)</li>
            <li>Revenue goal: $2M+ ARR by Year 3</li>
          </ul>
        </div>
      </div>

      <hr className="my-12" />

      <h2>Competitive Landscape</h2>

      <h3>Direct Competition: None</h3>
      <p>No existing product combines:</p>
      <ul>
        <li>Two-mind dialogue architecture</li>
        <li>Privacy-first design</li>
        <li>Contemplative user experience</li>
        <li>Local-first data ownership</li>
      </ul>

      <h3>Moat Components</h3>
      <ol>
        <li><strong>Two-mind architecture</strong>: Technical differentiation, hard to replicate</li>
        <li><strong>Privacy covenant</strong>: Legal/philosophical commitment competitors can't match</li>
        <li><strong>Philosophy brand</strong>: Deep story resonance with target market</li>
        <li><strong>Local-first tech</strong>: Structural advantage in data ownership era</li>
      </ol>

      <hr className="my-12" />

      <h2>Market Analysis</h2>

      <h3>Target Addressable Market</h3>
      <div className="space-y-4">
        <div>
          <p><strong>Primary</strong>: Contemplative Technology Users</p>
          <ul>
            <li><strong>Size</strong>: ~15M individuals globally</li>
            <li><strong>Demographics</strong>: 25-55, high education, disposable income $75K+</li>
            <li><strong>Psychographics</strong>: Value privacy, depth over speed, meaning over metrics</li>
          </ul>
        </div>

        <div>
          <p><strong>Secondary</strong>: Privacy-First Professionals</p>
          <ul>
            <li><strong>Size</strong>: ~50M knowledge workers globally</li>
            <li><strong>Pain Point</strong>: Current AI tools compromise privacy for convenience</li>
            <li><strong>Value Prop</strong>: Professional-grade AI without data sacrifice</li>
          </ul>
        </div>

        <div>
          <p><strong>Tertiary</strong>: Wellness & Mental Health Market</p>
          <ul>
            <li><strong>Size</strong>: $4.4B digital wellness market</li>
            <li><strong>Growth</strong>: 23% CAGR through 2028</li>
            <li><strong>Integration</strong>: ARC as contemplative layer in existing wellness stacks</li>
          </ul>
        </div>
      </div>

      <hr className="my-12" />

      <h2>Financial Projections</h2>

      <h3>3-Year Projections</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-border rounded-lg">
          <thead className="bg-card">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-foreground">Metric</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Year 1</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Year 2</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Year 3</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="px-4 py-3 font-medium">Revenue</td>
              <td className="px-4 py-3">$600K</td>
              <td className="px-4 py-3">$2.8M</td>
              <td className="px-4 py-3">$8.2M</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-3 font-medium">Users</td>
              <td className="px-4 py-3">12K</td>
              <td className="px-4 py-3">85K</td>
              <td className="px-4 py-3">240K</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-3 font-medium">Team Size</td>
              <td className="px-4 py-3">8</td>
              <td className="px-4 py-3">22</td>
              <td className="px-4 py-3">35</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-3 font-medium">Gross Margin</td>
              <td className="px-4 py-3">78%</td>
              <td className="px-4 py-3">83%</td>
              <td className="px-4 py-3">87%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-12" />

      <h2>Funding Requirements</h2>

      <h3>Series Seed: $2.5M (Months 1-18)</h3>
      <p><strong>Use of Funds</strong>:</p>
      <ul>
        <li><strong>Engineering (40%)</strong>: $1.0M - Core team of 4 senior engineers</li>
        <li><strong>Design & Philosophy (15%)</strong>: $375K - Contemplative UX and philosophical consistency</li>
        <li><strong>Marketing (25%)</strong>: $625K - Content marketing, community building, thought leadership</li>
        <li><strong>Operations (10%)</strong>: $250K - Legal, infrastructure, business operations</li>
        <li><strong>Runway Buffer (10%)</strong>: $250K - 6-month additional runway</li>
      </ul>

      <p><strong>Milestones for Series A</strong>:</p>
      <ul>
        <li>50K+ active users across freemium and premium tiers</li>
        <li>$200K+ MRR with clear path to $1M ARR</li>
        <li>Offline runtime validated with enterprise pilot customers</li>
        <li>Technical moat established (patents pending on two-mind architecture)</li>
      </ul>

      <hr className="my-12" />

      <h2>Investment Terms</h2>

      <h3>Seeking: $2.5M Series Seed</h3>
      <ul>
        <li><strong>Valuation</strong>: $8M pre-money ($10.5M post-money)</li>
        <li><strong>Use of Funds</strong>: 18-month runway to Series A milestones</li>
        <li><strong>Investor Rights</strong>: Standard Series Seed terms, board observer seat</li>
        <li><strong>Liquidation Preference</strong>: 1x non-participating preferred</li>
      </ul>

      <h3>Ideal Investor Profile</h3>
      <ul>
        <li><strong>Strategic Value</strong>: Network in privacy tech, wellness, or enterprise software</li>
        <li><strong>Philosophy Alignment</strong>: Understands and supports contemplative technology mission</li>
        <li><strong>Patience</strong>: Comfortable with category creation timeline (3-5 years)</li>
        <li><strong>Hands-On</strong>: Available for monthly check-ins, strategic guidance, key introductions</li>
      </ul>

      <hr className="my-12" />

      <h2>Next Steps</h2>

      <h3>Due Diligence Materials Available</h3>
      <ul>
        <li><strong>Financial Model</strong>: Full 5-year projections with sensitivity analysis</li>
        <li><strong>Technical Architecture</strong>: System design documents and security audit</li>
        <li><strong>Market Research</strong>: User interviews, competitive analysis, sizing methodology</li>
        <li><strong>Legal</strong>: IP strategy, privacy compliance framework</li>
      </ul>

      <div className="my-8 text-center space-y-4">
        <Link
          href="/reach-me"
          className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-xl font-medium text-lg hover:bg-accent/90 transition-colors"
        >
          Book a Call
        </Link>
        <p className="text-sm text-muted-foreground">
          Select "Investor" role — Response time: 24-48 hours for qualified investors
        </p>

        <div className="mt-6">
          <a 
            href="/arc_investor_onepage.pdf" 
            className="inline-flex items-center px-6 py-3 border border-border text-foreground rounded-xl font-medium hover:bg-card hover:border-accent/50 transition-colors"
          >
            Download One-Page Summary (Coming Soon)
          </a>
        </div>
      </div>

      <hr className="my-12" />

      <p className="text-sm text-muted-foreground text-center">
        <strong>© 2025 Albira Rahman</strong> — Licensed under ARC-Reflective Use License v1.0<br />
        This document contains forward-looking statements and should be considered alongside full disclosure materials
      </p>
    </div>
  )
}