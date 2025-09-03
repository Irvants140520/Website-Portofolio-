// app/contact/page.js
'use client';

import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  User,
  FileText,
  Calendar
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Konsultasi Belajar Bahasa Arab',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: 'Konsultasi Belajar Bahasa Arab',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "alfredoakbar@gmail.com",
      link: "mailto:alfredoakbar@gmail.com",
      color: "from-amber-400 to-orange-500",
      description: "Untuk pertanyaan umum dan kolaborasi project"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      content: "+62 895-3147-3070",
      link: "https://wa.me/6289531473070",
      color: "from-green-400 to-green-600",
      description: "Untuk konsultasi cepat dan informasi kelas"
    },
    {
      icon: MapPin,
      title: "Lokasi",
      content: "Malang, Jawa Timur",
      link: "#",
      color: "from-blue-400 to-blue-600",
      description: "Tersedia untuk kelas offline dan online"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "08:00 - 17:00 WIB",
      link: "#",
      color: "from-purple-400 to-purple-600",
      description: "Senin - Jumat (Weekend by appointment)"
    }
  ];

  const services = [
    {
      title: "Kelas Privat Bahasa Arab",
      description: "Pembelajaran one-on-one dengan kurikulum yang disesuaikan dengan kebutuhan Anda",
      features: ["Fleksible Schedule", "Materi Customized", "Progress Tracking"]
    },
    {
      title: "Kelas Group",
      description: "Pembelajaran dalam kelompok kecil (3-5 orang) untuk dynamic learning experience",
      features: ["Interactive Learning", "Peer Support", "Cost Effective"]
    },
    {
      title: "Konsultasi Project Terjemahan",
      description: "Bantuan profesional untuk project terjemahan teks Arab ke bahasa Indonesia",
      features: ["Quality Assurance", "Academic Standard", "Timely Delivery"]
    },
    {
      title: "Workshop Nahwu & Shorof",
      description: "Workshop intensif untuk menguasai tata bahasa Arab dan morfologi",
      features: ["Hands-on Practice", "Expert Guidance", "Certificate"]
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
              <span className="gradient-text">Hubungi Saya</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Mari berdiskusi tentang kebutuhan belajar bahasa Arab Anda atau 
              project kolaborasi yang ingin kita kerjakan bersama.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Informasi Kontak</h2>
              <p className="text-lg text-gray-600">
                Berbagai cara untuk terhubung dengan saya
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="scroll-reveal text-center glass-effect rounded-lg p-8 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <info.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                  
                  {info.link !== "#" ? (
                    <a 
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="block text-gray-700 hover:text-amber-600 transition-colors font-medium mb-3"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-700 font-medium mb-3">{info.content}</p>
                  )}
                  
                  <p className="text-sm text-gray-500">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Services */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="scroll-reveal">
                <div className="glass-effect rounded-lg p-8">
                  <h2 className="text-3xl font-bold mb-2 text-gray-800">Kirim Pesan</h2>
                  <p className="text-gray-600 mb-8">
                    Isi form di bawah ini dan saya akan merespon dalam 24 jam.
                  </p>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Pesan Terkirim!</h3>
                      <p className="text-gray-600">Terima kasih atas pesan Anda. Saya akan segera merespons.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User size={16} className="inline mr-1" />
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="Masukkan nama lengkap Anda"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail size={16} className="inline mr-1" />
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="nama@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FileText size={16} className="inline mr-1" />
                          Subjek
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        >
                          <option>Konsultasi Belajar Bahasa Arab</option>
                          <option>Kelas Privat</option>
                          <option>Kelas Group</option>
                          <option>Project Terjemahan</option>
                          <option>Workshop Nahwu & Shorof</option>
                          <option>Kolaborasi Project</option>
                          <option>Lainnya</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <MessageCircle size={16} className="inline mr-1" />
                          Pesan
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                          placeholder="Ceritakan kebutuhan atau pertanyaan Anda..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-elegant hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                      >
                        <Send size={20} />
                        <span>Kirim Pesan</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Services */}
              <div className="scroll-reveal">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Layanan Yang Tersedia</h2>
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <div 
                      key={index}
                      className="glass-effect rounded-lg p-6 group hover:shadow-xl transition-all duration-300"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Kontak Cepat</h3>
                  
                  <a
                    href="https://wa.me/6289531473070?text=Assalamu'alaikum%20Pak%20Alfredo,%20saya%20tertarik%20untuk%20belajar%20bahasa%20Arab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 glass-effect rounded-lg hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">WhatsApp Langsung</p>
                      <p className="text-sm text-gray-600">Chat untuk konsultasi cepat</p>
                    </div>
                  </a>

                  <a
                    href="mailto:alfredoakbar@gmail.com?subject=Konsultasi%20Belajar%20Bahasa%20Arab"
                    className="flex items-center space-x-3 p-4 glass-effect rounded-lg hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email Langsung</p>
                      <p className="text-sm text-gray-600">Untuk pertanyaan detail</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Pertanyaan Umum</h2>
              <p className="text-lg text-gray-600">
                Jawaban untuk pertanyaan yang sering diajukan
              </p>
            </div>

            <div className="space-y-6">
              <div className="scroll-reveal glass-effect rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Berapa lama waktu yang dibutuhkan untuk menguasai bahasa Arab?</h3>
                <p className="text-gray-600">
                  Waktu yang dibutuhkan bervariasi tergantung tingkat dedikasi dan tujuan pembelajaran. 
                  Untuk dasar conversational, biasanya 6-12 bulan. Untuk tingkat mahir, 2-3 tahun dengan pembelajaran konsisten.
                </p>
              </div>

              <div className="scroll-reveal glass-effect rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Apakah tersedia kelas online?</h3>
                <p className="text-gray-600">
                  Ya, saya menyediakan kelas online melalui berbagai platform video conferencing. 
                  Kelas online sama efektifnya dengan kelas offline dengan materi dan metode yang sama.
                </p>
              </div>

              <div className="scroll-reveal glass-effect rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Bagaimana sistem pembayaran untuk kelas privat?</h3>
                <p className="text-gray-600">
                  Pembayaran dapat dilakukan per session atau paket bulanan. 
                  Silakan hubungi saya untuk detail harga dan paket yang sesuai dengan kebutuhan Anda.
                </p>
              </div>

              <div className="scroll-reveal glass-effect rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Apakah menyediakan materi pembelajaran?</h3>
                <p className="text-gray-600">
                  Ya, semua materi pembelajaran disediakan termasuk modul, latihan soal, dan referensi tambahan. 
                  Materi disesuaikan dengan tingkat dan kebutuhan masing-masing siswa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Mari Mulai Perjalanan Belajar</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Jangan tunda lagi keinginan Anda untuk menguasai bahasa Arab. 
              Hubungi saya hari ini dan mulai perjalanan pembelajaran yang akan mengubah cara Anda memahami Islam.
            </p>
            
            <div className="mb-8 p-6 glass-effect rounded-lg max-w-2xl mx-auto">
              <p className="text-2xl font-bold arabic-text text-gray-800 mb-3">
                العلم نور والجهل ظلام
              </p>
              <p className="text-gray-600 italic">
                "Ilmu adalah cahaya dan kebodohan adalah kegelapan"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6289531473070?text=Assalamu'alaikum%20Pak%20Alfredo,%20saya%20tertarik%20untuk%20belajar%20bahasa%20Arab"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-elegant hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>WhatsApp Sekarang</span>
              </a>
              <a
                href="mailto:alfredoakbar@gmail.com?subject=Konsultasi%20Belajar%20Bahasa%20Arab"
                className="px-8 py-4 border-2 border-amber-500 text-amber-600 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <Mail size={20} />
                <span>Kirim Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}