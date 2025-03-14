'use client'; // Ensure it's a Client Component

import { useEffect } from "react";

const ScrollHandler = () => {
  useEffect(() => {
    const handleHashScroll = () => {
      const sectionId = window.location.hash.replace("#", ""); // Get the fragment without "#"
      
      if (sectionId) {
        let sectionElement = document.getElementById(sectionId);

        if (sectionElement) {
          const navbarHeight = document.getElementById("Header")?.offsetHeight || 500; 

          // Scroll with an offset for "faqs" but only if needed
          if (sectionId === "faqs") {
            const yOffset = -(navbarHeight + 100); // Add extra offset if needed for "faqs"
            const targetPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: targetPosition, behavior: "smooth" });
          } else {
            // Scroll with the navbar height offset for other sections
            const yOffset = -navbarHeight;
            const targetPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: targetPosition, behavior: "smooth" });
          }
        }
      }
    };

    // Scroll on page load if there is a hash
    handleHashScroll();

    // Listen for hash changes and scroll accordingly
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  return null;
};

export default ScrollHandler;
