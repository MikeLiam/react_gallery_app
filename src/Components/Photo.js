import React from 'react';
import { InView } from "react-intersection-observer";

/**
 * 
 * @param {Object} param0 props passed by
 */
const Photo = ( { farm, server, id, secret, handlePhoto } ) => {
  // Array with sampling range to show/vanish at intersection of viewport and <li> images. Range from 0 to 1 divied in steps fractions
  const thresholdArray = (steps) => Array(steps + 1)
                                          .fill(0)
                                          .map((_, index) => index / steps || 0)
 // Help manage if scroll down or up
 let previousY = 0
 let previousRatio = 0
 
 /**
  * Handle showing of vanishing <li> elements if go in or out of viewport
  * @param {Object} entries entries <Li> elements intersecting with viewport
  */
 const handleIntersect = entries => {
   entries.forEach(entry => {
     const currentY = entry.boundingClientRect.y
     const currentRatio = entry.intersectionRatio
     const isIntersecting = entry.isIntersecting
      const target = entry.target;
     // Scrolling down/up
     if (currentY < previousY && isIntersecting) {
       if (currentRatio > previousRatio) {
         // Scrolling down enter
        target.className= "slide-in active";
       } else {
         // Scrolling down leave
         target.className= "slide-in vanish-up"
       }
     } else if (currentY > previousY && isIntersecting) {
       if (currentRatio < previousRatio) {
         // Scrolling up leave
         target.className= "slide-in"
       } else {
         // Scrolling up enter  
         target.className= "slide-in active"
       }
     }
     // Set current y axis as previous for future calls
     previousY = currentY
     previousRatio = currentRatio
   })
 }

 // Asynchronously observe changes in the intersection of a <li> with a top-level document's viewport. Options, sampling range Array.
 const handleViewPhoto = new IntersectionObserver(handleIntersect, { threshold: thresholdArray(5) })
 

  return (
      <InView as="li"  id={id} className={"slide-in"} onChange={ (inView, entry) => handleViewPhoto.observe(entry.target)} >
          <img 
            src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} 
            alt=""
            onClick={(e) => handlePhoto(e.target, true, "open", id)}/>
      </InView>
  );
}

export default Photo;
