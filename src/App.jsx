import React from "react";
import Nav from "./assets/Nav";
import Home from "./assets/Home"
import About from "./assets/About";
import Skills from "./assets/Skills";
function App() {
  return (
    <div className="font-sans">
      <Nav />

      {/* Sections */}
      <section id="home" className="h-[90%] flex items-center justify-center bg-gray-100 mt-16 md:mt-2">
      <Home/>
      </section>

      <section id="about" className="h-screen flex items-center justify-center bg-gray-100">
        <About/>
      </section>

      <section id="skills" className="h-screen flex items-center justify-center bg-gray-100 ">
        <Skills/>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center bg-gray-400">
        <h1 className="text-4xl font-bold">Projects Section</h1>
      </section>

      <section id="githubdsa" className="h-screen flex items-center justify-center bg-gray-500 text-white">
        <h1 className="text-4xl font-bold">GitHub & DSA Section</h1>
      </section>

      <section id="certification" className="h-screen flex items-center justify-center bg-gray-600 text-white">
        <h1 className="text-4xl font-bold">Certification Section</h1>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-gray-700 text-white">
        <h1 className="text-4xl font-bold">Contact Section</h1>
      </section>
    </div>
  );
}

export default App;
