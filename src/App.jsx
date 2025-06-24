import { useState } from "react";
import About from "./About/About.jsx";
import Header from "./Header/Header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-slate-950 text-slate-100 accent: text-fuchsia-500 / border-fuchsia-400 h-screen  py-5">
        <Header />
        <div className="w-100 rounded-md ">
          <h1 className="text-4xl text-center font-bold text-blue-600 ">
            Hi, I'm Elijah
          </h1>
          <p className="text-slate-500">Software Engineer</p>
          <button className="mt-4 px-4 py-2 border border-indigo-500 rounded-md text-indigo-500 hover:bg-indigo-500 hover:text-white transition">
            See My Work
          </button>
        </div>

        <About />
      </div>
    </>
  );
}

export default App;
