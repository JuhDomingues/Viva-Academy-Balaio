import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-18T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-600 text-white py-3 px-4 text-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-700 via-red-600 to-red-700"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 max-w-4xl mx-auto">
          {/* Alert Icon and Text */}
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 animate-pulse" />
            <span className="font-bold text-sm md:text-base">
              OFERTA TERMINA EM:
            </span>
          </div>
          
          {/* Countdown Timer */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex items-center gap-1 md:gap-2">
              <div className="bg-white text-red-600 px-2 py-1 rounded font-bold text-sm md:text-base min-w-[2rem] text-center">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <span className="font-bold text-xs md:text-sm">DIAS</span>
            </div>
            
            <div className="text-lg font-bold">:</div>
            
            <div className="flex items-center gap-1 md:gap-2">
              <div className="bg-white text-red-600 px-2 py-1 rounded font-bold text-sm md:text-base min-w-[2rem] text-center">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <span className="font-bold text-xs md:text-sm">HRS</span>
            </div>
            
            <div className="text-lg font-bold">:</div>
            
            <div className="flex items-center gap-1 md:gap-2">
              <div className="bg-white text-red-600 px-2 py-1 rounded font-bold text-sm md:text-base min-w-[2rem] text-center">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <span className="font-bold text-xs md:text-sm">MIN</span>
            </div>
            
            <div className="text-lg font-bold">:</div>
            
            <div className="flex items-center gap-1 md:gap-2">
              <div className="bg-white text-red-600 px-2 py-1 rounded font-bold text-sm md:text-base min-w-[2rem] text-center">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <span className="font-bold text-xs md:text-sm">SEG</span>
            </div>
          </div>
          
          {/* Call to action text */}
          <div className="text-xs md:text-sm font-semibold">
            Não perca esta oportunidade única!
          </div>
        </div>
      </div>
      
      {/* Animated pulse effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
    </div>
  );
};