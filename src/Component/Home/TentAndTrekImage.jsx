
import React from 'react';
import { Camera } from 'lucide-react';

import kolukumal1 from '../../assets/Kolukkumalaimg5.jpg';
import kolukumal2 from '../../assets/TentAndTrek1.jpg';
import kolukumal3 from '../../assets/TentAndTrek4.jpg';
import kolukumal4 from '../../assets/TentAndTrek5.jpg';
import kolukumal5 from '../../assets/TentAndTrek3.jpg';

const images = [
  {
    url: kolukumal1,
    title: "Kolukkumala Entry Pass",
  },
  {
    url: kolukumal3,
    title: "Phantom Rock  View",
  },
  {
    url: kolukumal5,
    title: "Off Road Jeep",
  },
 
  {
    url: kolukumal2,
    title: "Kolukkumala Sunrise Trekking",
  },
  {
    url: kolukumal4,
    title: "Campfire With Dj ",
  },
 
];

function TentAndTrekImage({ openImageModal }) {
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
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              onClick={() => openImageModal(image.url)}  // Handle image click to open in modal
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TentAndTrekImage;
