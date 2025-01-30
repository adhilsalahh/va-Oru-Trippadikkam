import React, { useState } from 'react';
import { Tent, Sunrise, Flame, Mountain, Coffee, UtensilsCrossed, Clock, Home, Beef as Jeep, Utensils, TreePine, ArrowLeft, CupSoda as Cup, ChevronDown, Footprints, BadgeCheck } from 'lucide-react';

function PkgMeesh() {
  const [isDay1Open, setIsDay1Open] = useState(false);
  const [isDay2Open, setIsDay2Open] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
       

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
                  <TimelineItem icon={<Home />} time="10:00 AM" text="Check In" />
                  <TimelineItem icon={<BadgeCheck />} text="KFDC Entry Pass" />
                  <TimelineItem icon={<Jeep />} text="Jeep Safari To Meeshapulimala" />
                  <TimelineItem icon={<Utensils />} text="Lunch" />
                  <TimelineItem icon={<Footprints />} text="Kurunji Valley Waterfalls Trek" />
                  <TimelineItem icon={<Cup />} text="Evening Tea" />
                  <TimelineItem icon={<Flame />} text="Camp Fire" />
                  <TimelineItem icon={<Tent />} text="Tent Stay In Meeshapulimala" />
                  <TimelineItem icon={<UtensilsCrossed />} text="Dinner" />
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
                  <TimelineItem icon={<Clock />} time="05:30 AM" text="Wake-up Call" />
                  <TimelineItem icon={<Cup />} text="Tea With Snacks" />
                  <TimelineItem icon={<Sunrise />} text="Jeep Trekking To Sunrise Mountain" />
                  <TimelineItem icon={<Mountain />} text="Trekking By Walk To Meeshapulimala Hill Top" />
                  <TimelineItem icon={<UtensilsCrossed />} text="Break Fast & Lunch" />
                  <TimelineItem icon={<Jeep />} text="Return By Jeep To Munnar Town" />
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

export default PkgMeesh;