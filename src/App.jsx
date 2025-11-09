import { useEffect, useState } from "react";
import About from "./About/About.jsx";

import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

import Project from "./Projects/Projects.jsx";
import Contact from "./Contact/Contact.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  /* This code tracks the cursor for mouse move events */
  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  /* Custom Cursor Effects */

  return (
    <>
      <div className=" flex flex-col bg-gradient-to-r from-black to-gray-800 text-neutral-300 font-semibold text-center overflow-y-auto no-scrollbar h-screen ">
        {/* Flexbox For Hero Content */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <Header />
        </section>
        <section id="about" className="min-h-screen flex justify-center ">
          <About />
        </section>
        <section id="projects" className="min-h-screen justify-center">
          <Project />
        </section>
        <section id="contact" className="min-h-screen justify-center">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
