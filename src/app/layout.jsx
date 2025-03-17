import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from "@vercel/analytics/react"

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - JC de Borja',
    default:
      'JC de Borja - Developer, Designer, Photographer, Network & Systems Admin.',
  },
  description:
    'I&apos;m JC de Borja, an Experienced Web Developer and IT Professional with expertise in designing, developing, and maintaining websites and web applications across various industries. Skilled in WordPress, OpenCart, LAMP, ASP, and front-end technologies. Experienced in eCommerce, e-learning, and web optimization, delivering high-quality solutions on time while ensuring performance, security, and user experience.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <Analytics/>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
