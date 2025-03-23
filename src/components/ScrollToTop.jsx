import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-purple-600 p-3 text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
