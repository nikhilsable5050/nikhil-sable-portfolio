import {useState} from "react";
import OverlayMenu from "./OverlayMenu";
import Logo from "../assets/Logo.png"
import { FiMenu } from "react-icons/fi";

export default function Navbar(){
  const[menuOpen,setMenuOpen] =useState(false);
  const[visible,setVisible] = useState(true);

  return (
    <>
    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 
      ${visible ? "translate-y-0" : "-translate-y-full"}`}>

  <div className = "flex items-center space-x-2">
    <img src={Logo} alt="logo" className="w-10 h-auto max-w-[40px]"

/>
  <div className="text-2xl font-bold text-white hidden sm:block">
  NIKHIL
</div>
  </div>
  <div className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
  <button >
    <FiMenu />
  </button>

  </div>
    </nav>
    <OverlayMenu />
    </>
  )
}