import { Link } from "react-router";
import { menuData } from "./menu.data";

export default function Menu() {
  return (
    <ul className="flex items-center gap-10 flex-wrap">
      {menuData.map((item, index) => (
        <li key={index}>
          <Link className="relative transition-colors group hover:text-primary duration-400 ease-in-out p-2" to={item.url}>
            {item.name}

            <span className="absolute left-0 w-full h-0.5 top-12 transition group-hover:bg-primary"/>
          </Link>
        </li>
      ))}
    </ul>
  );
}