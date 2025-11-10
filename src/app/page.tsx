import Nav from './components/Nav'
import Hero from './components/Hero'
import SparkCycler from './components/SparkCycler'
import ArchitectureDiagram from './components/ArchitectureDiagram'

export default function HomePage() {
  return (
    <main className="relative">
      <Nav />
      
      {/* Hero Section */}
      <Hero />

      {/* Core Truths Section */}
      <section id="principles" className="py-24 px-6">
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              'Reflection > Reaction',
              'Privacy > Personalization', 
              'Balance > Brilliance',
              'Meaning > Metrics',
              'Sparks > Notifications'
            ].map((truth, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-card border border-border rounded-full text-sm md:text-base font-medium text-foreground hover:border-accent/50 transition-all duration-200 hover:scale-105"
              >
                {truth}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-24 px-6 bg-card/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ARC operates as a reflection engine where two specialized minds engage in thoughtful dialogue to produce meaningful insights.
            </p>
          </div>
          
          <ArchitectureDiagram />
          
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-colors">
              Deep Dive into Philosophy
            </button>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section id="developers" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              For Developers
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Build with calm technology principles and local-first architecture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">Latency = Mindflow</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">Minimal UI = Inner calm</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">Local data = Self-ownership</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">Deterministic prompts (JSON schemas)</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-colors">
              Developer Detail
            </button>
            <button className="px-6 py-3 border border-border text-foreground rounded-xl font-medium hover:bg-card hover:border-accent/50 transition-colors">
              Architecture MDX
            </button>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section id="investors" className="py-24 px-6 bg-card/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              For Investors
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Mirror framework, not attention engine. Profit through peace, scaled thoughtfully.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">Mirror framework, not attention engine</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">GTM: Freemium Web → Offline Runtime</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">Moat: Two-mind model + privacy covenant</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">Profit = Peace, Scaled</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-colors">
              Investor One-Pager
            </button>
            <button className="px-6 py-3 border border-border text-foreground rounded-xl font-medium hover:bg-card hover:border-accent/50 transition-colors">
              Reach Me
            </button>
          </div>
        </div>
      </section>

      {/* Believers Section */}
      <section id="believers" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              For Believers
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Technology as a return to self-awareness and authentic intelligence.
            </p>
          </div>
          
          <div className="space-y-8 mb-16">
            <blockquote className="text-xl md:text-2xl font-medium text-foreground">
              "Technology should return humans to themselves."
            </blockquote>
            <blockquote className="text-xl md:text-2xl font-medium text-foreground">
              "Intelligence is balance, not dominance."
            </blockquote>
            <blockquote className="text-xl md:text-2xl font-medium text-foreground">
              "We don't predict you; we help you perceive yourself."
            </blockquote>
          </div>
          
          <div className="flex justify-center">
            <button className="px-8 py-4 bg-accent text-accent-foreground rounded-xl font-medium text-lg hover:bg-accent/90 transition-colors">
              Join the ARC Circle
            </button>
          </div>
        </div>
      </section>

      {/* Users Section */}
      <section id="users" className="py-24 px-6 bg-card/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              For Users
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Experience the dialogue between ARC-0 and ARC-1 as they generate insights.
            </p>
          </div>
          
          <SparkCycler />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
            <button className="px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-colors">
              Try the Dialogue Demo
            </button>
            <button className="px-6 py-3 border border-border text-foreground rounded-xl font-medium hover:bg-card hover:border-accent/50 transition-colors">
              Download Manifesto
            </button>
          </div>
        </div>
      </section>

      {/* Reach Me Section */}
      <section id="reach-me" className="py-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Reach Me
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you're an investor, visionary, or builder — let's explore the potential together.
            </p>
          </div>
          
          <form className="space-y-6 bg-card/30 p-8 rounded-xl border border-border">
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                Role
              </label>
              <select 
                id="role"
                name="role"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-accent"
                required
              >
                <option value="">Select your role</option>
                <option value="investor">Investor</option>
                <option value="visionary">Visionary/Believer</option>
                <option value="developer">Developer/Engineer</option>
                <option value="researcher">Researcher</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-accent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-accent"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-accent"
                placeholder="Tell me about your interest in ARC..."
              />
            </div>
            
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="license-agreement"
                name="license-agreement"
                className="mt-1 w-4 h-4 text-accent bg-background border-border rounded focus:ring-accent"
                required
              />
              <label htmlFor="license-agreement" className="text-sm text-muted-foreground">
                I agree to the{' '}
                <a href="/license" className="text-accent hover:underline">
                  ARC-Reflective Use License
                </a>
              </label>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-colors"
              >
                Submit
              </button>
              <a
                href="mailto:hello@arc-project.com"
                className="px-8 py-3 text-center border border-border text-foreground rounded-xl font-medium hover:bg-card hover:border-accent/50 transition-colors"
              >
                Email Instead
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}