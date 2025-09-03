// app/about/page.js
'use client';

import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import { GraduationCap, Users, BookOpen, Award, Calendar, MapPin } from 'lucide-react';

export default function About() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Tentang Saya</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Perjalanan saya dalam dunia pendidikan bahasa Arab dan dedikasi untuk 
              menyebarkan ilmu kepada generasi muda.
            </p>
          </div>
        </div>
      </section>

      {/* Background & Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Personal Story */}
            <div className="scroll-reveal mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Latar Belakang</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Perjalanan saya dimulai dengan ketertarikan mendalam terhadap bahasa Arab dan 
                      keinginan untuk memahami Al-Quran secara langsung. Hal ini mendorong saya untuk 
                      menempuh pendidikan di Universitas Islam Madinah, salah satu institusi terkemuka 
                      dalam bidang studi Islam dan bahasa Arab.
                    </p>
                    
                    <p>
                      Selama masa studi, saya tidak hanya mempelajari aspek linguistik bahasa Arab, 
                      tetapi juga mendalami berbagai disiplin ilmu seperti Nahwu, Shorof, dan Balaghoh 
                      yang merupakan fondasi penting dalam memahami teks-teks Arab klasik.
                    </p>
                    
                    <p>
                      Pengalaman mengajar di International Islamic Boarding School Al Izzah memberikan 
                      saya wawasan praktis tentang metode pengajaran yang efektif dan pemahaman mendalam 
                      tentang tantangan yang dihadapi siswa dalam mempelajari bahasa Arab.
                    </p>
                  </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Mari Belajar Bersama</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Jika Anda tertarik untuk mempelajari bahasa Arab atau ingin berkolaborasi 
              dalam project terjemahan, saya siap membantu Anda dalam perjalanan ini.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-elegant hover:shadow-xl transform hover:-translate-y-1"
              >
                Hubungi Saya
              </a>
              <a
                href="/portfolio"
                className="px-8 py-4 border-2 border-amber-500 text-amber-600 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Lihat Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
                </div>
                
                <div className="order-1 md:order-2">
                  <div className="relative">
                    <div className="w-80 h-80 mx-auto bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-elegant">
                      <GraduationCap size={120} className="text-white" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                      <BookOpen size={32} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="scroll-reveal mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Perjalanan Pendidikan</h2>
              <div className="space-y-8">
                {/* Timeline Item 1 */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <GraduationCap size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="glass-effect rounded-lg p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">Universitas Islam Madinah</h3>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <Calendar size={16} />
                          <span className="text-sm">2018 - 2022</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">
                        <strong>Sarjana Bahasa Arab</strong> - Fokus pada linguistik Arab, Nahwu Shorof, dan studi Al-Quran
                      </p>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <MapPin size={16} />
                        <span className="text-sm">Madinah, Arab Saudi</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <Users size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="glass-effect rounded-lg p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">International Islamic Boarding School Al Izzah</h3>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <Calendar size={16} />
                          <span className="text-sm">2022 - 2024</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">
                        <strong>Guru Bahasa Arab</strong> - Mengajar siswa tingkat menengah dan atas
                      </p>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <MapPin size={16} />
                        <span className="text-sm">Batu, Malang, Jawa Timur</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy & Approach */}
            <div className="scroll-reveal">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Filosofi Mengajar</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center glass-effect rounded-lg p-8 group hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BookOpen size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Pembelajaran Mendalam</h3>
                  <p className="text-gray-600">
                    Tidak hanya menghafalkan, tetapi memahami struktur dan makna bahasa Arab secara menyeluruh.
                  </p>
                </div>

                <div className="text-center glass-effect rounded-lg p-8 group hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Pendekatan Personal</h3>
                  <p className="text-gray-600">
                    Setiap siswa memiliki gaya belajar yang unik. Saya menyesuaikan metode mengajar dengan kebutuhan individual.
                  </p>
                </div>

                <div className="text-center glass-effect rounded-lg p-8 group hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Aplikasi Praktis</h3>
                  <p className="text-gray-600">
                    Menghubungkan teori dengan praktik nyata, terutama dalam memahami teks-teks keagamaan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Vision */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Visi & Misi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-effect rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4 text-amber-600">Visi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi kontributor utama dalam menyebarkan pemahaman bahasa Arab yang mendalam 
                  di Indonesia, sehingga umat Islam dapat memahami Al-Quran dan Hadits secara langsung 
                  tanpa bergantung pada terjemahan.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4 text-orange-600">Misi</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Mengajarkan bahasa Arab dengan metode yang efektif dan menyenangkan</li>
                  <li>• Menerjemahkan karya-karya klasik Islam ke bahasa Indonesia</li>
                  <li>• Mengembangkan materi pembelajaran yang mudah dipahami</li>
                  <li>• Membangun generasi yang paham terhadap teks-teks Arab</li>
                </ul>
              </div>
            </div>