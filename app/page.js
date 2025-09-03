// app/page.js
'use client';

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Award,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Star,
  Languages
} from 'lucide-react';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');

  // Scroll reveal effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          setCurrentSection(entry.target.id);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="scroll-reveal max-w-4xl mx-auto">
            {/* Profile Image Placeholder */}
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-elegant">
              <GraduationCap size={64} className="text-white" />
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">Alfredo Akbar</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-4">
              Guru Bahasa Arab
            </h2>

            {/* Arabic Text */}
            <p className="text-lg text-gray-500 mb-8 arabic-text">
              معلم اللغة العربية • خريج الجامعة الإسلامية بالمدينة المنورة
            </p>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Lulusan Universitas Islam Madinah dengan pengalaman mengajar di International Islamic Boarding School. 
              Spesialis dalam pengajaran Bahasa Arab, Nahwu Shorof, dan Balaghoh.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-elegant hover:shadow-xl transform hover:-translate-y-1"
              >
                Tentang Saya
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-amber-500 text-amber-600 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Hubungi Saya
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <ChevronDown 
                size={32} 
                className="mx-auto text-amber-500 cursor-pointer" 
                onClick={() => scrollToSection('stats')}
              />
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-200/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-yellow-200/20 rounded-full blur-xl animate-pulse delay-500" />
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Stat Items */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">5+</h3>
              <p className="text-gray-600">Tahun Pengalaman</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">100+</h3>
              <p className="text-gray-600">Siswa Diajar</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">2</h3>
              <p className="text-gray-600">Project Utama</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">1</h3>
              <p className="text-gray-600">Sertifikasi Internasional</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="gradient-text">Tentang Saya</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-12 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Saya adalah lulusan Universitas Islam Madinah yang memiliki passion dalam mengajarkan Bahasa Arab. 
                  Dengan pengalaman mengajar di International Islamic Boarding School Al Izzah, Batu, Malang, 
                  saya telah membantu ratusan siswa menguasai bahasa Arab dengan metode yang efektif dan menyenangkan.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Keahlian saya mencakup pengajaran Nahwu Shorof, Balaghoh, dan berbagai aspek linguistik bahasa Arab. 
                  Saya percaya bahwa setiap siswa memiliki potensi untuk menguasai bahasa Arab dengan bimbingan yang tepat.
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span className="text-gray-700">Lulusan Universitas Islam Madinah</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-gray-700">Pengalaman di International Islamic Boarding School</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span className="text-gray-700">Spesialis Nahwu Shorof dan Balaghoh</span>
                  </div>
                </div>
              </div>

              {/* Education Timeline */}
              <div className="space-y-6">
                <div className="glass-effect rounded-lg p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      <GraduationCap size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Universitas Islam Madinah</h3>
                      <p className="text-sm text-gray-600">Sarjana Bahasa Arab</p>
                    </div>
                  </div>
                </div>

                <div className="glass-effect rounded-lg p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                      <Users size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Al Izzah Boarding School</h3>
                      <p className="text-sm text-gray-600">Guru Bahasa Arab</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="gradient-text">Keahlian</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-12 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Skill Cards */}
              <div className="glass-effect rounded-lg p-8 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Languages size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Bahasa Arab Tingkat Tinggi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Menguasai bahasa Arab klasik dan modern dengan kemampuan berbicara, membaca, dan menulis yang fluent.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-8 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Nahwu Shorof</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ahli dalam tata bahasa Arab (Nahwu) dan morfologi (Shorof) untuk pemahaman teks Arab yang mendalam.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-8 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Star size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Balaghoh</h3>
                <p className="text-gray-600 leading-relaxed">
                  Spesialis dalam ilmu balaghoh (retorika Arab) untuk memahami keindahan dan makna mendalam teks Arab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="gradient-text">Portfolio</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-12 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="glass-effect rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-48 flex items-center justify-center">
                  <BookOpen size={64} className="text-amber-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Terjemahan Kitab Al Umm</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Project menerjemahkan Kitab Al Umm karya Imam Syafi'i ke dalam Bahasa Indonesia 
                    untuk memudahkan pemahaman umat Islam di Indonesia.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-500">2023 - Sekarang</span>
                    </div>
                    <div className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                      Dalam Progress
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="glass-effect rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-48 flex items-center justify-center">
                  <Users size={64} className="text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Jasa Pengajaran Bahasa Arab Intensif</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Program pengajaran bahasa Arab intensif untuk siswa dan mahasiswa 
                    dengan metode yang terbukti efektif dan menyenangkan.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-500">100+ Siswa</span>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      Aktif
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-16 text-center">
              <div className="glass-effect rounded-lg p-8 max-w-2xl mx-auto">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-600 italic mb-4">
                  "Pak Alfredo mengajar dengan sabar dan metode yang mudah dipahami. 
                  Berkat beliau, saya bisa memahami Al-Quran dengan lebih baik."
                </p>
                <p className="text-sm text-gray-500">- Alumni Al Izzah Boarding School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="gradient-text">Hubungi Saya</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-12 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">Mari Berdiskusi</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tertarik untuk belajar bahasa Arab atau ingin berkolaborasi dalam project terjemahan? 
                    Jangan ragu untuk menghubungi saya. Saya siap membantu Anda dalam perjalanan belajar bahasa Arab.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <a 
                        href="mailto:alfredoakbar@gmail.com" 
                        className="text-amber-600 hover:text-amber-700 transition-colors"
                      >
                        alfredoakbar@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                      <a 
                        href="https://wa.me/6289531473070" 
                        className="text-green-600 hover:text-green-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +62 895-3147-3070
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Lokasi</h4>
                      <p className="text-gray-600">Malang, Jawa Timur</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="glass-effect rounded-lg p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="nama@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all">
                      <option>Konsultasi Belajar Bahasa Arab</option>
                      <option>Kelas Privat</option>
                      <option>Project Terjemahan</option>
                      <option>Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tuliskan pesan Anda di sini..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-elegant hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <GraduationCap size={32} className="text-amber-400" />
              <span className="text-2xl font-bold">Alfredo Akbar</span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Guru Bahasa Arab • معلم اللغة العربية
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="mailto:alfredoakbar@gmail.com" 
                className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://wa.me/6289531473070" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024 Alfredo Akbar. All rights reserved. • جميع الحقوق محفوظة
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}