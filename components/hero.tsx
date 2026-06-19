import Image from 'next/image'
import {
  ArrowRight,
  ShieldCheck,
  FileSearch,
  Users,
  Activity,
  Workflow,
  UtensilsCrossed,
  LayoutDashboard,
  Building2,
  Lock,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

const expertise = [
  { icon: UtensilsCrossed, label: 'Secure POS Systems' },
  { icon: LayoutDashboard, label: 'Business Dashboards' },
  { icon: Building2, label: 'CRM Development' },
  { icon: Lock, label: 'RBAC' },
  { icon: FileSearch, label: 'Audit Logging' },
  { icon: Workflow, label: 'Workflow Automation' },
]

const trustBadges = [
  { icon: ShieldCheck, label: 'Security-First Development' },
  { icon: FileSearch, label: 'OWASP Top 10 Aligned' },
  { icon: Users, label: 'Role-Based Access Control' },
  { icon: Activity, label: 'Audit Logging' },
  { icon: Workflow, label: 'Business Automation' },
  { icon: ShieldCheck, label: 'Cybersecurity Background' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36"
    >
      {/* Background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/12 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[140px]" />
        <div className="absolute bottom-20 left-10 h-[300px] w-[300px] rounded-full bg-emerald-500/8 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left column: text content */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
                <span className="flex size-2 rounded-full bg-primary animate-pulse-glow" />
                Available for new projects
              </div>
            </Reveal>

            <Reveal delay={50}>
              <h1 className="mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
                Full-Stack Developer Specializing in{' '}
                <span className="text-gradient-accent">
                  Secure Business Applications
                </span>
              </h1>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                I help restaurants, SMEs, and service companies streamline
                operations through secure dashboards, POS systems, CRM platforms,
                and internal management tools.
              </p>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                I combine full-stack development with cybersecurity best
                practices to build applications that improve efficiency while
                protecting sensitive business data.
              </p>
            </Reveal>

            {/* Core expertise pills */}
            <Reveal delay={150}>
              <div className="mt-6 flex flex-wrap gap-2">
                {expertise.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                  >
                    <item.icon className="size-3.5 shrink-0" />
                    {item.label}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Trust badges */}
            <Reveal delay={200}>
              <div className="mt-6 flex flex-wrap gap-2">
                {trustBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/60 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    <CheckCircle2 className="size-3.5 shrink-0 text-primary" />
                    {badge.label}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* CTA buttons */}
            <Reveal delay={250}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href="#contact">
                    Book a Consultation
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-border bg-card/50 sm:w-auto"
                >
                  <a href="#case-study">View SecurePOS Case Study</a>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right column: profile photo */}
          <Reveal delay={100}>
            <div className="flex flex-col items-center">
              <div className="gradient-border-glow w-full max-w-sm">
                <div
                  className="animate-float overflow-hidden rounded-[24px] border"
                  style={{
                    borderColor: 'rgba(255,255,255,0.12)',
                    background:
                      'color-mix(in oklch, var(--card) 55%, transparent)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow:
                      '0 8px 32px rgba(0,0,0,0.2), 0 0 60px color-mix(in oklch, var(--primary) 15%, transparent)',
                  }}
                >
                  <Image
                    src="/profile.jpeg"
                    alt="Martinus Setiawan - Full-Stack Developer specializing in secure business applications"
                    width={800}
                    height={800}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    className="aspect-square w-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Stats row below photo */}
              <div className="mt-6 grid w-full max-w-sm grid-cols-4 gap-2">
                <div className="glass rounded-xl px-2 py-2.5 text-center">
                  <p className="text-sm font-bold text-primary">3+</p>
                  <p className="text-[10px] text-muted-foreground leading-tight">Years</p>
                </div>
                <div className="glass rounded-xl px-2 py-2.5 text-center">
                  <p className="text-sm font-bold text-primary">50+</p>
                  <p className="text-[10px] text-muted-foreground leading-tight">Projects</p>
                </div>
                <div className="glass rounded-xl px-2 py-2.5 text-center">
                  <p className="text-sm font-bold text-primary">0</p>
                  <p className="text-[10px] text-muted-foreground leading-tight">Incidents</p>
                </div>
                <div className="glass rounded-xl px-2 py-2.5 text-center">
                  <p className="text-sm font-bold text-primary">D4</p>
                  <p className="text-[10px] text-muted-foreground leading-tight">Cyber</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
