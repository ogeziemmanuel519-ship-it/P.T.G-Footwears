import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f5f5f0' }}>
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1
              className="text-3xl mb-3"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}
            >
              Get In Touch
            </h1>
            <p className="text-sm" style={{ color: '#666666' }}>
              We'd love to hear from you. Reach out for wholesale orders and inquiries.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {/* Phone Card */}
            <div
              className="bg-white p-8 text-center transition-all duration-300"
              style={{ border: '1px solid #e0e0d8' }}
            >
              <div className="flex justify-center mb-4">
                <Phone size={28} style={{ color: '#c9a96e' }} />
              </div>
              <h3 className="text-sm font-semibold mb-1" style={{ color: '#1a1a1a' }}>
                Phone
              </h3>
              <p className="text-lg font-medium" style={{ color: '#333333' }}>
                08036993978
              </p>
            </div>

            {/* Email Card */}
            <div
              className="bg-white p-8 text-center transition-all duration-300"
              style={{ border: '1px solid #e0e0d8' }}
            >
              <div className="flex justify-center mb-4">
                <Mail size={28} style={{ color: '#c9a96e' }} />
              </div>
              <h3 className="text-sm font-semibold mb-1" style={{ color: '#1a1a1a' }}>
                Email
              </h3>
              <p className="text-sm font-medium break-all" style={{ color: '#333333' }}>
                Mamadanielfootwears@gmail.com
              </p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center">
            <a
              href="https://wa.me/2348036993978"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-[1.5px] text-white transition-opacity duration-200 hover:opacity-85"
              style={{ backgroundColor: '#25d366', padding: '14px 32px' }}
            >
              <MessageCircle size={18} />
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
