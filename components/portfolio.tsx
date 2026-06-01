import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const projects = [
  {
    title: 'Website Coffee Shop',
    category: 'Landing Page',
    description:
      'Website kedai kopi dengan menu interaktif dan reservasi online yang meningkatkan kunjungan pelanggan.',
    image: '/portfolio/coffee-shop.png',
  },
  {
    title: 'Website Company Profile',
    category: 'Company Profile',
    description:
      'Profil perusahaan modern yang memperkuat citra brand dan kredibilitas di mata calon klien.',
    image: '/portfolio/company-profile.png',
  },
  {
    title: 'Website UMKM',
    category: 'UMKM',
    description:
      'Website katalog produk untuk UMKM lokal agar lebih mudah ditemukan dan dipercaya pembeli.',
    image: '/portfolio/umkm.png',
  },
  {
    title: 'Website Jasa Konsultan',
    category: 'Company Profile',
    description:
      'Platform jasa konsultan dengan sistem booking dan halaman layanan yang meyakinkan.',
    image: '/portfolio/consultant.png',
  },
  {
    title: 'Landing Page Produk Digital',
    category: 'Landing Page',
    description:
      'Halaman penjualan produk digital yang dioptimasi untuk konversi tinggi dan kecepatan akses.',
    image: '/portfolio/digital-product.png',
  },
  {
    title: 'Security Assessment Website',
    category: 'Cyber Security',
    description:
      'Audit keamanan menyeluruh untuk mengidentifikasi dan menutup celah kerentanan website klien.',
    image: '/portfolio/security.png',
  },
]

export function Portfolio() {
  return (
    <section id="portofolio" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Portofolio
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Beberapa Proyek yang Pernah Dikerjakan
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Berbagai proyek nyata yang telah membantu klien mencapai tujuan
            digital mereka.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 100}>
              <article className="group glass h-full overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`Pratinjau ${project.title}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                      {project.category}
                    </span>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
