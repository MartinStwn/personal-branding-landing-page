import Image from 'next/image'
import {
  ShieldCheck,
  FileSearch,
  Users,
  Activity,
  Workflow,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

const expertise = [
  'Secure Restaurant POS Systems',
  'Custom Dashboards & Business Management Systems',
  'Internal Admin Panels & CRM Platforms',
  'Role-Based Access Control (RBAC)',
  'Audit Logging & Security Monitoring',
  'Business Process Automation',
]

const trustBadges = [
  { icon: ShieldCheck, label: 'Security-First Development' },
  { icon: FileSearch, label: 'OWASP Top 10 Aligned' },
  { icon: Users, label: 'RBAC Implementation' },
  { icon: Activity, label: 'Audit Logging' },
  { icon: Workflow, label: 'Business Automation' },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[180px]"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            About Me
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Full-Stack Developer Specializing in{' '}
            <span className="text-gradient-accent">Secure Business Applications</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            I build secure business web applications that improve operations and
            protect sensitive data.
          </p>
        </Reveal>

        {/* Content grid */}
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Left: Text (3/5 width) */}
          <Reveal className="lg:col-span-3">
            <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
              <p>
                Hi, I&apos;m <strong className="text-foreground">Martinus Setiawan</strong>,
                a Full-Stack Developer specializing in secure business web
                applications.
              </p>
              <p>
                I help restaurants, SMEs, and service companies streamline
                operations through custom dashboards, POS systems, CRM platforms,
                and internal management tools.
              </p>
              <p>
                My approach combines modern web development with security-first
                engineering practices, ensuring every application is designed to
                improve efficiency while protecting sensitive business data.
              </p>

              {/* Expertise list */}
              <div className="rounded-2xl border border-border bg-card/60 p-5 sm:p-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                  Core Expertise
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {expertise.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[10px] text-primary">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                Security is integrated from day one using industry best
                practices, including secure authentication, access control,
                OWASP Top 10 mitigation, and data protection.
              </p>
              <p>
                My preferred technology stack includes Laravel, PHP, PostgreSQL,
                MySQL, Bootstrap, JavaScript, and REST APIs.
              </p>
              <p className="text-sm italic text-muted-foreground/70">
                I am currently pursuing a D4 degree in Cybersecurity, applying
                academic knowledge directly to real-world business applications.
              </p>
            </div>
          </Reveal>

          {/* Right: Photo + Stats (2/5 width) */}
          <Reveal delay={100} className="lg:col-span-2">
            <div className="flex flex-col items-center lg:items-start">
              {/* Profile photo with glassmorphism frame */}
              <div className="gradient-border-glow w-full max-w-xs">
                <div
                  className="animate-float overflow-hidden rounded-[24px] border"
                  style={{
                    borderColor: 'rgba(255,255,255,0.12)',
                    background: 'color-mix(in oklch, var(--card) 55%, transparent)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow:
                      '0 8px 32px rgba(0,0,0,0.2), 0 0 60px color-mix(in oklch, var(--primary) 15%, transparent)',
                  }}
                >
                  <Image
                    src="/profile.jpeg"
                    alt="Martinus Setiawan — Full-Stack Developer specializing in secure business web applications"
                    width={400}
                    height={500}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="aspect-[4/5] w-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Quick stats */}
              <div className="mt-6 grid w-full grid-cols-2 gap-3">
                <div className="glass rounded-xl px-4 py-3 text-center">
                  <p className="text-lg font-bold text-primary">3+</p>
                  <p className="text-xs text-muted-foreground">Years building apps</p>
                </div>
                <div className="glass rounded-xl px-4 py-3 text-center">
                  <p className="text-lg font-bold text-primary">50+</p>
                  <p className="text-xs text-muted-foreground">Projects delivered</p>
                </div>
                <div className="glass rounded-xl px-4 py-3 text-center">
                  <p className="text-lg font-bold text-primary">0</p>
                  <p className="text-xs text-muted-foreground">Security incidents</p>
                </div>
                <div className="glass rounded-xl px-4 py-3 text-center">
                  <p className="text-lg font-bold text-primary">D4</p>
                  <p className="text-xs text-muted-foreground">Cybersecurity</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Trust badges */}
        <Reveal delay={150} className="mt-10">
          <div className="glass flex flex-wrap items-center justify-center gap-3 rounded-2xl px-5 py-4 sm:gap-4">
            {trustBadges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:text-sm"
              >
                <badge.icon className="size-3.5 shrink-0" />
                {badge.label}
              </span>
            ))}
          </div>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delay={200} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
            <a href="#projects">View SecurePOS Case Study</a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
