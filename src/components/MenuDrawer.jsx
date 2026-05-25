import bgImage from '../assets/MENU.svg';

export default function MenuDrawer({ isOpen, onClose }) {
  const menuItems = [
    { title: 'Home', color: 'bg-sky-900' },
    { title: 'Highlights', color: 'bg-blue-950' },
    { title: 'About Us', color: 'bg-emerald-800' },
    { title: 'Informals', color: 'bg-purple-900' },
    { title: 'Sponsors', color: 'bg-cyan-800' },
    { title: 'Our Team', color: 'bg-violet-950' },
    { title: 'Contact Us', color: 'bg-red-700' },
    { title: 'Merchandise', color: 'bg-neutral-800' },
  ];

  return (
    <div 
      className={`fixed top-0 right-0 h-screen w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out z-40 flex flex-col justify-center items-center ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Top-right white glow vignette */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Area: Removed overflow-x-auto to prevent all scrolling */}
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4 py-12 mt-20 select-none">
        
        {/* Left Side: Avengers/Stark Tower Spacer */}
        <div className="hidden lg:flex w-48 h-[550px] items-end justify-start pb-8 flex-shrink-0">
          {/* Tower placeholder */}
        </div>

        {/* Right Side: Comic Panel Grid - Forces panels to stay fixed in row without wrapping or scrolling */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-center w-full h-[550px]">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={onClose}
              className={`relative w-full md:w-auto md:flex-1 h-64 md:h-full ${item.color} border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] skew-y-1 md:skew-y-0 md:-rotate-1 hover:rotate-1 hover:-translate-y-6 transition-all duration-200 cursor-pointer flex flex-col justify-center items-center p-2 overflow-hidden group`}
            >
              {/* Halftone/Comic Overlay Highlight effect on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-200" />
              
              {/* Menu Title Text */}
              <h2 
                className="relative z-10 text-white font-black text-xl lg:text-2xl tracking-wide uppercase text-center drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] break-words [writing-mode:vertical-lr] md:rotate-180"
              >
                {item.title}
              </h2>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}