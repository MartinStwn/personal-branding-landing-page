import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { CaseStudy } from '@/components/case-study'
import { Services } from '@/components/services'
import { SecuritySection } from '@/components/security-section'
import { Industries } from '@/components/industries'
import { Portfolio } from '@/components/portfolio'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { StickyContact } from '@/components/sticky-contact'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CaseStudy />
        <Services />
        <SecuritySection />
        <Industries />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <StickyContact />
    </>
  )
}
