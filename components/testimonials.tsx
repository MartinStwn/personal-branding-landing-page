import { Quote, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    quote:
      'The POS system transformed our daily operations. Order processing went from chaotic to seamless, and the real-time inventory tracking alone saved us thousands in wasted stock.',
    name: 'Restaurant Owner',
    role: 'Casual Dining Chain, Jakarta',
    initials: 'RD',
  },
  {
    quote:
      'We needed a dashboard that could handle our growing data without compromising security. The role-based access control let us give staff exactly the permissions they needed.',
    name: 'Operations Director',
    role: 'Retail Business, Bandung',
    initials: 'OD',
  },
  {
    quote:
      'I was worried about moving our client management online, but the security measures — audit logs, encrypted data, access controls — gave me complete confidence.',
    name: 'Practice Manager',
    role: 'Professional Services Firm',
    initials: 'PM',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Business Owners
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Feedback from clients who have transformed their operations with
            secure business applications.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="glass flex h-full flex-col rounded-2xl p-7">
                <Quote className="size-8 text-primary/40" />
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="size-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">
                      {t.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
