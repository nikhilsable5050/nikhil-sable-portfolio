export default function OverlayMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`fixed inset-0 z-40 bg-black bg-opacity-95 transform transition-transform duration-500 ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      } flex flex-col items-center justify-center`}
    >
      {/* Close Button */}
      <button
        className="absolute top-5 right-5 text-3xl text-white focus:outline-none"
        onClick={() => setMenuOpen(false)}
      >
        ✕
      </button>

      {/* Menu Links */}
      <ul className="flex flex-col items-center space-y-6 text-white text-2xl">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
