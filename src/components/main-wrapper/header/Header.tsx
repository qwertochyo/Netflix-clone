import { Bell, Grip, Search } from "lucide-react";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="p-6 flex justify-between items-center">
      <div className="flex items-center gap-15">
        <Grip className="cursor-pointer" size={35} />
        <Menu />
      </div>
      <div className="flex items-center gap-8">
        <Search className="transition-colors hover:text-primary cursor-pointer" />
        <Bell className="transition-colors hover:text-primary cursor-pointer" />
        <img src="/avatar.jpg" width={50} height={50} className="rounded-full cursor-pointer" />
      </div>
    </header>
  );
}