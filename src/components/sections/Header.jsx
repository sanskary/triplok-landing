import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Header({ isMenuOpen, setIsMenuOpen, handleCTAClick }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-sticky">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="https://horizons-cdn.hostinger.com/2f21c06e-f4b8-4c0a-a1b2-a9dc7925820f/2deeb08672019f140be55f2f1d50a456.png" 
              alt="Triplok.in Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-teal">Triplok.in</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-teal font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-teal font-medium transition-colors">About</a>
            <a href="#trips" className="text-gray-700 hover:text-teal font-medium transition-colors">Trips</a>
            <a href="#contact" className="text-gray-700 hover:text-teal font-medium transition-colors">Contact</a>
          </nav>

          <div className="hidden md:block">
            <Button 
              onClick={() => handleCTAClick('join-trip')}
              className="btn-primary"
            >
              Join a Trip
            </Button>
          </div>

          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 py-4 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-teal font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-teal font-medium">About</a>
              <a href="#trips" className="text-gray-700 hover:text-teal font-medium">Trips</a>
              <a href="#contact" className="text-gray-700 hover:text-teal font-medium">Contact</a>
              <Button 
                onClick={() => handleCTAClick('join-trip')}
                className="btn-primary w-full"
              >
                Join a Trip
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}

export default Header;