function Header() {
  return (
    <header className="fixed top-0 w-full bg-slate-900 text-slate-100 shadow-md z-50">
      <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-400">Elijah Williams</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-indigo-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-indigo-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-indigo-400 transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
