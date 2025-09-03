// app/portfolio/page.js
'use client';

import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Clock, 
  Star, 
  Download, 
  ExternalLink,
  FileText,
  GraduationCap,
  Award,
  CheckCircle,
  Quote
} from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');

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

  const projects = [
    {
      id: 1,
      title: "Terjemahan Kitab Al Umm",
      subtitle: "Karya Imam Syafi'i",
      category: "Translation",
      status: "Dalam Progress",
      statusColor: "bg-amber-100 text-amber-700",
      image: BookOpen,
      imageColor: "from-amber-400 to-orange-500",
      description: "Project ambisius menerjemahkan Kitab Al Umm, salah satu karya monumental Imam Syafi'i dalam bidang fiqh, ke dalam Bahasa Indonesia. Terjemahan ini bertujuan untuk memudahkan umat Islam di Indonesia memahami metodologi dan pemikiran Imam Syafi'i.",
      details: [
        "Target: 8 jilid lengkap",
        "Progress: 3 jilid telah diselesaikan",
        "Metode: Terjemahan literal dengan catatan kaki",
        "Review: Panel ulama dan akademisi"
      ],
      timeline: "2023 - 2025 (Target)",
      impact: "Memudahkan akses terhadap literatur fiqh klasik",
      features: [
        "Terjemahan akurat dengan bahasa Indonesia yang mudah dipahami",
        "Catatan kaki untuk penjelasan istilah teknis",
        "Indeks topik untuk memudahkan pencarian",
        "Review komprehensif dari para ulama"
      ]
    },
    {
      id: 2,
      title: "Jasa Pengajaran Bahasa Arab Intensif",
      subtitle: "Program Pembelajaran Komprehensif",
      category: "Education",
      status: "Aktif",
      statusColor: "bg-green-100 text-green-700",
      image: Users,
      imageColor: "from-blue-400 to-blue-600",
      description: "Program pengajaran bahasa Arab intensif yang dirancang khusus untuk siswa dan mahasiswa dengan berbagai tingkat kemampuan. Program ini menggunakan metode komunikatif yang terbukti efektif dalam pembelajaran bahasa Arab.",
      details: [
        "Siswa Aktif: 100+ siswa",
        "Program: Dasar, Menengah, Lanjut",
        "Durasi: 6-12 bulan per level",
        "Metode: Komunikatif & Interaktif"
      ],
      timeline: "2022 - Sekarang",
      impact: "Meningkatkan kemampuan bahasa Arab siswa secara signifikan",
      features: [
        "Kurikulum tersusun secara sistematis",
        "Materi pembelajaran yang beragam dan menarik",
        "Evaluasi berkala untuk memantau progress",
        "Sertifikat completion untuk setiap level"
      ]
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: "100+",
      label: "Siswa Telah Diajar",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: BookOpen,
      number: "3",
      label: "Jilid Telah Diterjemahkan",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Clock,
      number: "5+",
      label: "Tahun Pengalaman",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Award,
      number: "95%",
      label: "Tingkat Kepuasan Siswa",
      color: "from-amber-400 to-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "Ahmad Ridwan",
      role: "Mahasiswa",
      content: "Pak Alfredo mengajar dengan sabar dan metode yang sangat mudah dipahami. Dalam 6 bulan, kemampuan bahasa Arab saya meningkat drastis.",
      rating: 5,
      image: GraduationCap
    },
    {
      name: "Siti Khadijah",
      role: "Alumni Al Izzah",
      content: "Berkat pembelajaran dari Pak Alfredo, saya bisa memahami Al-Quran dengan lebih baik dan mendalam. Terima kasih atas ilmu yang bermanfaat.",
      rating: 5,
      image: Users
    },
    {
      name: "Muhammad Yusuf",
      role: "Santri",
      content: "Metode pengajaran yang interaktif membuat belajar bahasa Arab menjadi menyenangkan. Nahwu dan Shorof tidak lagi terasa sulit.",
      rating: 5,
      image: BookOpen
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Karya dan kontribusi saya dalam dunia pendidikan bahasa Arab dan 
              pelestarian khazanah literatur Islam.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="text-center group glass-effect rounded-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <achievement.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{achievement.number}</h3>
                  <p className="text-gray-600">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Projects */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Project Utama</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Karya-karya yang mencerminkan dedikasi saya dalam mengembangkan 
                pendidikan bahasa Arab dan literatur Islam.
              </p>
            </div>

            <div className="space-y-12">
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  className={`scroll-reveal glass-effect rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 ${
                    index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    {/* Image Section */}
                    <div className="relative">
                      <div className={`h-64 bg-gradient-to-br ${project.imageColor} rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform`}>
                        <project.image size={80} className="text-white" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${project.statusColor}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm text-amber-600 font-medium">{project.category}</span>
                          <div className="w-1 h-1 bg-gray-400 rounded-full" />
                          <span className="text-sm text-gray-500">{project.timeline}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                        <p className="text-lg text-gray-600 font-medium mb-4">{project.subtitle}</p>
                      </div>

                      <p className="text-gray-600 leading-relaxed">{project.description}</p>

                      {/* Key Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{detail}</span>
                          </div>
                        ))}
                      </div>

                      {/* Impact */}
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-amber-800 mb-1">Dampak:</h4>
                        <p className="text-sm text-amber-700">{project.impact}</p>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-3">Fitur Utama:</h4>
                        <div className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Testimoni</h2>
              <p className="text-lg text-gray-600">
                Apa kata mereka yang telah belajar bersama saya
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="scroll-reveal glass-effect rounded-lg p-8 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote size={32} className="text-amber-500" />
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                      <testimonial.image size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process & Methodology */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Metodologi Kerja</h2>
              <p className="text-lg text-gray-600">
                Pendekatan sistematis yang saya gunakan dalam setiap project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="scroll-reveal text-center glass-effect rounded-lg p-6 group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Analisis Kebutuhan</h3>
                <p className="text-sm text-gray-600">
                  Memahami kebutuhan spesifik siswa atau project untuk menentukan pendekatan yang tepat.
                </p>
              </div>

              <div className="scroll-reveal text-center glass-effect rounded-lg p-6 group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Perencanaan</h3>
                <p className="text-sm text-gray-600">
                  Menyusun rencana pembelajaran atau project yang sistematis dan terukur.
                </p>
              </div>

              <div className="scroll-reveal text-center glass-effect rounded-lg p-6 group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Implementasi</h3>
                <p className="text-sm text-gray-600">
                  Melaksanakan rencana dengan metode yang telah terbukti efektif dan adaptif.
                </p>
              </div>

              <div className="scroll-reveal text-center glass-effect rounded-lg p-6 group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Evaluasi</h3>
                <p className="text-sm text-gray-600">
                  Mengevaluasi hasil dan melakukan perbaikan berkelanjutan untuk hasil optimal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Project Mendatang</h2>
              <p className="text-lg text-gray-600">
                Rencana pengembangan untuk masa depan pendidikan bahasa Arab
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="scroll-reveal glass-effect rounded-lg p-8 group hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center">
                    <FileText size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Platform Pembelajaran Online</h3>
                    <p className="text-sm text-gray-500">Q2 2024</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Pengembangan platform digital untuk pembelajaran bahasa Arab yang interaktif 
                  dengan fitur gamifikasi dan tracking progress.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-500">Dalam Perencanaan</span>
                </div>
              </div>

              <div className="scroll-reveal glass-effect rounded-lg p-8 group hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center">
                    <BookOpen size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Buku Panduan Nahwu Modern</h3>
                    <p className="text-sm text-gray-500">Q3 2024</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Penyusunan buku panduan Nahwu dengan pendekatan modern dan contoh-contoh 
                  kontemporer untuk memudahkan pemahaman.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-500">Dalam Perencanaan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Tertarik Berkolaborasi?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Jika Anda memiliki project terjemahan, ingin belajar bahasa Arab, 
              atau tertarik untuk berkolaborasi dalam pengembangan materi pembelajaran, 
              jangan ragu untuk menghubungi saya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold hover:from-amber-600 hover:to-orange-500 text-white rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-elegant hover:shadow-xl transform hover:-translate-y-1"
              >
                Diskusi Project
              </a>
              <a
                href="/skills"
                className="px-8 py-4 border-2 border-amber-500 text-amber-600 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Lihat Keahlian
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}