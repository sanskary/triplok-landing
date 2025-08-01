import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

function Testimonials({ currentTestimonial, setCurrentTestimonial, testimonialsData }) {
  return (
    <section className="py-20 bg-light-teal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="section-title text-4xl font-bold text-teal mb-4">Hear it from our Triplok Family</h2>
          <p className="text-xl text-gray-600">Real stories from real travelers who locked amazing memories with us!</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="testimonial-card">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <img  
                  className="w-20 h-20 rounded-full object-cover"
                  alt={`${testimonialsData[currentTestimonial].name} testimonial photo`}
                 src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-3">
                  {[...Array(testimonialsData[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow fill-current" />
                  ))}
                </div>
                
                <p className="text-lg text-gray-700 mb-4 italic">
                  "{testimonialsData[currentTestimonial].text}"
                </p>
                
                <div>
                  <p className="font-semibold text-teal text-lg">{testimonialsData[currentTestimonial].name}</p>
                  <p className="text-gray-600">{testimonialsData[currentTestimonial].location}</p>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonialsData.length - 1 : prev - 1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft size={24} className="text-teal" />
          </button>
          
          <button 
            onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonialsData.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight size={24} className="text-teal" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-teal' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;