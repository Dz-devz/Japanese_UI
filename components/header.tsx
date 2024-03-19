import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#ecece8] border-b-2 shadow-xl max-w-[100%] flex items-center justify-around leading-[0] m-0 cursor-sakura">
      <h1 className="m-2 font-bold text-left font-reenie text-6xl text-[#ff5576]">
        Utsukushii
      </h1>
      <nav>
        <ul className="inline-flex flex-wrap gap-10 text-5xl font-bold p-0 m-0 mr-5 font-reenie">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <li>Showcase</li>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
