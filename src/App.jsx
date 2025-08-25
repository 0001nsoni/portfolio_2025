import React, { useState, useEffect } from "react";
import Nav from "./assets/Nav";
import Home from "./assets/Home";
import About from "./assets/About";
import Skills from "./assets/Skills";
import Project from "./assets/Project";
import Git_DSA from "./assets/Git_DSA";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setProgress((old) => {
          if (old >= 100) {
            clearInterval(interval);
            setLoading(false);
            return 100;
          }
          return old + 2; // increments by 2%
        });
      }, 50); // every 100ms
    }
    return () => clearInterval(interval);
  }, [loading]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-8">
          Loading Portfolio...
        </h1>

        {/* Loader Bar */}
        <div className="w-3/4 md:w-1/2 h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-4 bg-gradient-to-r from-purple-500 to-green-400 transition-all duration-200 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="mt-6 text-gray-500 text-sm md:text-base">
          {progress < 100 ? `Loading ${progress}%` : "Ready!"}
        </p>
      </div>
    );
  }

  return (
    <div className="font-sans flex flex-col">
      <Nav />

      <main className="md:pt-5">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-gray-200"
        >
          <Home />
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-gray-200"
        >
          <About />
        </section>

        <section
          id="skills"
          className="min-h-screen flex items-center justify-center bg-gray-200"
        >
          <Skills />
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center bg-gray-200"
        >
          <Project />
        </section>

        <section
          id="githubdsa"
          className="min-h-screen flex items-center justify-center bg-gray-200 text-white"
        >
          <Git_DSA />
        </section>

        <section
          id="certification"
          className="min-h-screen flex items-center justify-center bg-gray-600 text-white"
        >
          <h1 className="text-4xl font-bold">Certification Section</h1>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-gray-700 text-white"
        >
          <h1 className="text-4xl font-bold">Contact Section</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
