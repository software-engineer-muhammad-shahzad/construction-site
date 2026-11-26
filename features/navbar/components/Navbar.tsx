import { navItems } from "../data/nav-items";
import "../styles/navbar.css";
import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ScrollWatcher from "./ScrollWatcher";
import TopBar from "./TopBar";

export default function Navbar() {
  return (
    <header className="site-header">
      <ScrollWatcher />
      <TopBar />
      <div className="navwrap">
        <Logo />
        <MobileMenu items={navItems} />
        <DesktopNav items={navItems} />
      </div>
    </header>
  );
}
