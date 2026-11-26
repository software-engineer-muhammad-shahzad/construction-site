import Link from "next/link";
import type { NavItem } from "../data/nav-items";
import MotionItem from "./MotionItem";
import NavLink from "./NavLink";

// Desktop menu with animated entrance and hover dropdowns.
export default function DesktopNav({ items }: { items: NavItem[] }) {
  return (
    <nav className="desktop" aria-label="Main">
      <ul>
        {items.map((item, index) => (
          <MotionItem key={item.href} index={index} className={item.children ? "has-sub" : undefined}>
            <NavLink href={item.href}>
              {item.label}
              {item.children && <span className="caret" aria-hidden="true" />}
            </NavLink>
            {item.children && (
              <ul className="sub">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href}>
                      <span className="sub-text">{child.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </MotionItem>
        ))}
      </ul>
    </nav>
  );
}
