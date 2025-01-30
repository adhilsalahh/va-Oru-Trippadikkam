import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, Modal, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import imag1 from '../../assets/image2.jpg'
import Destination from './Destination';
import Pakage from './Pakage';
import Contact from './Contact';

function Homepage() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [packages, setPackage] = useState('');

  const handleBookNow = () => {
    if (!name || !phone || !packages) {
      alert('Please fill all fields');
      return;
    }

    const message = `Name: ${name}, Phone: ${phone}, Package: ${packages}`;
    const whatsappUrl = `https://wa.me/7592049934?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    setName('');
    setPhone('');
    setPackage('');
    setOpen(false);
  };

  return (
    <section>
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-12 gap-8">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-white">
              Travel Explore <br />
              <span className="text-emerald-600">And Enjoy Every</span> <br />
              Moment
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            Munnar, a serene hill station, renowned for its misty valleys, sprawling tea plantations and vibrant biodiversity, making it a haven for nature and tranquility seekers.
            </p>

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

              <Button
                variant="outlined"
                sx={{
                  borderColor: '#059669',
                  color: '#059669',
                  borderRadius: '9999px',
                  padding: '12px 32px',
                  fontWeight: 'medium',
                  textTransform: 'none',
                  gap: '8px',
                  transition: 'all 0.3s',
                  '&:hover': { backgroundColor: '#ecfdf5', borderColor: '#059669' },
                }}
              >
                Learn More
              </Button>
            </div>

            {/* Stats Section */}
            <div className="flex gap-8 pt-8">
              
              <div>
                <p className="text-3xl font-bold text-emerald-600">10k+</p>
                <p className="text-gray-600">Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-600">4.9</p>
                <p className="text-gray-600">Rating</p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              <img
                src={imag1} // Replace with your image URL
                alt="Tropical Paradise"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />

              <div className="absolute -z-10 top-1/2 -right-4 w-24 h-24 bg-emerald-200 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -z-10 bottom-1/4 -left-4 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <h2 className="text-2xl font-bold mb-6">Book Now</h2>
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
          <Select
            label="Package"
            fullWidth
            value={packages}
            onChange={(e) => setPackage(e.target.value)}
            sx={{ mb: 3 }}
          >
            <MenuItem value="">Select a package</MenuItem>
            <MenuItem value="Kolukumalai">Kolukumalai</MenuItem>
            <MenuItem value="Mishpulimala">Mishpulimala</MenuItem>
          </Select>
          <Button
            variant="contained"
            fullWidth
            onClick={handleBookNow}
            sx={{
              backgroundColor: '#059669',
              '&:hover': { backgroundColor: '#047857' },
            }}
          >
            Submit
          </Button>
        </Box>
      </Modal>

            <Destination/>
            <Pakage/>
            <Contact/>

    </section>


  );
}

export default Homepage;