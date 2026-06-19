import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://martin-portofolio.netlify.app'),
  title: {
    default: 'Martinus Setiawan — Secure Business Web Application Developer',
    template: '%s | Martinus Setiawan',
  },
  description:
    'I build secure business web applications that improve operations and protect sensitive business data. Specializing in POS systems, dashboards, CRM, and RBAC security.',
  keywords: [
    'Secure Web Application Developer',
    'Laravel Developer',
    'Business Dashboard Developer',
    'Restaurant POS Developer',
    'Custom CRM Developer',
    'Secure Admin Panel Developer',
    'RBAC Implementation',
    'Business Process Automation',
    'Web Security Specialist',
    'Jakarta Web Developer',
  ],
  authors: [{ name: 'Martinus Setiawan' }],
  creator: 'Martinus Setiawan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Martinus Setiawan — Portfolio',
    title: 'Martinus Setiawan — Secure Business Web Application Developer',
    description:
      'I build secure business web applications that improve operations and protect sensitive business data.',
    url: 'https://martin-portofolio.netlify.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martinus Setiawan — Secure Business Web Application Developer',
    description:
      'I build secure business web applications that improve operations and protect sensitive business data.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://martin-portofolio.netlify.app',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Martinus Setiawan',
              jobTitle: 'Secure Web Application Developer',
              url: 'https://martin-portofolio.netlify.app',
              description:
                'I build secure business web applications that improve operations and protect sensitive business data.',
              knowsAbout: [
                'Web Application Security',
                'Laravel Development',
                'React Development',
                'Role-Based Access Control',
                'Restaurant POS Systems',
                'Business Dashboards',
                'CRM Development',
                'OWASP Top 10',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${jakarta.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
