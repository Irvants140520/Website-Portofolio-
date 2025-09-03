// app/skills/page.js
'use client';

import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import { 
  Languages, 
  BookOpen, 
  Star, 
  FileText, 
  Users, 
  Lightbulb,
  CheckCircle,
  Award
} from 'lucide-react';

export default function Skills() {
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

  const skills = [
    {
      title: "Bahasa Arab Tingkat Tinggi",
      icon: Languages,
      color: "from-amber-400 to-orange-500",
      level: 95,
      description: "Menguasai bahasa Arab klasik dan modern dengan kemampuan berbicara, membaca, dan menulis yang fluent.",
      details: [
        "Conversational Arabic (Fusha & Amiyah)",
        "Arabic Literature Analysis",
        "Classical Text Comprehension",
        "Modern Arabic Writing"
      ]
    },
    {
      title: "Nahwu (Tata Bahasa Arab)",
      icon: BookOpen,
      color: "from-blue-400 to-blue-600",
      level: 90,
      description: "Ahli dalam tata bahasa Arab (Nahwu) untuk pemahaman struktur kalimat dan analisis tekstual.",
      details: [
        "I'rob (Analisis Gramatikal)",
        "Qawa'id Nahwiyah",
        "Tahlil Nahwi",
        "Mushkilat Nahwiyah"
      ]
    },
    {
      title: "Shorof (Morfologi Arab)",
      icon: FileText,
      color: "from-green-400 to-green-600",
      level: 88,
      description: "Spesialis dalam ilmu shorof untuk memahami perubahan bentuk kata dan derivasi dalam bahasa Arab.",
      details: [
        "Tashrif Istilahi & Lughawi",
        "Mizan Shorof",
        "Qawa'id Shorof",
        "Abniyah wa Siyagh"
      ]
    },
    {
      title: "Balaghoh (Retorika Arab)",
      icon: Star,
      color: "from-purple-400 to-purple-600",
      level: 85,
      description: "Spesialis dalam ilmu balaghoh untuk memahami keindahan dan makna mendalam teks Arab.",
      details: [
        "Ma'ani (Ilmu Makna)",
        "Bayan (Ilmu Bayani)",
        "Badi' (Ilmu Badi')",
        "Tafsir Balaghi"
      ]
    }
  ];

  const teachingSkills = [
    {
      title: "Metodologi Pengajaran",
      icon: Users,
      items: [
        "Pembelajaran Interaktif",
        "Pendekatan Komunikatif",
        "Blended Learning",
        "Assessment & Evaluation"
      ]
    },
    {
      title: "Pengembangan Kurikulum",
      icon: Lightbulb,
      items: [
        "Desain Pembelajaran",
        "Materi Pengajaran",
        "Program Intensif",
        "Evaluasi Kurikulum"
      ]
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
              <span className="gradient-text">Keahlian Saya</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Keahlian yang telah saya kembangkan selama bertahun-tahun dalam bidang bahasa Arab 
              dan pengajaran untuk memberikan pendidikan terbaik.
            </p>
          </div>
        </div>
      </section>

      {/* Core Skills */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Keahlian Utama</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Spesialisasi dalam berbagai aspek bahasa Arab yang saling mendukung untuk pemahaman yang komprehensif.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="scroll-reveal glass-effect rounded-lg p-8 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <skill.icon size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800">{skill.title}</h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3">Spesialisasi:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {skill.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Skills */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Kemampuan Mengajar</h2>
              <p className="text-lg text-gray-600">
                Keterampilan pedagogis yang mendukung proses pembelajaran yang efektif dan menyenangkan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teachingSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="scroll-reveal glass-effect rounded-lg p-8 group hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <skill.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{skill.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {skill.items.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Sertifikasi & Pencapaian</h2>
              <p className="text-lg text-gray-600">
                Pengakuan formal atas keahlian dan dedikasi dalam bidang pendidikan bahasa Arab.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="scroll-reveal glass-effect rounded-lg p-8 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Ijazah Universitas Islam Madinah</h3>
                <p className="text-gray-600 mb-4">
                  Sertifikasi resmi dari salah satu universitas Islam terkemuka di dunia dalam bidang bahasa Arab.
                </p>
                <div className="text-sm text-gray-500">2018 - 2022</div>
              </div>

              <div className="scroll-reveal glass-effect rounded-lg p-8 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Pengalaman Mengajar Profesional</h3>
                <p className="text-gray-600 mb-4">
                  Pengalaman mengajar di International Islamic Boarding School dengan ratusan siswa.
                </p>
                <div className="text-sm text-gray-500">2022 - Present</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arabic Quote Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <p className="text-3xl font-bold arabic-text text-gray-800 mb-4">
                العربية لسان القرآن وطريق الإيمان
              </p>
              <p className="text-lg text-gray-600 italic">
                "Bahasa Arab adalah lisan Al-Quran dan jalan menuju keimanan"
              </p>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Setiap keterampilan yang saya miliki ditujukan untuk satu tujuan: 
              membantu umat Islam memahami kitab suci mereka dengan lebih baik dan mendalam.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Siap Belajar Bahasa Arab?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Dengan keahlian dan pengalaman yang saya miliki, saya siap membantu Anda 
              menguasai bahasa Arab dari tingkat dasar hingga mahir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-elegant hover:shadow-xl transform hover:-translate-y-1"
              >
                Mulai Belajar
              </a>
              <a
                href="/portfolio"
                className="px-8 py-4 border-2 border-amber-500 text-amber-600 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Lihat Karya Saya
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}