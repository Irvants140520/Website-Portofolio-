// app/layout.js
'use client';

import { Inter, Amiri } from 'next/font/google';
import './globals.css';
import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';

const inter = Inter({ subsets: ['latin'] });
const amiri = Amiri({ subsets: ['arabic', 'latin'], weight: ['400', '700'] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <html lang="id">
        <body className={inter.className}>
          <SplashScreen />
        </body>
      </html>
    );
  }

  return (
    <html lang="id">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
          {children}
        </div>
      </body>
    </html>
  );
}