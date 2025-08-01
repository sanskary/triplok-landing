import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import UpcomingTrips from '@/components/sections/UpcomingTrips';
import Testimonials from '@/components/sections/Testimonials';
import ContactForm from '@/components/sections/ContactForm';
import InstagramGallery from '@/components/sections/InstagramGallery';
import Footer from '@/components/sections/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonialsData = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "Triplok made my Udaipur trip absolutely magical! The group was amazing and everything was so well organized. Can't wait for the next adventure!",
      rating: 5,
      image: "Young woman smiling with Udaipur palace in background"
    },
    {
      name: "Arjun Patel",
      location: "Delhi",
      text: "Best travel experience ever! Made so many new friends and the itinerary was perfect. Triplok knows how to create unforgettable memories.",
      rating: 5,
      image: "Young man enjoying boat ride in Udaipur"
    },
    {
      name: "Sneha Reddy",
      location: "Bangalore",
      text: "From booking to the actual trip, everything was seamless. The team is super friendly and professional. Highly recommend Triplok!",
      rating: 5,
      image: "Group of friends posing at City Palace Udaipur"
    },
    {
      name: "Rohit Kumar",
      location: "Pune",
      text: "Amazing value for money! The accommodations were great, food was delicious, and the group activities were so much fun. 10/10 would book again!",
      rating: 5,
      image: "Young travelers enjoying sunset at Lake Pichola"
    }
  ];

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🎉 Welcome to the Triplok Family!",
      description: "We'll keep you updated on all our amazing trips and exclusive offers!",
    });
  };

  const handleCTAClick = (action) => {
    if (action === 'explore-trips') {
      document.getElementById('trips').scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'get-updates' || action === 'follow-instagram') {
      window.open('https://www.instagram.com/triplok.in/', '_blank');
    } else {
      toast({
        title: "🚧 This feature isn't implemented yet—but don't worry!",
        description: "You can request it in your next prompt! 🚀",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Triplok.in - Lock the Trip of a Lifetime | Group Travel Adventures</title>
        <meta name="description" content="Join curated group trips filled with memories, laughter, and new friends. Explore Udaipur, Jaipur, Rishikesh and more with Triplok - your youth travel partner." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Toaster />
        
        <Header 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          handleCTAClick={handleCTAClick} 
        />
        <Hero handleCTAClick={handleCTAClick} />
        <About />
        <UpcomingTrips handleCTAClick={handleCTAClick} />
        <Testimonials 
          currentTestimonial={currentTestimonial} 
          setCurrentTestimonial={setCurrentTestimonial} 
          testimonialsData={testimonialsData} 
        />
        <ContactForm handleFormSubmit={handleFormSubmit} />
        <InstagramGallery handleCTAClick={handleCTAClick} />
        <Footer handleCTAClick={handleCTAClick} />
      </div>
    </>
  );
}

export default App;