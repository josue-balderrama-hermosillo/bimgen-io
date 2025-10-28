import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";
import teamImage from "@/assets/team-on-site.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-display font-bold">BIM GEN</div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#solutions" className="text-sm font-medium hover:text-primary transition-colors">
                What We Do
              </a>
              <a href="#work" className="text-sm font-medium hover:text-primary transition-colors">
                Work
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </a>
              <Button size="sm" className="gap-2">
                Talk to us <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-dark text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                We automate what slows you down.
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed">
                BIM GEN builds custom tools for construction, design, and operations.
                From ACC automations to AR field tracking — we turn ideas into working software.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  Talk to us <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline-light" size="lg">
                  See what we've built
                </Button>
              </div>
              
              <div className="pt-6 border-t border-white/20">
                <p className="text-sm text-white/60">
                  Built inside <span className="font-semibold text-white">Grupo Hermosillo</span>. 
                  Deployed on live jobs. Presented at <span className="font-semibold text-white">Autodesk University</span>.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-purple blur-3xl opacity-20"></div>
              <img 
                src={heroImage} 
                alt="BIM GEN Dashboard Interface" 
                className="relative rounded-3xl shadow-glow border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tags + Stats Strip */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {['AUTOMATION', 'BIM / VDC', 'AR IN THE FIELD', 'DATA VISIBILITY'].map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 max-w-3xl mx-auto">
              We build custom workflows that big vendors say are "on the roadmap." 
              We just build them now.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-display font-bold text-primary mb-2">30+</div>
              <div className="text-xl font-semibold mb-1">live automations</div>
              <div className="text-muted-foreground">Deployed across active projects</div>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl font-display font-bold text-primary mb-2">Minutes</div>
              <div className="text-xl font-semibold mb-1">not days</div>
              <div className="text-muted-foreground">ACC project setup & permissions</div>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl font-display font-bold text-primary mb-2">Overnight</div>
              <div className="text-xl font-semibold mb-1">visibility</div>
              <div className="text-muted-foreground">Steel / tilt-up install status dashboards</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Solve */}
      <section id="solutions" className="bg-secondary py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-card rounded-3xl p-8 shadow-card border-t-4 border-primary hover:shadow-glow transition-all">
              <h3 className="text-2xl font-display font-bold mb-4">
                ACC Project Setup, Done in Minutes
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We pre-configure folders, permissions, dashboards, and reporting — then deploy 
                a brand-new Autodesk Construction Cloud project with one click.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['Autodesk Construction Cloud', 'Permissions', 'Standardization'].map((badge) => (
                  <span key={badge} className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
              
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Used internally to guarantee consistent startup across new projects.</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-card rounded-3xl p-8 shadow-card border-t-4 border-primary hover:shadow-glow transition-all">
              <h3 className="text-2xl font-display font-bold mb-4">
                Field Asset Tracking That Updates Itself
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Scan a QR on site. Status updates automatically in ACC Assets. Dashboards refresh overnight. 
                Everyone — procurement, PM, fabrication — sees live status.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['QR → Status', 'Steel / Tilt-up', 'Progress KPIs'].map((badge) => (
                  <span key={badge} className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
              
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Tonnage, install %, holds… all visible without calling anyone.</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-card rounded-3xl p-8 shadow-card border-t-4 border-primary hover:shadow-glow transition-all">
              <h3 className="text-2xl font-display font-bold mb-4">
                Revit That Draws For You
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We build Dynamo / pyRevit tools that number walls, generate sheets, apply dimensions, 
                filter views — so your modelers stop burning hours on repetitive clicks.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['Dynamo', 'pyRevit', 'QA Consistency'].map((badge) => (
                  <span key={badge} className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
              
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Internal tools cut manual sheet prep from hours to minutes.</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Explore all services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section id="work" className="bg-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-primary text-sm font-bold tracking-wider">CASE STUDY</div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                From Zero to Build-Ready
              </h2>
              
              <p className="text-white/80 leading-relaxed text-lg">
                We built an internal tool that spins up a construction project template in Autodesk 
                Construction Cloud — folders, permissions, dashboards, and reports — so every new job 
                is standardized from day one. This became a repeatable product, not a one-off firefight.
              </p>
              
              <ul className="space-y-3">
                {[
                  'Cuts admin setup from days to minutes',
                  'Eliminates "who has access?" drama',
                  'Gives leadership live reporting on every new project'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="outline-light" size="lg" className="gap-2">
                See the build <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-purple blur-3xl opacity-20"></div>
              <div className="relative aspect-video bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                <div className="text-white/50 text-center p-8">
                  <div className="text-6xl mb-4">📊</div>
                  <div className="font-semibold">ACC Project Template Demo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process / How We Work */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            How working with us actually works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl">
                01
              </div>
              <h3 className="text-2xl font-display font-bold">Discovery</h3>
              <p className="text-muted-foreground leading-relaxed">
                We jump on a call, map your pain, and ask annoying "why are you doing it like that?" questions.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl">
                02
              </div>
              <h3 className="text-2xl font-display font-bold">Prototype, fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                In weeks, you're not looking at a slide deck — you're clicking a real working demo.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl">
                03
              </div>
              <h3 className="text-2xl font-display font-bold">Deploy & train</h3>
              <p className="text-muted-foreground leading-relaxed">
                We ship, document, and train your people so it doesn't depend on us forever.
              </p>
            </div>
          </div>
          
          <p className="text-center text-muted-foreground">
            No surprise licensing. You'll know exactly what we're building and what it costs.
          </p>
        </div>
      </section>

      {/* About / Credibility */}
      <section id="about" className="bg-secondary py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={teamImage} 
                alt="BIM GEN Team on Site" 
                className="rounded-3xl shadow-card"
              />
            </div>
            
            <div className="space-y-6">
              <div className="text-primary text-sm font-bold tracking-wider">
                BUILT ON REAL JOBS, NOT LAB EXPERIMENTS
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                We are builders first. We just happen to code.
              </h2>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                BIM GEN was born inside Grupo Hermosillo's Core Innovation group — the team responsible 
                for standardizing BIM/VDC, automation, data visibility, AR, and on-site digital workflows. 
                We're not consultants guessing from the outside. We're the people that had to solve this 
                for real jobs with real deadlines. We ship.
              </p>
              
              <div className="p-6 bg-card rounded-2xl border-l-4 border-primary">
                <p className="font-semibold mb-2">
                  Josu Balderrama Macías — Innovation Manager / BIM Specialist
                </p>
                <p className="text-muted-foreground text-sm">
                  Autodesk University speaker. Focused on automation, AR in the field, and standardization at scale.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {['Grupo Hermosillo', 'Autodesk University', 'Gensler Collaboration'].map((badge) => (
                  <span 
                    key={badge}
                    className="px-4 py-2 bg-card rounded-full text-sm font-semibold border border-border"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="bg-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Want this level of control on your projects?
            </h2>
            
            <p className="text-xl text-white/80">
              Book a call. We'll tell you in the first meeting if we can solve it or not.
            </p>
            
            <Button size="lg" className="gap-2">
              Request a working session <ArrowRight className="w-5 h-5" />
            </Button>
            
            <p className="text-sm text-white/60 pt-4">
              We work with owners, builders, and design teams in Mexico, LATAM, and the U.S.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white border-t border-white/10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="text-2xl font-display font-bold">BIM GEN</div>
              <p className="text-white/60 text-sm leading-relaxed">
                We build automation, not slides. ACC setup, AR in the field, live dashboards, Revit tools.
              </p>
              <p className="text-white/40 text-xs">
                As presented at Autodesk University.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">ACC Project Setup Automation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">QR → Dashboard Field Tracking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Revit / BIM Productivity Tools</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AR + Progress Visualization</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>Monterrey, MX</li>
                <li><a href="mailto:hi@bim-gen.com" className="hover:text-white transition-colors">hi@bim-gen.com</a></li>
                <li>
                  <a href="#" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    LinkedIn <ArrowRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-sm text-white/40">
            © BIM GEN. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
