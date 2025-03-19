'use client';  // This marks the component as a Client Component

import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin); 
import { useEffect } from 'react';

import Link from 'next/link'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

import '@/styles/studies.css';
import '@/styles/prism.css'

import 'prismjs'; // Core PrismJS
import 'prismjs/components/prism-javascript'; // For JS highlighting

const HomeContent = () => {

  function SocialLink({ icon: Icon, ...props }) {
    return (
      <Link className="group -m-1 p-1" {...props}>
        <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      </Link>
    )
  }

  useEffect(() => {
    const roles = document.getElementById("roles");
    const cursor = document.getElementById("cursor");  // The cursor element

    // Define the words you want to animate
    const textArray = [
      "{ webDeveloper }",
      "{ webDesigner }",
      "{ networkAndSysAdmin }",
    ];

    // Create a timeline with GSAP
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    const tl2 = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    tl2.to(cursor, {
      duration: 0.5,
      opacity: 0,     // Cursor visible    
      ease: "none",
    })
    .to(cursor, {
      opacity: 1,     // Cursor visible    
      ease: "none",
    });

    // Loop through the array of text and animate each one
    textArray.forEach((text, index) => {
      tl.to(roles, {
        duration: 0,     // Instant change of text
        opacity: 1, 
        text: { value: "" }, // Change the text immediately
      })    
      .to(roles, {
        duration: 1,  // Adjust typing speed based on text length 
        text: { value: text }, // Change the text immediately
      })       
      .to(roles, {
        duration: .5,     // Fade in duration for new text
        opacity: 1,      // Show the new text
        ease: "power1.inOut",
      })
      .to(roles, {
        duration: 3,     // Fade out duration for current text
        opacity: 1,      // Hide the current text
        ease: "power1.inOut",
      })
    });
  
 

  }, []);

    const codeString = `
  1    class AboutMe extends React.Component {
  2        constructor(props) {
  3            super(props);
  4            this.state = {
  5                name: 'Carlos',
  6                roles: [
  7                    'Developer',
  8                    'Designer',
  9                    'Network & Systems Administrator',
  10               ],
  11               city: 'Winnipeg',
  12               province: 'MB',
  13               hobbies: [
  14                   'Photography and Filmography',
  15                   'Digital and Traditional Arts',
  16                   'Snowboarding',
  17               ]
  18           };
  19       }
  20  }
  `;

  return (
            <div className="max-w-full">

              <h1 className="font-bold font-mono tracking-tight text-zinc-800 sm:text-5xl lg:text-7xl dark:text-zinc-100 mb-8">
                <span className='text-pink-600'>Carlos</span>
                <span className='text-gray-500'>( </span>
                <span className='text-cyan-300'>de_Borja</span>
                <span className='text-gray-500'> ) </span>
              </h1>
              <div className='mb-8 font-mono text-2xl md:text-7xl'>
                <span className='mb-8' id="roles"></span><span id="cursor">|</span>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:basis-1/3 mx-auto sm:mx-0 mb-5">
                  <div className="rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                    <div className="flex rounded-tl-xl bg-gray-800/40 ring-1 ring-white/5">
                      <div className="text-md font-normal font-sans -mb-px flex text-sm/6 text-gray-400">
                        <div className="rounded-tl-xl border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          Dev Mode

                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">AboutMe.jsx</div>
                      </div>
                    </div>

                    <pre className="language-javascript px-5 pt-1 pb-10 text-white rounded-lg overflow-auto">
                      <code>{codeString}</code>
                    </pre>                  
                  </div>
                </div>

                <div className='w-full md:basis-2/3 italic p-5 md:p-16 text-xl'>
                    <p className="mb-8">I’m Carlos — a Developer, Designer, and Network & Systems Administrator based in Winnipeg, MB.</p>
                    
                    <p className="mb-8">I create clean looking fast websites by combining my skill in development, design, and technology to deliver exceptional user experiences.</p>

                    <p className="mb-8">Outside the professional world, I love doing photography, digital and traditional arts, hiking, and snowboarding.</p>

                    <div className="mt-6 flex gap-6">
                      <SocialLink
                        href="https://www.instagram.com/kai._.0008/"
                        aria-label="Check my Photography on Instagram"
                        icon={InstagramIcon}
                        target="_blank"
                      />
                      <SocialLink
                        href="https://github.com/ttv-voidgg"
                        aria-label="View My Silly Projects on GitHub"
                        icon={GitHubIcon}
                        target="_blank"
                      />
                      <SocialLink
                        href="https://www.linkedin.com/in/juan-carlos-eejay-de-borja-80696651/"
                        aria-label="Connect with me on LinkedIn"
                        icon={LinkedInIcon}
                        target="_blank"
                      />
                    </div>                    
                </div>
              </div>
     
              
                     

            </div> 
  );
};

export default HomeContent;
