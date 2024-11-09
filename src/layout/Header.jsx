import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" flex items-center px-10 justify-between h-20 text-slate-200 font-semibold text-sm absolute pt-6 leading-6 w-full bg-[#0B1120] z-[1000]">
      <div>
        <img src="logo.png" width={160} height={20} alt="" />
      </div>
      <nav className="flex items-center capitalize">
        <ul className="flex gap-4">
          {[
            { title: "home", path: "#home" },
            { title: "about", path: "#about" },
            { title: "services", path: "contact" },
          ].map((link) => (
            <li key={link.title} className="hover:text-sky-400">
              <a href={link.path}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center  gap-4 border-l-2 border-slate-200 border-solid ml-6 pl-6 ">
          {[
            { title: "login", path: "login" },
            { title: "sign up", path: "register" },
          ].map((link) => (
            <Link key={link.path} to={link.path} className="hover:text-sky-400">
              {link.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
