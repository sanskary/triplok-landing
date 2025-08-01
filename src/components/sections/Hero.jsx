import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

function Hero({ handleCTAClick }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img  
          className="w-full h-full object-cover"
          alt="Group of young travelers exploring Udaipur"
         src="https://images.unsplash.com/photo-1568203446264-3caa5ad25959" />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title text-5xl md:text-6xl font-bold mb-6"
        >
          Let's Lock the Trip of a <span className="text-yellow">Lifetime!</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle text-xl md:text-2xl mb-8 font-light"
        >
          Join curated group trips filled with memories, laughter, and new friends.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            onClick={() => handleCTAClick('explore-trips')}
            className="btn-secondary text-lg px-8 py-4 flex items-center justify-center"
          >
            Explore Trips
          </Button>
          <Button 
            onClick={() => handleCTAClick('get-updates')}
            className="btn-outline text-lg px-8 py-4 text-teal border-teal hover:bg-teal hover:text-white flex items-center justify-center"
          >
            Get Updates
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;