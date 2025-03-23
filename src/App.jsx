import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-purple-600"></div>
          <p className="text-xl text-white">Loading amazing stuff...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed -z-10 h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>

      <ScrollToTop />
    </>
  );
};

export default App;
