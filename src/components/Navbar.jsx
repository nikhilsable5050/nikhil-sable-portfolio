import { useState } from "react";
import OverlayMenu from "./OverlayMenu";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 
        ${visible ? "translate-y-0" : "-translate-y-full"} text-white`}
      >
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="logo"
            className="w-10 h-auto max-w-[40px]"
          />
          <div className="text-2xl font-bold">NIKHIL</div>
        </div>

        {/* MENU BUTTON (add text-white if using text) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl"
        >
          ☰
        </button>
      </nav>

      <OverlayMenu />
    </>
  );
}
