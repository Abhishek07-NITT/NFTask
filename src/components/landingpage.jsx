import { useState } from 'react';
import bgImage from '../assets/Landing_background.png';
import MenuDrawer from './MenuDrawer.jsx';
import Navbar from './Navbar.jsx';

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-between p-6 md:p-8"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
    {/* Shared Navbar */}
    <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

    {/* Slide-out Menu Overlay */}
    <MenuDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />

    </div>
  );
}