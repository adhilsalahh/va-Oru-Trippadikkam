import React from 'react';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';
import tenttrek from '../../assets/tenttrek_49.jpg'
import green from '../../assets/green.jpg';
import tent from '../../assets/tent.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Pakage() {
  const packages = [
    {
      location: 'Munnar',
      duration: '2 Days',
      image:tent ,
      title: 'Meeshapulimala Camping',
      price: 'INR 3600',
      route: '/meeshapulimala',
    },
    {
      location: 'Munnar',
      duration: '2 Days',
      image: green,
      title: 'Kolukumalai Camping / Munnar Oval Green',
      price: 'INR 1799',
      route: '/kolukumalai',
    },
    
    {
      location: 'Munnar',
      duration: '2 Days',
      image:tenttrek ,
      title: 'Kolukumalai Camping / Tent Trek',
      price: 'INR 1799',
      route: '/tentandtrek',
    },
  ];

  return (
    <div className='mb-10'>
      {/* Banner Section */}
      <section className="banner z-50 relative flex flex-col justify-center items-center py-10 ">
        <div className="lg:w-[50vw] sm:w-[50vw] text-center">
          <p className="sm:text-2xl lg:text-4xl text-xl font-bold">Popular Packages</p>
        </div>
      </section>

      {/* Package Cards Section */}
      <section className="lg:px-20">
        <div className="flex flex-wrap items-center justify-around gap-5">
          <div className="flex justify-center flex-wrap gap-4 mt-6">
            {packages.map((pkg, index) => (
              <Link key={index} to={pkg.route} className="w-[18rem]"> {/* Wrap each card with Link */}
                <Card className="shadow-lg">
                  {/* ✅ Card Image (Fixed) */}
                  <div className="relative cursor-pointer">
                    <img 
                      className="w-full h-[10rem] rounded-t-lg object-cover" 
                      src={pkg.image} 
                      alt={pkg.title} 
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    <div className="space-y-1">
                      {/* Location */}
                      <div className="flex items-center space-x-1 text-sm">
                        <LocationOnIcon className="text-green-500" />
                        <p>{pkg.location}</p>
                      </div>

                      {/* Duration */}
                      <p className="font-semibold text-sm">{pkg.duration}</p>

                      {/* Title */}
                      <p className="font-semibold text-sm">{pkg.title}</p>

                      {/* Price */}
                      <p className="text-green-700 font-bold">
                        {pkg.price} <span className="text-gray-500">/Person</span>
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pakage;
