import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, Modal, Box, FormControl, InputLabel } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Packageinclunce from '../Home/PackageIncu.jsx';
import { Home, Tent } from 'lucide-react';
import acabin1 from '../../assets/acabin1.jpg';
import acabin2 from '../../assets/acabin2.jpg';
import ocabi1 from '../../assets/ocabin1.jpg';
import ocabi2 from '../../assets/ocabin4.jpg';
import ocabi3 from '../../assets/ocabin3.jpg';
import tent1 from '../../assets/tent1.jpg';
import tent2 from '../../assets/tent2.jpg';
import tentout3 from '../../assets/tentout3.jpg';
import kolukumaligreen from '../../assets/kolukumali1green_50.jpg';
import KolukmaliImage from './KolukumaliImage.jsx'
const accommodations = [
  { type: "A Cabin", price: 2500, icon: <Home className="w-6 h-6" />, images: [acabin1, acabin2], description: "Spacious cabin with modern amenities and scenic views" },
  { type: "O Cabin", price: 2500, icon: <Home className="w-6 h-6" />, images: [ocabi1, ocabi2, ocabi3], description: "Cozy cabin perfect for a peaceful retreat" },
  { type: "Tent", price: 1799, icon: <Tent className="w-6 h-6" />, images: [tent2, tent1, tentout3], description: "Luxury camping experience with comfortable amenities" },
];

function Kolukumalai() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [packages, setPackage] = useState('');
  const [rooms, setRoom] = useState('');
  const [price, setPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const handleRoomChange = (e) => {
    const selectedRoom = e.target.value;
    setRoom(selectedRoom);
    const selectedAccommodation = accommodations.find(acc => acc.type === selectedRoom);
    setPrice(selectedAccommodation ? selectedAccommodation.price : 0);
  };

  const handleBookNow = () => {
    if (!name || !phone || !packages || !rooms) {
      alert('Please fill all fields');
      return;
    }

    const message = `Name: ${name}, Phone: ${phone}, Package: ${packages}, Room: ${rooms}`;
    const whatsappUrl = `https://wa.me/7592049934?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setName('');
    setPhone('');
    setPackage('');
    setRoom('');
    setOpen(false);
  };

  const openImageModal = (image) => {
    setModalImage(image);
  };

  const closeImageModal = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="py-12 md:py-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image Section */}
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
                <img src={kolukumaligreen} alt="Kolukumalai Camping" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 w-full space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Kolukumalai Camping
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Kolukkumalai is about 7,130 feet (2,170 m) above sea level and lies some 32 kilometers (20 mi) from Munnar.
                The hilltop village is accessible only by jeep due to rugged and rain-drenched roads covering up to 17 kms.
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
                  backgroundColor: '#059669',
                  color: 'white',
                  borderRadius: '9999px',
                  padding: '12px 32px',
                  fontWeight: 'medium',
                  textTransform: 'none',
                  gap: '8px',
                  transition: 'all 0.3s',
                  transform: 'scale(1)',
                  boxShadow: 'lg',
                  '&:hover': { 
                    backgroundColor: '#047857', // ✅ Merged inside one "&:hover"
                    transform: 'scale(1.05)' 
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

        {/* Form Modal */}
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 2 }}>
            <h2 className="text-2xl font-bold mb-6">Book Now</h2>
            <h3 className='text-2xl font-bold mb-6' >MUNNAR OVAL GREEN</h3>
            <TextField label="Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} sx={{ mb: 3 }} />
            <TextField label="Phone Number" fullWidth value={phone} onChange={(e) => setPhone(e.target.value)} sx={{ mb: 3 }} />
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Package</InputLabel>
              <Select value={packages} onChange={(e) => setPackage(e.target.value)}>
                <MenuItem value="">Select a package</MenuItem>
                <MenuItem value="Kolukumalai">Kolukumalai</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Room</InputLabel>
              <Select value={rooms} onChange={handleRoomChange}>
                <MenuItem value="">Select a Room</MenuItem>
                {accommodations.map((acc, idx) => (
                  <MenuItem key={idx} value={acc.type}>{acc.type}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField label="Price" fullWidth value={`₹${price}`} InputProps={{ readOnly: true }} sx={{ mb: 3 }} />
            <Button variant="contained" fullWidth onClick={handleBookNow} sx={{ backgroundColor: '#059669', '&:hover': { backgroundColor: '#047857' } }}>
              Submit
            </Button>
          </Box>
        </Modal>


        
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
                    src={accommodation.images[0]} // Display the first image as a thumbnail
                    alt={accommodation.type}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 backdrop-blur-sm rounded-full p-2">
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
              {selectedAccommodation.type} Images
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {selectedAccommodation.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`${selectedAccommodation.type} View ${idx + 1}`}
                  className="w-full rounded-lg shadow-lg cursor-pointer"
                  onClick={() => openImageModal(image)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Image Modal */}
        {modalImage && (
  <div
    className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
    onClick={closeImageModal}
  >
    <div
      className="relative max-w-3xl w-full p-4 bg-white rounded-lg shadow-lg"
      onClick={(e) => e.stopPropagation()} // Prevent click from propagating to the parent
    >
      <img
        src={modalImage}
        alt="Selected"
        className="w-full h-auto rounded-lg shadow-lg animate-fade-down"
      />
      <button
        onClick={closeImageModal}
        className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-full"
      >
        Close
      </button>
    </div>
  </div>
        )}


        {/* Package Inclusions */}
        <Packageinclunce />
        <KolukmaliImage/>
      </div>
    </div>
  );
}

export default Kolukumalai;