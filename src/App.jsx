import React from 'react';
import LandingPage from './components/landingpage.jsx';
import HighlightsSection from './components/Highlights.jsx';
import HackerDesktop from './components/Team.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black">
    
      <LandingPage />
      
      <HighlightsSection />
      
      <HackerDesktop />

      
    </div>
  );
}