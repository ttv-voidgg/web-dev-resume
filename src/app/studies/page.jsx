'use client';  // This marks the component as a Client Component

import { useEffect } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

import { SimpleLayout } from '@/components/SimpleLayout';

import '@/styles/studies.css';

gsap.registerPlugin(TextPlugin);

const App = () => {

  useEffect(() => {
    const roles = document.getElementById("roles");
    const bgtest = document.getElementById("bgtest");
    const cursor = document.getElementById("cursor");  // The cursor element

    // Define the words you want to animate
    const textArray = [
      "Web Designer",
      "Web Developer",
      "Photographer",
      "Network and Sys Admin",
      "I'm kicka$$, ./.",
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
        duration: 5,     // Fade out duration for current text
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
    <SimpleLayout
      title="Self studies that I'm currently pursuing during my free time"
      intro="Throughout my career life, my success is based on trust from the people who worked with me and my passion for my craft. I believe that one doesn't really need to know everything in the beginning as long as they are eager to learn."
    >
      <div>
        <h2 className='text-5xl'>GSAP</h2>
        <p className='text-lg mb-8'>March 17, 2025. I've always been interested in developing complex website designs that only a few developers have engaged with, but while searching for a company who's gonna hire me, I guess it's the best time to learn all these things.</p>
        <div  style={{backgroundImage: 'linear-gradient(to right, #3B82F6, #9333EA)',}} className="p-10 h-40 mb-8" id="bgtest">
          <span className='text-7xl mb-8' id="roles"></span><span id="cursor" className="text-7xl font-mono">|</span>
          
        </div>
        <p className='text-lg mb-8'>I'll most likely combine the snippets that I'll be able to create to produce that coola$$ website. For now, I've started learning how to use GSAP's TextPlugin plugin which I'll probably combine with Flip add smooth transitions with.</p>
      </div>
    </SimpleLayout>   
  );
};

export default App;
