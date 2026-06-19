import { Reveal } from '@/components/reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How do you ensure my business data stays secure?',
    answer:
      'Security is built in from day one, not added later. I implement Argon2id password hashing, RBAC, CSRF protection, SQL injection prevention, XSS protection, and audit logging in every application. All projects follow OWASP Top 10 guidelines.',
  },
  {
    question: 'How long does it take to build a business application?',
    answer:
      'Timeline depends on complexity. A dashboard or internal tool typically takes 3–6 weeks. A full POS system with inventory management takes 6–10 weeks. I provide a detailed timeline during our initial consultation.',
  },
  {
    question: 'Do you build custom features or use templates?',
    answer:
      'Every project is custom-built for your specific business needs. I don\'t use generic templates. Your system is designed around your workflows, team structure, and security requirements.',
  },
  {
    question: 'What happens after the project is delivered?',
    answer:
      'I provide documentation, training for your team, and ongoing maintenance options. This includes security updates, performance monitoring, and feature enhancements as your business grows.',
  },
  {
    question: 'Can you integrate with our existing tools?',
    answer:
      'Yes. I can build integrations with payment gateways, accounting software, inventory systems, and other tools your business already uses. We discuss integration needs during the planning phase.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. I work with clients worldwide. I am fully equipped for remote collaboration across time zones and communicate via email, WhatsApp, and video calls.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Answers to common questions about building secure business
            applications.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-xl border-0 px-5"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
