import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-light-teal">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate">
            <h2 className="section-title text-4xl font-bold text-teal mb-6">What is Triplok?</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Triplok is your ultimate youth travel companion, crafting unforgettable group adventures across India's most stunning destinations. We believe travel is about more than just visiting places—it's about creating bonds, sharing experiences, and building memories that last a lifetime.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-teal rounded-full"></div>
                <span className="font-semibold text-gray-800">Safe & Secure</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow rounded-full"></div>
                <span className="font-semibold text-gray-800">Budget-Friendly</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-teal rounded-full"></div>
                <span className="font-semibold text-gray-800">Fun-Loving</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow rounded-full"></div>
                <span className="font-semibold text-gray-800">Group Vibes</span>
              </div>
            </div>
          </div>
          
          <div className="scroll-animate">
            <div className="grid grid-cols-2 gap-4">
              <img  
                className="rounded-2xl shadow-lg"
                alt="Happy travelers at Udaipur"
               src="https://images.unsplash.com/photo-1568203446264-3caa5ad25959" />
              <img  
                className="rounded-2xl shadow-lg mt-8"
                alt="Adventure activities in Rishikesh"
               src="https://images.unsplash.com/photo-1690905765803-926f79b91ba0" />
              <img  
                className="rounded-2xl shadow-lg -mt-8"
                alt="Cultural exploration in Jaipur"
               src="https://images.unsplash.com/photo-1663616092907-52c7d0995d17" />
              <img  
                className="rounded-2xl shadow-lg"
                alt="Sunset moments with friends"
               src="https://images.unsplash.com/photo-1540233755642-1a8a6b81a774" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;