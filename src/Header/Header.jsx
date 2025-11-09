import { useEffect, useState } from "react";

function Header() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const translateX = position.x * 20; // Adjust intensity
  const translateY = position.y * 20;

  return (
    /* NavBar */
    <div className="">
      <nav className="fixed top-0 left-0 w-full bg-black text-slate-100 shadow-md py-2 px-2 flex justify-end gap-2 z-999">
        <a
          href="#home"
          className="hover:text-white transition text-sm px-4 py-2 border-b-2 border-transparent hover:border-white"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-white transition text-sm px-4 py-2 border-b-2 border-transparent hover:border-white"
        >
          About
        </a>
        <a
          href="#projects"
          className="hover:text-white transition text-sm px-4 py-2 border-b-2 border-transparent hover:border-white"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:text-white transition text-sm px-4 py-2 border-b-2 border-transparent hover:border-white"
        >
          Contact
        </a>
      </nav>

      {/* Hero */}
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-center font-bold text-4xl">Welcome, I'm Elijah!</h1>
        <p className="text-center">
          I build full-stack apps with React, Node, and clean UI/UX design.
          <br></br>
          MongoDB · Express · React · Node.js
        </p>
        <button className="mt-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold shadow-md hover:from-gray-700 hover:to-gray-900 transition-transform duration-300 hover:scale-105">
          <a href="#about">Learn More About Me</a>
        </button>
      </div>
    </div>
  );
}

export default Header;
