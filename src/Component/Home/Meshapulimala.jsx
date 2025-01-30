import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, Modal, Box, FormControl, InputLabel } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Home, Tent } from 'lucide-react';
import meeshTent from "../../assets/mishapulimala13.jpg";
import mishapuli1 from '../../assets/mishapulimala.jpg';

import ImageMeesh from './ImageMeesh.jsx';
import PkgMeesh from './PkgMeesh.jsx';

const accommodations = [
  {
    type: "Tent",
    price: 3600,
    icon: <Tent className="w-6 h-6" />,
    images: [meeshTent],
    description: "Luxury camping experience with comfortable amenities",
  },
];

function Meshapulimala() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [packages, setPackage] = useState('');
  const [rooms, setRoom] = useState('');
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
    const selectedAcc = accommodations.find(acc => acc.type === e.target.value);
    setSelectedAccommodation(selectedAcc);
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

  return (
    <div className="min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-4">
        <div className="py-12 md:py-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={mishapuli1}
                  alt="Meeshapulimala Camping"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Meeshapulimala
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                The second highest peak in the Western Ghats after Anamudi, Meesapulimala in Idukki district is a popular spot for trekking and camping. The hill (mala) gets its name from its resemblance to a whiskered (meesa) and tiger (puli) when viewed from the southwest direction. Situated around 20 km from Munnar, the hill is located between Anaimalai Hills and Palani Hills.
              </p>
              <div className="backdrop-blur-lg rounded-xl p-6 inline-block">
                <p className="text-2xl md:text-3xl font-bold">
                  <span className="text-emerald-400">₹{selectedAccommodation?.price || 3600}</span>
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
                    '&:hover': { backgroundColor: '#047857', transform: 'scale(1.05)' }
                  }}
                >
                  Book Now
                  <ArrowForwardIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}>
            <h2 className="text-2xl font-bold mb-6">Book Now</h2>
            <TextField label="Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} sx={{ mb: 3 }} />
            <TextField label="Phone Number" fullWidth value={phone} onChange={(e) => setPhone(e.target.value)} sx={{ mb: 3 }} />
            <Select label="Package" fullWidth value={packages} onChange={(e) => setPackage(e.target.value)} sx={{ mb: 3 }}>
              <MenuItem value="">Select a package</MenuItem>
              <MenuItem value="Meeshapulimala">Meeshapulimala</MenuItem>
            </Select>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Room</InputLabel>
              <Select value={rooms} onChange={handleRoomChange}>
                <MenuItem value="">Select a Room</MenuItem>
                {accommodations.map((acc, idx) => (
                  <MenuItem key={idx} value={acc.type}>{acc.type}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Price"
              fullWidth
              value={`₹${selectedAccommodation?.price || 3600}`}
              InputProps={{ readOnly: true }}
              sx={{ mb: 3 }}
            />
            <Button variant="contained" fullWidth onClick={handleBookNow} sx={{ backgroundColor: '#059669', '&:hover': { backgroundColor: '#047857' } }}>
              Submit
            </Button>
          </Box>
        </Modal>

        <div className="py-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Choose Your Accommodation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer" onClick={() => setSelectedAccommodation(accommodation)}>
                <div className="relative h-64">
                  <img src={accommodation.images[0]} alt={accommodation.type} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 backdrop-blur-sm rounded-full p-2">{accommodation.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <PkgMeesh />
        <ImageMeesh />
      </div>
    </div>
  );
}

export default Meshapulimala;
