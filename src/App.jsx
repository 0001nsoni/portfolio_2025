import React from "react";
import Nav from "./assets/Nav";
import Home from "./assets/Home";
import About from "./assets/About";
import Skills from "./assets/Skills";
import Project from "./assets/Project";
import Git_DSA from "./assets/Git_DSA";

function App() {
  return (
    <div className="font-sans flex flex-col">
      <Nav />

      <main className="md:pt-5"> {/* spacing for nav */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-200">
          <Home />
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-200">
          <About />
        </section>

        <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-200">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-200">
          <Project/>
        </section>

        <section id="githubdsa" className="min-h-screen flex items-center justify-center bg-gray-200 text-white">
          <Git_DSA/>
        </section>

        <section id="certification" className="min-h-screen flex items-center justify-center bg-gray-600 text-white">
          <h1 className="text-4xl font-bold">Certification Section</h1>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-700 text-white">
          <h1 className="text-4xl font-bold">Contact Section</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
