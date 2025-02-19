import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
 
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
     
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 p-3 bg-purple-600 text-white 
          rounded-full shadow-lg hover:bg-purple-700 
            focus:outline-none "
          aria-label="Scroll to Top"
        >
          <FaArrowUp className="w-4 h-4" />
        </button>
      )}
    </>
  );
};

export default BackToTop;