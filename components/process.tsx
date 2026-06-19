import {
  MessagesSquare,
  PencilRuler,
  Code2,
  TestTube2,
  Rocket,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: MessagesSquare,
    title: 'Discovery & Planning',
    description:
      'I learn about your business operations, pain points, and security requirements. We define scope, timeline, and deliverables.',
  },
  {
    icon: PencilRuler,
    title: 'Architecture & Design',
    description:
      'I design the system architecture with security built in — data flow, access controls, and user experience mapped out.',
  },
  {
    icon: Code2,
    title: 'Secure Development',
    description:
      'I build your application using OWASP-aligned practices, secure authentication, and protected database design.',
  },
  {
    icon: TestTube2,
    title: 'Security Testing & QA',
    description:
      'I test for vulnerabilities, validate access controls, and ensure performance meets your business needs.',
  },
  {
    icon: Rocket,
    title: 'Deployment & Support',
    description:
      'I deploy your system, provide documentation, and offer ongoing maintenance and security monitoring.',
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Process
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            How I Work
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A structured approach that ensures your project is delivered on time,
            secure, and built to last.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-6 top-0 hidden h-full w-px bg-border lg:left-1/2 lg:block"
          />
          <ol className="space-y-6 lg:space-y-0">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 80}>
                <div
                  className={`relative flex items-start gap-5 lg:w-1/2 ${
                    i % 2 === 1
                      ? 'lg:ml-auto lg:flex-row'
                      : 'lg:flex-row-reverse lg:text-right'
                  } ${i > 0 ? 'lg:-mt-6' : ''}`}
                >
                  <div className="glass relative z-10 flex size-12 shrink-0 items-center justify-center rounded-xl text-primary">
                    <step.icon className="size-6" />
                    <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                  </div>
                  <div className="glass flex-1 rounded-2xl p-5">
                    <h3 className="text-base font-semibold">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
