import React from 'react';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

function InstagramGallery({ handleCTAClick }) {
  return (
    <section className="py-20 bg-light-teal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="section-title text-4xl font-bold text-teal mb-4">Follow Our Journey</h2>
          <p className="text-xl text-gray-600 mb-8">Check out the latest adventures from our Triplok family!</p>
          
          <Button 
            onClick={() => handleCTAClick('follow-instagram')}
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <Instagram size={20} />
            <span>Follow @triplok.in</span>
          </Button>
        </div>

        <div className="instagram-grid">
          <div className="instagram-post">
            <img  
              className="w-full h-full object-cover"
              alt="Triplok Instagram post - Udaipur adventure"
             src="https://images.unsplash.com/photo-1697394494123-c6c1323a14f7" />
          </div>
          <div className="instagram-post">
            <img  
              className="w-full h-full object-cover"
              alt="Triplok Instagram post - Adventure activities"
             src="https://images.unsplash.com/photo-1690905765803-926f79b91ba0" />
          </div>
          <div className="instagram-post">
            <img  
              className="w-full h-full object-cover"
              alt="Triplok Instagram post - Group bonding"
             src="https://images.unsplash.com/photo-1566371485846-1d68080f9f4a" />
          </div>
          <div className="instagram-post">
            <img  
              className="w-full h-full object-cover"
              alt="Triplok Instagram post - Cultural exploration"
             src="https://images.unsplash.com/photo-1675318191880-3d33fb029ec9" />
          </div>
          <div className="instagram-post">
            <img  
              className="w-full h-full object-cover"
              alt="Triplok Instagram post - Sunset moments"
             src="https://images.unsplash.com/photo-1540233755642-1a8a6b81a774" />
          </div>
          <div className="instagram-post">
            <img  
              className="w-full h-full object-cover"
              alt="Triplok Instagram post - Food experiences"
             src="https://images.unsplash.com/photo-1663791598451-dc08393f6f48" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstagramGallery;