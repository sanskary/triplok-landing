import React from 'react';
import { Button } from '@/components/ui/button';

function ContactForm({ handleFormSubmit }) {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center scroll-animate">
          <h2 className="section-title text-4xl font-bold text-teal mb-4">Want to be the first to know?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our travel circle and get exclusive access to new trips, early bird discounts, and travel tips!
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="form-input"
                required
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="form-input"
                required
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Instagram Handle" 
                className="form-input"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="form-input"
                required
              />
            </div>
            
            <textarea 
              placeholder="What kind of trips interest you most?" 
              rows="4" 
              className="form-input resize-none"
            ></textarea>
            
            <Button 
              type="submit"
              className="btn-primary text-lg px-8 py-4 w-full md:w-auto mx-auto"
            >
              Join Our Travel Circle
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;