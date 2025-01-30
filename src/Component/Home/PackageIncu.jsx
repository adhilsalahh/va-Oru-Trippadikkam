import React, { useState } from 'react';
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
  Home,
  Utensils,
  Car,
  Sun,
  ArrowLeft,
  Coffee as TeaCup,
  ChevronDown
} from 'lucide-react';

function Packageincu() {
  const [isDay1Open, setIsDay1Open] = useState(false);
  const [isDay2Open, setIsDay2Open] = useState(false);

  const inclusions = [
    { icon: <Mountain className="w-6 h-6" />, text: 'Anayirangal Dam View Sunset Trekking' },
    { icon: <Sunrise className="w-6 h-6" />, text: 'Kolukumalai Sunrise Trekking' },
    { icon: <Flame className="w-6 h-6" />, text: 'Campfire' },
    { icon: <Music2 className="w-6 h-6" />, text: 'DJ Music' },
    { icon: <Coffee className="w-6 h-6" />, text: 'Tea' },
    { icon: <UtensilsCrossed className="w-6 h-6" />, text: 'Dinner' },
    { icon: <Coffee2 className="w-6 h-6" />, text: 'Breakfast' },
    { icon: <Mountain2 className="w-6 h-6" />, text: 'Offroad Jeep Safari' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br  py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <section className=" backdrop-blur-lg rounded-2xl p-8 shadow-xl">
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
          <section className=" backdrop-blur-lg rounded-2xl shadow-xl flex-1">
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
                  <TimelineItem icon={<Home />} time="02:00 PM" text="Check In" />
                  <TimelineItem icon={<TeaCup />} time="02:30 PM" text="Welcome Tea" />
                  <TimelineItem icon={<Sun />} time="06:00 PM" text="Anayirangal Dam View Sunset Trekking" />
                  <TimelineItem icon={<ArrowLeft />} time="07:00 PM" text="Reach Back To Campsite" />
                  <TimelineItem icon={<Flame />} time="07:20 PM" text="Campfire with DJ" />
                  <TimelineItem icon={<Utensils />} time="09:00 PM" text="Dinner - Unlimited Food" />
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

          <section className=" backdrop-blur-lg rounded-2xl shadow-xl flex-1">
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
                  <TimelineItem icon={<Clock />} time="04:00 AM" text="Wake-up Call" />
                  <TimelineItem icon={<Car />} time="04:30 AM" text="Jeep Trek To Kolukumalai" />
                  <TimelineItem icon={<Sunrise />} time="06:30 AM" text="Visit Sunrise Viewpoint and Jaguar Rock" />
                  <TimelineItem icon={<ArrowLeft />} time="07:30 AM" text="Back to Jeep Pickup Point" />
                  <TimelineItem icon={<Home />} time="08:30 AM" text="Reach Back To Campsite" />
                  <TimelineItem icon={<Coffee2 />} time="09:30 AM" text="Breakfast - Unlimited Food" />
                  <TimelineItem icon={<Mountain />} time="10:00 AM" text="Travel Experience Section" />
                  <TimelineItem icon={<ArrowLeft />} time="11:30 AM" text="Check Out" />
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
  );
}

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

export default Packageincu;