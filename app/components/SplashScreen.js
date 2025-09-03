// app/components/SplashScreen.js
'use client';

import { useState, useEffect } from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo/Icon */}
        <div className="relative mb-8">
          <div className="relative">
            <GraduationCap 
              size={80} 
              className="text-amber-600 mx-auto mb-4 animate-pulse"
            />
            <BookOpen 
              size={40} 
              className="text-orange-500 absolute -bottom-2 -right-2 animate-bounce"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">
            Alfredo Akbar
          </h1>
        </div>

        {/* Loading Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-white/30 rounded-full h-2 overflow-hidden shadow-inner">
            <div 
              className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Loading... {progress}%
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-amber-200/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-200/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-yellow-200/20 rounded-full blur-xl animate-pulse delay-500" />
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-amber-300/20 rounded-full blur-xl animate-pulse delay-700" />
      </div>
    </div>
  );
}
