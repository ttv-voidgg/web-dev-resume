import Image from 'next/image'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import webgl from '@/images/projects/webgl-practice.png'
import talentai from '@/images/projects/talentai.png'
import zumi from '@/images/projects/zumi.jpg'
import zpercent from '@/images/projects/zpercent.png'
import allcooks from '@/images/projects/allcooks-logo.png'

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Projects I&apos;ve created in my attempt to make an impact on the world.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects I&apos;ve created in my attempt to make an impact on the world."
      intro="
I've worked on numerous projects over the years, but these are the ones I'm most proud of. Many are open-source, so if something catches your eye, feel free to explore the code and contribute any ideas for improvement!"
    >

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-10 mb-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-black sm:text-5xl dark:text-zinc-100">
                Three.JS WebGL Mini Project
              </h1>
              <p className="mt-6 text-xl/8 text-zinc-600 dark:text-zinc-400">
                This is a mini project featuring a clean and responsive Hero Banner built using Three.js, WebGL, React.js, Tailwind CSS, and deployed with Vercel. The focus was on creating a modern layout that adapts well across devices, with a lightweight structure and fast load times.
              </p>
              <button className="rounded-md mt-5 bg-black px-3.5 py-3 text-base font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2">
                <a className="" href="https://hero-banner-nine.vercel.app/" target="_blank">Check it out!</a>
              </button>

            </div>
          </div>
          <div className="sm:hidden lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8">
            <iframe

                src="https://hero-banner-nine.vercel.app/"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-black sm:text-5xl dark:text-zinc-100">
                Talent AI
              </h1>
              <p className="mt-6 text-xl/8 text-zinc-600 dark:text-zinc-400">
                <strong>Talent.AI</strong> helps applicants in Manitoba prepare for interviews with AI-powered simulations, offering personalized feedback and insights to boost performance and land the perfect job.
              </p>
              <button className="rounded-md mt-5 bg-black px-3.5 py-3 text-base font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2">
                <a className="" href="https://talent-ai-teal.vercel.app/" target="_blank">Sign up and Try it!</a>
              </button>

            </div>
          </div>
        </div>
        <div className="sm:hidden lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <Image
              alt=""
              src={talentai}
              className="w-[55rem] max-w-52 rounded-xl sm:w-[57rem]"
          />
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-black sm:text-5xl dark:text-zinc-100">
                Zumi
              </h1>
              <p className="mt-6 text-xl/8 text-zinc-600 dark:text-zinc-400">
                A free, user-friendly app that connects pet parents with trusted and qualified Registered Veterinary Nurses (RVNs) for in-home pet care services. Ensuring your pet&apos;s needs are met in the comfort of their own home.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:hidden lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <Image
            alt=""
            src={zumi}
            className="w-[55rem] max-w-52 rounded-xl sm:w-[57rem]"
          />
        </div>
      </div>  

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-black sm:text-5xl dark:text-zinc-100">
                Zpercent
              </h1>
              <p className="mt-6 text-xl/8 text-zinc-600 dark:text-zinc-400">
              Helping organizations alleviate employee financial stress by offering interest-free emergency funds through a unique subscription model, improving morale, retention, productivity, and profitability.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:hidden lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <Image
            alt=""
            src={zpercent}
            className="w-[55rem] max-w-80 rounded-xl sm:w-[57rem]"
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-black sm:text-5xl dark:text-zinc-100">
                AllCooks
              </h1>
              <p className="mt-6 text-xl/8 text-zinc-600 dark:text-zinc-400">
              Allcooks is built on community and fueled by a love for food. Together, we explore comforting dishes, uncover cherished family recipes passed down through generations, and celebrate the culinary traditions that shape our identities.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:hidden lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <Image
            alt=""
            src={allcooks}
            className="w-[55rem] max-w-60 rounded-xl sm:w-[57rem]"
          />
        </div>
      </div>
    </SimpleLayout>    
  )
}
