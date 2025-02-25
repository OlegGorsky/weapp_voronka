import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const interval = 10;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        onComplete();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center p-8">
      <div className="w-full max-w-3xl text-center">
        <div className="mb-16 relative">
          <div className="relative w-[120px] h-[120px] sm:w-[144px] sm:h-[144px] mx-auto scale-[1.25] transform-gpu">
            <img
              src="https://files.salebot.pro/uploads/file_item/file/44501/photo_2024-11-27_00-36-53.jpg"
              alt="Expert"
              className="w-full h-full rounded-full object-cover border-4 border-blue-500 shadow-lg"
              style={{
                objectPosition: '50% 18%'
              }}
            />
          </div>
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-sm shadow-lg">
            Эксперт
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mt-20">
          Анна Малогорская
        </h1>
        <div className="relative h-1.5 bg-gray-800 rounded-full overflow-hidden mt-10 mx-auto max-w-xs">
          <div 
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-100 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};