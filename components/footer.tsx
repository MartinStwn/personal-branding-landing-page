import { ShieldCheck, Mail, Linkedin, Github, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Security', href: '#security' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: MessageCircle, href: 'https://wa.me/6281911864152', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:martin.cyber092@gmail.com', label: 'Email' },
  { icon: Linkedin, href: 'https://linkedin.com/in/martincyber092', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/MartinStwn', label: 'GitHub' },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <a
              href="#"
              className="inline-flex items-center gap-2 font-semibold tracking-tight"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <ShieldCheck className="size-5" />
              </span>
              Martinus Setiawan
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Secure Business Web Application Developer. I build applications
              that improve operations and protect your data.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:justify-start">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex size-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <s.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Martinus Setiawan. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
