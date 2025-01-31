import React, { useState } from "react";
import { Button, TextField, Select, MenuItem, Modal, Box, FormControl, InputLabel } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Tent, Home } from "lucide-react";
import tenttrak1 from '../../assets/tenttrek_49.jpg'
import tenttrak2 from '../../assets/trektent4.jpg'
import tenttrak3 from '../../assets/tenttrek3.jpg'
import { 
  Mountain, 
  Sunrise, 
  Flame, 
  Music2, 
  Coffee, 
  UtensilsCrossed, 
  Coffee as Coffee2, 
  Mountain as Mountain2,
  Clock,
  Utensils,
  Car,
  Sun,
  ArrowLeft,
  Coffee as TeaCup,
  ChevronDown
} from 'lucide-react';
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


// TimelineItem component
function TimelineItem({ icon, time, text }) {
  return (
    <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/10 transition-all duration-300">
      <div className="text-emerald-400">
        {icon}
      </div>
      <div>
        <p className="text-emerald-400 text-sm font-medium">{time}</p>
        <p className="text-gray-300">{text}</p>
      </div>
    </div>
  );
}

function TentandTrek() {
  // States
  const [isDay1Open, setIsDay1Open] = useState(false);
  const [isDay2Open, setIsDay2Open] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [packages, setPackage] = useState("");
  const [rooms, setRoom] = useState("");
  const [price, setPrice] = useState(0);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  // Constants
  const accommodations = [
    
    { 
      type: "Tent", 
      price: 1799, 
      icon: <Tent className="w-6 h-6" />, 
      images: [
        tenttrak2,
        tenttrak3
      ], 
      description: "Luxury camping experience with comfortable amenities" 
    },
  ];

  const inclusions = [
    { icon: <Mountain className="w-6 h-6" />, text: 'Phantom Rock View Sunset Trekking' },
    { icon: <Sunrise className="w-6 h-6" />, text: 'Kolukumalai Sunrise Trekking' },
    { icon: <Flame className="w-6 h-6" />, text: 'Campfire' },
    { icon: <Music2 className="w-6 h-6" />, text: 'DJ Music' },
    { icon: <Coffee className="w-6 h-6" />, text: 'Tea' },
    { icon: <UtensilsCrossed className="w-6 h-6" />, text: 'Dinner' },
    { icon: <Coffee2 className="w-6 h-6" />, text: 'Breakfast' },
    { icon: <Mountain2 className="w-6 h-6" />, text: 'Offroad Jeep Safari' }
  ];

  // Handlers
  const handleRoomChange = (e) => {
    const selectedRoom = e.target.value;
    const accommodation = accommodations.find((acc) => acc.type === selectedRoom);
    setRoom(selectedRoom);
    setPrice(accommodation?.price || 0);
  };

  const handleBookNow = () => {
    if (!name || !phone || !packages || !rooms) {
      alert("Please fill all fields");
      return;
    }

    const message = `Name: ${name}, Phone: ${phone}, Package: ${packages}, Room: ${rooms}`;
    const whatsappUrl = `https://wa.me/7592049934?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setName("");
    setPhone("");
    setPackage("");
    setRoom("");
    setOpen(false);
  };

  const openImageModal = (image) => setModalImage(image);
  const closeImageModal = () => setModalImage(null);

  return (
    <div className="min-h-screen bg-gradient-to-br ">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="py-12 md:py-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image Section */}
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={tenttrak1}
                  alt="Kolukumalai Camping"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 w-full space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Kolukumalai Camping
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Kolukkumalai is about 7,130 feet (2,170 m) above sea level and lies some 32 kilometers (20 mi) from
                Munnar. The hilltop village is accessible only by jeep due to rugged and rain-drenched roads covering up
                to 17 kms.
              </p>
              <div className="backdrop-blur-lg rounded-xl p-6 inline-block">
                <p className="text-2xl md:text-3xl font-bold">
                  <span className="text-emerald-400">₹1,799</span>
                  <span className="text-gray-400 text-lg ml-2">/ per person</span>
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <Button 
                  variant="contained" 
                  onClick={() => setOpen(true)} 
                  sx={{ 
                    backgroundColor: "#059669", 
                    color: "white", 
                    borderRadius: "9999px", 
                    padding: "12px 32px", 
                    fontWeight: "medium", 
                    textTransform: "none", 
                    gap: "8px", 
                    transition: "all 0.3s", 
                    "&:hover": { 
                      backgroundColor: "#047857", 
                      transform: "scale(1.05)" 
                    } 
                  }}
                >
                  Book Now
                  <ArrowForwardIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Accommodation Selection */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Choose Your Accommodation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedAccommodation(accommodation)}
              >
                <div className="relative h-64">
                  <img
                    src={accommodation.images[0]}
                    alt={accommodation.type}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 backdrop-blur-sm bg-white/10 text-white rounded-full p-2">
                    {accommodation.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {accommodation.type}
                  </h3>
                  <p className="text-gray-300 mb-4">{accommodation.description}</p>
                  <div className="text-2xl font-bold text-emerald-400">₹{accommodation.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Display Selected Accommodation Images */}
        {selectedAccommodation && (
          <div className="py-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {selectedAccommodation.type} Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedAccommodation.images.map((image, idx) => (
                <div 
                  key={idx}
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => openImageModal(image)}
                >
                  <img
                    src={image}
                    alt={`${selectedAccommodation.type} View ${idx + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-medium">Click to view</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Image Modal */}
        {modalImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalImage}
                alt="Selected accommodation"
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Form Modal */}
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={{ 
            position: "absolute", 
            top: "50%", 
            left: "50%", 
            transform: "translate(-50%, -50%)", 
            width: 400, 
            bgcolor: "background.paper", 
            boxShadow: 24, 
            p: 4, 
            borderRadius: 2 
          }}>
            <h2 className="text-2xl font-bold mb-6">Book Now</h2>
            <h3 className="text-2xl font-bold mb-6">TREK AND TENT CAMPING</h3>
            <TextField 
              label="Name" 
              fullWidth 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              sx={{ mb: 3 }} 
            />
            <TextField 
              label="Phone Number" 
              fullWidth 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              sx={{ mb: 3 }} 
            />
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Package</InputLabel>
              <Select 
                value={packages} 
                onChange={(e) => setPackage(e.target.value)}
              >
                <MenuItem value="">Select a package</MenuItem>
                <MenuItem value="Kolukumalai">Kolukumalai</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Room</InputLabel>
              <Select 
                value={rooms} 
                onChange={handleRoomChange}
              >
                <MenuItem value="">Select a Room</MenuItem>
                {accommodations.map((acc, idx) => (
                  <MenuItem key={idx} value={acc.type}>
                    {acc.type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField 
              label="Price" 
              fullWidth 
              value={`₹${price}`} 
              InputProps={{ readOnly: true }} 
              sx={{ mb: 3 }} 
            />
            <Button 
              variant="contained" 
              fullWidth 
              onClick={handleBookNow} 
              disabled={!name || !phone || !packages || !rooms}
              sx={{ 
                backgroundColor: !name || !phone || !packages || !rooms ? "#94a3b8" : "#059669", 
                "&:hover": { 
                  backgroundColor: !name || !phone || !packages || !rooms ? "#94a3b8" : "#047857" 
                } 
              }}
            >
              Submit
            </Button>
          </Box>
        </Modal>

        {/* Package Inclusions */}
        <div className="max-w-7xl mx-auto space-y-8">
          <section className="backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-serif font-bold text-white mb-8 border-b border-white/20 pb-4">
              Package Inclusions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inclusions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-emerald-400">
                    {item.icon}
                  </div>
                  <p className="text-gray-300 font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-col md:flex-row gap-6">
            <section className="backdrop-blur-lg rounded-2xl shadow-xl flex-1">
              <button 
                onClick={() => setIsDay1Open(!isDay1Open)}
                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors rounded-t-2xl"
              >
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-emerald-400" />
                  <h3 className="text-2xl font-serif font-bold text-white">Day 1 Schedule</h3>
                </div>
                <ChevronDown className={`w-6 h-6 text-emerald-400 transition-transform duration-300 ${isDay1Open ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${isDay1Open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-8 pt-0 space-y-4">
                  <div className="space-y-4">
                    <TimelineItem icon={<Home className="w-6 h-6" />} time="02:00 PM" text="Check In" />
                    <TimelineItem icon={<TeaCup className="w-6 h-6" />} time="02:30 PM" text="Welcome Tea" />
                    <TimelineItem icon={<Sun className="w-6 h-6" />} time="06:00 PM" text="Phantom Rock View Sunset Trekking" />
                    <TimelineItem icon={<ArrowLeft className="w-6 h-6" />} time="07:00 PM" text="Reach Back To Campsite" />
                    <TimelineItem icon={<Flame className="w-6 h-6" />} time="07:20 PM" text="Campfire with DJ" />
                    <TimelineItem icon={<Utensils className="w-6 h-6" />} time="09:00 PM" text="Dinner - Unlimited Food" />
                  </div>

                  <div className="rounded-lg p-6 mt-4">
                    <h4 className="text-lg font-semibold text-emerald-400 mb-4">Dinner Menu</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        '🫓 Chapatti',
                        '🍗 Chicken Gravy',
                        '🍚 Ghee Rice',
                        '🥘 Dal',
                        '🥗 Onion Raita',
                        '🍖 Chicken 65'
                      ].map((item, index) => (
                        <div key={index} className="text-gray-300">{item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="backdrop-blur-lg rounded-2xl shadow-xl flex-1">
              <button 
                onClick={() => setIsDay2Open(!isDay2Open)}
                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors rounded-t-2xl"
              >
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-emerald-400" />
                  <h3 className="text-2xl font-serif font-bold text-white">Day 2 Schedule</h3>
                </div>
                <ChevronDown className={`w-6 h-6 text-emerald-400 transition-transform duration-300 ${isDay2Open ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${isDay2Open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-8 pt-0 space-y-4">
                  <div className="space-y-4">
                    <TimelineItem icon={<Clock className="w-6 h-6" />} time="04:00 AM" text="Wake-up Call" />
                    <TimelineItem icon={<Car className="w-6 h-6" />} time="04:30 AM" text="Jeep Trek To Kolukumalai" />
                    <TimelineItem icon={<Sunrise className="w-6 h-6" />} time="06:30 AM" text="Visit Sunrise Viewpoint and Jaguar Rock" />
                    <TimelineItem icon={<ArrowLeft className="w-6 h-6" />} time="07:30 AM" text="Back to Jeep Pickup Point" />
                    <TimelineItem icon={<Home className="w-6 h-6" />} time="08:30 AM" text="Reach Back To Campsite" />
                    <TimelineItem icon={<Coffee2 className="w-6 h-6" />} time="09:30 AM" text="Breakfast - Unlimited Food" />
                    <TimelineItem icon={<Mountain className="w-6 h-6" />} time="10:00 AM" text="Travel Experience Section" />
                    <TimelineItem icon={<ArrowLeft className="w-6 h-6" />} time="11:30 AM" text="Check Out" />
                  </div>

                  <div className="rounded-lg p-6 mt-4">
                    <h4 className="text-lg font-semibold text-emerald-400 mb-4">Breakfast Menu</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {['🍛 Idli', '🥯 Vada', '☕ Tea', '🥚 Egg'].map((item, index) => (
                        <div key={index} className="text-gray-300">{item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>


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

      
    </div>
  );
}

export default TentandTrek;