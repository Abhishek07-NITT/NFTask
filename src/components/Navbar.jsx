import nfLogo from '../assets/NF_logo.png';
import hamburgerIcon from '../assets/hamburger-real.svg';

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between p-6 md:p-8 z-50">

      {/* NF Logo */}
      <div className="flex items-center">
        <img 
          src={nfLogo} 
          className="h-18 w-auto object-contain cursor-pointer transition-transform hover:scale-110"
        />
      </div>
      
      {/* Hamburger Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md focus:outline-none hover:bg-white/10 transition-colors cursor-pointer"
      >
        <img 
          src={hamburgerIcon} 
          className={`w-18 h-18 object-contain transition-transform duration-300`} 
        />
      </button>
      
    </header>
  );
}