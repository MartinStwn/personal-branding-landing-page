import { ArrowUpRight, ExternalLink, Github, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

const projects = [
  {
    title: 'SecurePOS',
    subtitle: 'Secure Restaurant Management System',
    description:
      'A complete restaurant POS system with cashier interface, inventory management, sales analytics, and role-based access control.',
    impact: [
      'Supports 200+ daily transactions',
      'Cut reporting time by 70%',
      'Reduced inventory discrepancies by 90%',
    ],
    security: [
      'Argon2id password hashing',
      'RBAC (Admin, Manager, Cashier)',
      'Audit logging & CSRF protection',
      'SQL injection & XSS prevention',
    ],
    tech: ['Next.js', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
    links: { demo: '#', github: '#' },
    gradient: 'from-blue-600 to-indigo-600',
    featured: true,
  },
  {
    title: 'Business Analytics Dashboard',
    subtitle: 'Real-Time Performance Monitoring',
    description:
      'Real-time analytics platform for monitoring business performance across departments with custom reporting.',
    impact: [
      'Real-time data visualization',
      'Custom report builder',
      'Alert & notification system',
    ],
    security: ['RBAC', 'Session management', 'Data encryption'],
    tech: ['Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'WebSocket'],
    links: { demo: '#', github: '#' },
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Internal Admin Panel & CRM',
    subtitle: 'Centralized Business Operations',
    description:
      'Full-featured admin panel for managing clients, staff, inventory, and business operations from a single dashboard.',
    impact: [
      'Centralized client management',
      'Automated invoicing',
      'Improved team collaboration',
    ],
    security: ['RBAC', 'Audit trails', 'Secure authentication'],
    tech: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
    links: { demo: '#', github: '#' },
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    title: 'Education Management System',
    subtitle: 'Student & Administration Platform',
    description:
      'Student and teacher management platform for schools and training institutions with grade tracking and parent portals.',
    impact: [
      'Simplified student administration',
      'Automated grade reporting',
      'Improved parent-teacher communication',
    ],
    security: ['Role-based access', 'Data privacy controls'],
    tech: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
    links: { demo: '#', github: '#' },
    gradient: 'from-cyan-600 to-blue-600',
  },
  {
    title: 'Travel Management System',
    subtitle: 'Booking & Reservation Platform',
    description:
      'Booking and reservation platform for travel agencies handling schedules, payments, and customer data securely.',
    impact: [
      'Streamlined booking process',
      'Secure payment processing',
      'Automated confirmations',
    ],
    security: ['Payment encryption', 'Session protection', 'Input validation'],
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    links: { demo: '#', github: '#' },
    gradient: 'from-amber-600 to-orange-600',
  },
]

export function Portfolio() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/3 -z-10 h-[400px] w-[600px] -translate-y-1/2 rounded-full bg-primary/10 blur-[160px]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Portfolio
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Real projects built for businesses. Each one solves a specific
            operational problem with measurable results.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 100}>
              <article
                className={`glass group relative grid overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 lg:grid-cols-5 ${
                  project.featured
                    ? 'relative border-primary/40 ring-1 ring-primary/20'
                    : ''
                }`}
              >
                {project.featured && (
                  <span className="absolute -top-2.5 left-4 z-10 rounded-full bg-primary px-3 py-0.5 text-[11px] font-semibold text-primary-foreground">
                    Hero Project
                  </span>
                )}

                <div className="p-6 sm:p-8 lg:col-span-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block rounded-lg bg-gradient-to-br ${project.gradient} px-3 py-1 text-xs font-semibold text-white`}
                    >
                      {project.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-emerald-500">
                        Business Impact
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {project.impact.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-primary">
                        Security
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {project.security.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <ShieldCheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild size="sm">
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink className="size-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github className="size-4" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="relative hidden lg:col-span-2 lg:block">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`}
                  />
                  <div className="flex h-full items-center justify-center p-8">
                    <div className="glass-strong rounded-xl p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <span className="flex size-3 rounded-full bg-red-400" />
                        <span className="flex size-3 rounded-full bg-yellow-400" />
                        <span className="flex size-3 rounded-full bg-green-400" />
                      </div>
                      <div className="mt-4 flex items-center justify-center gap-4">
                        <ArrowUpRight className="size-8 text-primary/40" />
                        <span className="text-sm text-muted-foreground">
                          Preview
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
