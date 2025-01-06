import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Carlos. I live in Winnipeg, where I develop and design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Carlos. I live in Winnipeg, where I design the future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve loved making things for as long as I can remember, and revese engineered a 
              Nintendo Entertainment System at 7 years old, just two weeks after my
              mom bought it from a local computer store that I thought myself how to disassemble and put it back together.
            </p>
            <p>
            The only thing I loved more than computers as a kid was speed. When I wasn’t watching F1, I was out riding my BMX, launching off hills, and banking through turns like I was chasing a podium finish. Skateboarding gave me the same rush—carving pavement, pushing limits, and learning that every fall was just part of getting better. That same drive fuels my work today—always looking for the next challenge, the next skill to master, and the next project to push beyond expectations.
            </p>
            <p>
            I spent a few summers indoors, building, experimenting, and creating. I wired up toy dynamos, and tinkered with electronics. I taught myself to play the piano and drums when I have the time. When I wasn’t making noise, I was making art—capturing moments through a camera lens, sketching, and painting. Whether it was speed, sound, or visuals, I was always chasing the thrill of creating something new, a mindset that still drives me today.
            </p>
            <p>
            Today, I’m here in Winnipeg, seeking the adventure of a lifetime by pursuing my career and my love for technology, creativity, and innovation. From building and designing software and websites, to capturing moments through photography, I’ve always been driven by curiosity and the thrill of creating something new. Now, I’m channeling that passion into my work, pushing boundaries, and taking on new challenges—ready to make an impact in the ever-evolving world of IT and digital development.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.instagram.com/kai._.0008/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/juan-carlos-eejay-de-borja-80696651/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>            
            <SocialLink
              href="mailto:dev.eejay.me@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              dev.eejay.me@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
