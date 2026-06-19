import { Shield, Users, Building2, Database, Lock, FileCheck } from 'lucide-react'

const trustItems = [
  { icon: Shield, label: 'Argon2id Password Hashing' },
  { icon: Lock, label: 'CSRF & XSS Protection' },
  { icon: Users, label: 'Role-Based Access Control' },
  { icon: FileCheck, label: 'Audit Logging' },
  { icon: Database, label: 'SQL Injection Prevention' },
  { icon: Building2, label: 'Business Automation' },
]

export function TrustBar() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass rounded-2xl px-6 py-6 sm:px-10">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Trusted Security Capabilities
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <item.icon className="size-4 text-primary" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
