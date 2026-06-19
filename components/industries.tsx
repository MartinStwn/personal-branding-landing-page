import {
  UtensilsCrossed,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  Plane,
  Store,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const industries = [
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Food Service',
    problems: 'Manual order taking, inventory waste, slow reporting, staff management',
    solutions: 'POS systems, inventory tracking, sales analytics, role-based staff access',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: ShoppingBag,
    title: 'Retail',
    problems: 'Scattered sales data, stock management issues, no customer insights',
    solutions: 'Inventory dashboards, sales analytics, customer CRM, reporting tools',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    problems: 'Disorganized client management, manual scheduling, no billing system',
    solutions: 'CRM platforms, booking systems, invoice automation, client portals',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    problems: 'Student data silos, manual attendance, limited parent communication',
    solutions: 'Student management systems, grade tracking, parent portals, scheduling',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Plane,
    title: 'Travel & Hospitality',
    problems: 'Complex booking management, payment coordination, schedule conflicts',
    solutions: 'Booking engines, payment integration, schedule management, customer DB',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Store,
    title: 'Small & Medium Enterprises',
    problems: 'No digital presence, manual operations, limited budget for custom software',
    solutions: 'Tailored web apps, affordable automation, scalable solutions',
    gradient: 'from-amber-500 to-yellow-500',
  },
]

export function Industries() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[140px]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Industries
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Who I Help
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Industry-specific solutions tailored to your operational challenges.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.title} delay={i * 80}>
              <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div
                  className={`inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${industry.gradient} text-white`}
                >
                  <industry.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">
                  {industry.title}
                </h3>

                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-destructive">
                      Common Problems
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {industry.problems}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
                      My Solutions
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {industry.solutions}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
