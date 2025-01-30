import React from 'react';
import { Camera, Mountain, Tent, PartyPopper, Sunset } from 'lucide-react';
import mishapulimala3 from '../../assets/mishapulimala3.jpg'
import meesh1 from '../../assets/jeep.jpg'
import mishapulimala5 from '../../assets/mishapulimala5.jpg'
import mishapulimala6 from '../../assets/mishapulimala6.jpg'
import mishapulimala8 from '../../assets/mishapulimala8.jpg'
import mishapulimala9 from '../../assets/mishapulimala9.jpg'
import mishapulimala12 from '../../assets/mishapulimala12.jpg'
import mishapulimala13 from '../../assets/mishapulimala13.jpg'


const images = [
  
  {
    url:mishapulimala3,
    title: "Meeshapulimala Sunrise",
  },
  {
    url:meesh1,
    title: "OffRoad Jeep Trekking",
  },
  {
    url: mishapulimala6,
    title: "Kurunji Valley Waterfalls",
  },
  {
    url: mishapulimala9,
    title: "Camp Fire",
  },
  
 
  
  
  {
    url: mishapulimala12,
    title: "Trekking Guide",
     },{
    url: mishapulimala13,
    title: "Tent Stay In Meeshapulimala",
  },{
    url: mishapulimala8,
    title: "Sunrise At Mountain",
}, {
    url:mishapulimala5,
    title: "Travel Experience Sections",
  },
];

function ImageMeesh
() {
  return (
    <div className="min-h-screen bg-gradient-to-br py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <Camera className="w-8 h-8" />
            Adventure Gallery
          </h1>
          <p className="text-gray-400 text-lg">Capturing life's most beautiful moments</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-white mb-2">
                    {image.icon}
                    <h3 className="text-2xl font-bold">{image.title}</h3>
                  </div>
                  <p className="text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageMeesh ;
