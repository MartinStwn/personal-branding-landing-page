import {
  UtensilsCrossed,
  LayoutDashboard,
  Building2,
  ShieldCheck,
  Workflow,
  Users,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: UtensilsCrossed,
    title: 'Secure Restaurant POS Development',
    problem: 'Manual order processing, inventory errors, no sales visibility',
    audience: 'Restaurants, cafes, food chains',
    result: 'Streamlined operations, 60% faster transactions, real-time inventory',
    featured: true,
  },
  {
    icon: LayoutDashboard,
    title: 'Custom Business Dashboards',
    problem: 'Scattered data, no real-time insights, manual reporting',
    audience: 'SMEs, retail businesses, service companies',
    result: '70% faster reporting, data-driven decisions, operational visibility',
  },
  {
    icon: Building2,
    title: 'Internal Tools & CRM Systems',
    problem: 'Disorganized workflows, no client tracking, inefficient operations',
    audience: 'Service companies, agencies, professional services',
    result: 'Centralized operations, improved client retention, automated workflows',
  },
  {
    icon: ShieldCheck,
    title: 'Security-Focused Web Applications',
    problem: 'Vulnerable systems, data breach risks, compliance concerns',
    audience: 'Any business handling sensitive customer data',
    result: 'OWASP-compliant protection, zero security incidents, client trust',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    problem: 'Time-consuming manual tasks, human errors, bottlenecks',
    audience: 'Growing businesses scaling operations',
    result: '90% reduction in manual errors, 3x faster processing times',
  },
  {
    icon: Users,
    title: 'RBAC & Security Upgrades',
    problem: 'Unauthorized access, no user controls, audit compliance gaps',
    audience: 'Businesses with multi-user systems',
    result: 'Granular access control, full audit trails, regulatory compliance',
  },
]

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[180px]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Services
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Business Solutions I Deliver
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Every service is designed to solve a specific operational problem and
            deliver measurable business results — with security built in.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <article
                className={`group glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 ${
                  service.featured
                    ? 'relative border-primary/40 ring-1 ring-primary/20'
                    : ''
                }`}
              >
                {service.featured && (
                  <span className="absolute -top-2.5 left-4 rounded-full bg-primary px-3 py-0.5 text-[11px] font-semibold text-primary-foreground">
                    Featured Service
                  </span>
                )}
                <div
                  className={`flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground ${
                    service.featured ? 'mt-1' : ''
                  }`}
                >
                  <service.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>

                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-destructive">
                      Problem
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {service.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
                      For
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {service.audience}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-emerald-500">
                      Result
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {service.result}
                    </p>
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
