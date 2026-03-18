import React from "react";
import Link from "next/link";

export default function Impressum() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-[#18181b] to-[#23272f] relative overflow-x-hidden font-sans">
      {/* Background Image with Aura Effect */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/background.png)',
            opacity: '0.40'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-radial from-[#ff4d4d]/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-20 backdrop-blur-md bg-black/60 border-white/10 border-b">
        <nav className="flex items-center justify-between px-12 py-4">
          <div className="flex items-center ml-[-10px]">
            <Link href="/">
              <img src="/saray.png" alt="Saray Logo" className="h-20 w-auto logo-hover" />
            </Link>
          </div>
          <div className="flex gap-6 mr-10 items-center">
            <a
              href="tel:+4968317613367"
              className="text-white hover:text-[#ff4d4d] transition-colors duration-200"
              aria-label="Telefon"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </a>
            <a
              href="mailto:sarayimbiss.kumar@gmail.com"
              className="text-white hover:text-[#ff4d4d] transition-colors duration-200"
              aria-label="E-Mail"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 pt-32 pb-20">
        <div className="max-w-4xl w-full">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">
              Impressum
            </h1>

            <div className="space-y-8 text-white/90">
              {/* Angaben gemäß § 5 DDG */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Angaben gemäß § 5 DDG</h2>
                <div className="space-y-1">
                  <p>Veluppillai Ratnakumar</p>
                  <p>Imbiss Saray</p>
                  <p>Sonnenstraße 11</p>
                  <p>66740 Saarlouis</p>
                </div>
              </section>

              {/* Kontakt */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Kontakt</h2>
                <div className="space-y-2">
                  <p>
                    <strong>Telefon:</strong>{" "}
                    <a 
                      href="tel:+4968317613367" 
                      className="text-[#ff4d4d] hover:text-[#ff6b6b] transition-colors"
                    >
                      06831 7613367
                    </a>
                  </p>
                  <p>
                    <strong>E-Mail:</strong>{" "}
                    <a 
                      href="mailto:sarayimbiss.kumar@gmail.com" 
                      className="text-[#ff4d4d] hover:text-[#ff6b6b] transition-colors"
                    >
                      sarayimbiss.kumar@gmail.com
                    </a>
                  </p>
                </div>
              </section>

              {/* Zuständige Aufsichtsbehörde */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Zuständige Aufsichtsbehörde</h2>
                <div className="space-y-1">
                  <p>Kreisstadt Saarlouis – Ordnungsamt</p>
                  <p>Großer Markt 1</p>
                  <p>66740 Saarlouis</p>
                </div>
              </section>

              {/* Verbraucherstreitbeilegung */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                <p className="text-sm leading-relaxed">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>
            </div>

            {/* Back Button */}
            <div className="mt-12 text-center">
              <Link 
                href="/"
                className="inline-block px-8 py-3 rounded-full text-black font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 btn-glow-red btn-gradient-animate cursor-pointer"
              >
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-white/10 bg-black/70 border-t py-6 mt-auto z-10 relative">
        <div className="max-w-5xl mx-auto px-6 text-center text-white/60 text-sm">
          <div className="flex justify-center gap-6 mb-2">
            <Link href="/impressum" className="hover:text-[#ff4d4d] transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-[#ff4d4d] transition-colors">
              Datenschutz
            </Link>
          </div>
          © {year} Saray – Döner, Pizza & Pasta
        </div>
      </footer>

      {/* Styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
        }
        .btn-glow-red {
          box-shadow:
            0 0 4px rgba(255,77,77,0.4),
            0 0 8px rgba(255,128,128,0.3);
          transition: all 0.3s ease;
        }
        .btn-glow-red:hover {
          box-shadow:
            0 0 6px rgba(255,77,77,0.6),
            0 0 12px rgba(255,128,128,0.4);
        }
        .logo-hover {
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        .logo-hover:hover {
          transform: scale(1.1) rotate(-2deg);
        }
        .btn-gradient-animate {
          background-size: 200% auto;
          background-image: linear-gradient(to right, #ff4d4d 0%, #ffffff 50%, #ff4d4d 100%);
          transition: background-position 0.5s ease, transform 0.3s ease;
        }
        .btn-gradient-animate:hover {
          background-position: right center;
          box-shadow: 0 0 6px rgba(255,77,77,0.5), 0 0 12px rgba(255,128,128,0.4);
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
