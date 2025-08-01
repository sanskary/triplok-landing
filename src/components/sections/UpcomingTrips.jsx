import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

function UpcomingTrips({ handleCTAClick }) {
  const upcomingTripsData = [
    {
      destination: "Udaipur",
      dates: "Every Weekend in August",
      price: "₹5,999",
      duration: "2 Days 1 Night",
      highlights: ["City Palace", "Lake Pichola", "Jagdish Temple", "Local Markets"],
      image: "Beautiful Udaipur City Palace with lake view",
      badge: "Limited Seats"
    },
    {
      destination: "Jaipur",
      dates: "15-17 September",
      price: "₹7,499",
      duration: "3 Days 2 Nights",
      highlights: ["Amber Fort", "Hawa Mahal", "City Palace", "Local Cuisine"],
      image: "Majestic Amber Fort Jaipur with group of travelers",
      badge: "Early Bird"
    },
    {
      destination: "Rishikesh",
      dates: "22-24 September",
      price: "₹6,299",
      duration: "3 Days 2 Nights",
      highlights: ["River Rafting", "Bungee Jumping", "Yoga Sessions", "Ganga Aarti"],
      image: "Adventure group river rafting in Rishikesh",
      badge: "Adventure Special"
    }
  ];

  return (
    <section id="trips" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="section-title text-4xl font-bold text-teal mb-4">Upcoming Adventures</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready for your next adventure? Check out our carefully curated trips designed for the young and adventurous!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingTripsData.map((trip, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="trip-card"
            >
              <div className="relative">
                <img  
                  className="w-full h-48 object-cover"
                  alt={`${trip.destination} travel destination`}
                 src="https://images.unsplash.com/photo-1673817333252-3f017c9357e9" />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {trip.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-teal mb-2">{trip.destination}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{trip.dates}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{trip.duration}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Highlights:</p>
                  <div className="flex flex-wrap gap-1">
                    {trip.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-light-teal text-teal px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-teal">{trip.price}</span>
                    <span className="text-gray-500 text-sm ml-1">onwards</span>
                  </div>
                  <Button 
                    onClick={() => handleCTAClick('book-now')}
                    className="btn-primary"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingTrips;