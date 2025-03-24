'use client';  // This marks the component as a Client Component

import { useEffect } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

import Link from 'next/link'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

import '@/styles/studies.css';

gsap.registerPlugin(TextPlugin);

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
    const bgtest = document.getElementById("bgtest");
    const cursor = document.getElementById("cursor");  // The cursor element

    // Define the words you want to animate
    const textArray = [
      "{ Self Taught ^^ }",
      "{ Web Designer }",
      "{ Web Developer }",
      "{ Photographer }",
      "{ Network and Sys Admin }",
    ];

    // Define the Tailwind background gradient classes for each text
    const bgClasses = [
      "linear-gradient(to right, #3B82F6, #9333EA)",  // Web Designer (blue to purple)
      "linear-gradient(to right, #10B981, #3B82F6)",  // Web Developer (green to blue)
      "linear-gradient(to right, #8B5CF6, #F43F5E)",  // Photographer (purple to pink)
      "linear-gradient(to right, #EF4444, #F59E0B)",  // Network and Systems Administrator (red to yellow)
      "linear-gradient(to right, #10B981, #3B82F6)",  // I'm kicka$$, ./. (green to blue)
    ];

    // Create a timeline with GSAP
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    const tl2 = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    const tbg = gsap.timeline({ repeat: -1, repeatDelay: 0 });

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
        delimiter:""
      })    
      .to(roles, {
        duration: 1,  // Adjust typing speed based on text length 
        text: { value: text }, // Change the text immediately
        delimiter:""
      })       
      .to(roles, {
        duration: .5,     // Fade in duration for new text
        opacity: 1,      // Show the new text
        ease: "power1.inOut",
      })
      .to(roles, {
        duration: 3,     // Fade out duration for current text
        opacity: 1,      // Hide the current text
        ease: "power1.inOut"
      })
    });

    bgClasses.forEach((text, index) => {
      tbg.to(bgtest, {
        duration: 1,     // Animate background gradient
        backgroundImage: bgClasses[index],  // Set the new background color using CSS color value
        ease: "power1.inOut"
      })
      .to(bgtest, {
        duration: 5.5,     // Animate background gradient
        ease: "power1.inOut"
      })      
    }); 
    
    // At the end of the timeline, smoothly transition back to the first background.
    tbg.to(bgtest, {
      duration: .5,  // Transition back to the first background image
      backgroundImage: bgClasses[0],  // Set the background back to the first gradient
      ease: "power1.inOut"
    });   

 

  }, []);

  return (
            <div className="max-w-full">
              <span className='text-7xl mb-8' id="roles"></span><span id="cursor" className="text-7xl font-mono">|</span>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I&apos;m Carlos—a Developer, Designer, Photographer, and Network & Systems Administrator based in Winnipeg.
              </p>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I specialize in building dynamic and efficient digital solutions, seamlessly blending development, 
              design, and technology to craft exceptional user experiences. Photography is also a passion of mine, 
              where I explore creativity beyond the digital realm, having received recognition for some of my work.
              </p>          
              <div className="mt-6 flex gap-6">
                <SocialLink
                  href="https://www.instagram.com/kai._.0008/"
                  aria-label="Check my Photography on Instagram"
                  icon={InstagramIcon}
                />
                <SocialLink
                  href="https://github.com/ttv-voidgg"
                  aria-label="View My Silly Projects on GitHub"
                  icon={GitHubIcon}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/juan-carlos-eejay-de-borja-80696651/"
                  aria-label="Connect with me on LinkedIn"
                  icon={LinkedInIcon}
                />
              </div>
            </div> 
  );
};

export default HomeContent;
