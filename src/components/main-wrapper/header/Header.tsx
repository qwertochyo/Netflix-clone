import { Bell, Grip, Search } from "lucide-react";
import Menu from "./Menu";
import { useLocation } from "react-router";
import { twMerge } from "tailwind-merge";

export default function Header() {
  const location = useLocation();
  const hasPath = location.pathname.includes('/media/');

  return (
    <header className={twMerge("px-10 py-6 flex justify-between items-center", hasPath ? "text-white" : "text-black")}>
      <div className="flex items-center gap-15">
        <Grip className="cursor-pointer" size={35} />
        {!hasPath && <Menu />}
      </div>
      <div className="flex items-center gap-8">
        <Search className="transition-colors hover:text-primary cursor-pointer" />
        <Bell className="transition-colors hover:text-primary cursor-pointer" />
        <img src="/avatar.jpg" width={50} height={50} className="rounded-full cursor-pointer" />
      </div>
    </header>
  );
}