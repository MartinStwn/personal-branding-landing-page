'use client'

import { MessageCircle, Mail, Linkedin, ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const channels = [
  {
    icon: MessageCircle,
    href: 'https://wa.me/6281911864152',
    label: 'WhatsApp',
    color: 'hover:bg-emerald-500',
  },
  {
    icon: Mail,
    href: 'mailto:martin.cyber092@gmail.com',
    label: 'Email',
    color: 'hover:bg-blue-500',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/martincyber092',
    label: 'LinkedIn',
    color: 'hover:bg-blue-600',
  },
]

export function StickyContact() {
  const [visible, setVisible] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showOptions && (
        <div className="flex flex-col items-end gap-2">
          {channels.map((ch) => (
            <a
              key={ch.label}
              href={ch.href}
              target="_blank"
              rel="noreferrer"
              aria-label={ch.label}
              className={`flex size-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-lg transition-all ${ch.color} hover:text-white hover:shadow-xl`}
            >
              <ch.icon className="size-5" />
            </a>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <button
          type="button"
          onClick={scrollToTop}
          className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-lg transition-all hover:border-primary/40 hover:text-primary"
          aria-label="Scroll to top"
        >
          <ChevronUp className="size-5" />
        </button>

        <button
          type="button"
          onClick={() => setShowOptions((v) => !v)}
          className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          aria-label="Contact options"
        >
          <MessageCircle className="size-5" />
        </button>
      </div>
    </div>
  )
}
