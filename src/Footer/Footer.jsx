import githubIcon from "../assets/githubIcon.png";

function Footer() {
  return (
    <footer className="py-4 mt-au sticky top-0">
      <ul className="flex justify-center items-center  text-sm text-blue-600">
        <li>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-200"
          >
            <img src={githubIcon} className="size-5" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/elijah-williams16/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-200"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
