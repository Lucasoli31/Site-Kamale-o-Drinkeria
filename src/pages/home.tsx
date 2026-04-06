import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuCategories, type MenuItem } from "@/lib/data";
import { MapPin, Instagram, X, ChevronRight, ChevronLeft } from "lucide-react";

const getAssetUrl = (path: string) => {
  return `${import.meta.env.BASE_URL}${path}`.replace("//", "/");
};

export default function Home() {
  const [activeSection, setActiveSection] = useState(menuCategories[0].id);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showNavHint, setShowNavHint] = useState(true);
  const [showNavLeftHint, setShowNavLeftHint] = useState(false);
  const navScrollRef = useRef<HTMLDivElement>(null);

  const checkNavHint = () => {
    const el = navScrollRef.current;
    if (!el) return;
    const hasMoreRight = el.scrollLeft < el.scrollWidth - el.clientWidth - 4;
    const hasMoreLeft = el.scrollLeft > 4;
    setShowNavHint(hasMoreRight);
    setShowNavLeftHint(hasMoreLeft);
  };

  useEffect(() => {
    const el = navScrollRef.current;
    if (!el) return;
    checkNavHint();
    el.addEventListener("scroll", checkNavHint);
    window.addEventListener("resize", checkNavHint);
    return () => {
      el.removeEventListener("scroll", checkNavHint);
      window.removeEventListener("resize", checkNavHint);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = menuCategories.map((c) => document.getElementById(c.id));
      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedItem]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 120, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen w-full selection:bg-primary selection:text-black relative">

      {/* Background watermark logos */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img src={getAssetUrl("logo.png")} className="absolute opacity-[0.05] w-80 -top-16 -left-16 rotate-[-20deg] grayscale" alt="" />
        <img src={getAssetUrl("logo.png")} className="absolute opacity-[0.05] w-56 top-1/4 right-[-30px] rotate-[12deg] grayscale" alt="" />
        <img src={getAssetUrl("logo.png")} className="absolute opacity-[0.05] w-64 top-[55%] left-[10%] rotate-[5deg] grayscale" alt="" />
        <img src={getAssetUrl("logo.png")} className="absolute opacity-[0.05] w-48 top-[70%] right-[15%] rotate-[-10deg] grayscale" alt="" />
        <img src={getAssetUrl("logo.png")} className="absolute opacity-[0.05] w-72 bottom-10 -right-8 rotate-[18deg] grayscale" alt="" />
        <img src={getAssetUrl("logo.png")} className="absolute opacity-[0.04] w-40 top-[40%] left-[45%] rotate-[-5deg] grayscale" alt="" />
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden z-10">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${getAssetUrl("hero-bg.png")})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-transparent to-transparent" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-4xl mx-auto pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={getAssetUrl("logo.png")}
              alt="Kamaleão Drinkeria"
              className="w-48 md:w-64 lg:w-80 h-auto drop-shadow-2xl mb-6"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white mb-4 tracking-wider leading-tight"
          >
            <span className="block text-stroke-primary opacity-50 -mb-4 ml-2">A NOITE</span>
            COMEÇA <span className="text-accent neon-glow-primary">AQUI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl font-medium tracking-wide mt-4"
          >
            Mais que drinks, uma experiência.
          </motion.p>
        </div>
      </section>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-10 flex flex-col items-center gap-2 py-4 bg-background"
      >
        <span className="text-xs uppercase font-bold tracking-[0.3em] text-muted-foreground">Menu</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </motion.div>

      {/* Sticky Navigation */}
      <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3 border-b border-white/5 shadow-2xl' : 'py-4 bg-transparent'}`}>
        <div className="container mx-auto px-4 relative">
          <div
            ref={navScrollRef}
            className="flex overflow-x-auto hide-scrollbar gap-2 md:gap-4 snap-x pb-2"
          >
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`snap-start whitespace-nowrap px-5 py-2 text-xl md:text-2xl uppercase tracking-wider transition-all duration-300 font-display
                  ${activeSection === category.id
                    ? 'text-black bg-primary skew-x-[-10deg]'
                    : 'text-muted-foreground hover:text-white hover:bg-white/5 skew-x-[-10deg]'
                  }
                `}
              >
                <div className="skew-x-[10deg] flex items-center gap-2">
                  {category.isStar && <span className="text-accent">★</span>}
                  {category.title}
                </div>
              </button>
            ))}
          </div>

          {/* Mobile scroll hint arrow - LEFT */}
          <AnimatePresence>
            {showNavLeftHint && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden absolute left-0 top-0 bottom-2 flex items-center pl-1"
              >
                <div
                  className="bg-gradient-to-r from-background via-background/80 to-transparent pr-6 pl-1 h-full flex items-center cursor-pointer"
                  onClick={() => {
                    const el = navScrollRef.current;
                    if (el) el.scrollBy({ left: -180, behavior: "smooth" });
                  }}
                >
                  <motion.div
                    animate={{ x: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    className="bg-primary/90 rounded-full p-1"
                  >
                    <ChevronLeft className="w-4 h-4 text-black" />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile scroll hint arrow - RIGHT */}
          <AnimatePresence>
            {showNavHint && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden absolute right-0 top-0 bottom-2 flex items-center pr-1"
              >
                <div
                  className="bg-gradient-to-l from-background via-background/80 to-transparent pl-6 pr-1 h-full flex items-center cursor-pointer"
                  onClick={() => {
                    const el = navScrollRef.current;
                    if (el) el.scrollBy({ left: 180, behavior: "smooth" });
                  }}
                >
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    className="bg-primary/90 rounded-full p-1"
                  >
                    <ChevronRight className="w-4 h-4 text-black" />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Menu Content */}
      <main className="relative z-10 container mx-auto px-4 py-16 md:py-24 space-y-24">
        {menuCategories.map((category) => (
          <motion.section
            key={category.id}
            id={category.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-32"
          >
            <div className="mb-12 flex items-center gap-6">
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-wide text-white">
                {category.title}
              </h2>
              <div className="h-[2px] flex-grow bg-gradient-to-r from-border to-transparent" />
            </div>

            <div className={`grid gap-4 md:gap-6 ${category.isStar ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
              {category.items.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, x: 5 }}
                  onClick={() => (item.description || item.image) && setSelectedItem(item)}
                  className={`group relative p-6 flex flex-col justify-center bg-white/[0.07] hover:bg-white/[0.12] transition-colors ${(item.description || item.image) ? 'cursor-pointer' : ''}`}
                >
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex justify-between items-start gap-4 mb-1">
                    <h3 className="text-2xl md:text-3xl font-display uppercase tracking-wide leading-none text-white/85 group-hover:text-white transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-xl md:text-2xl font-bold font-mono text-white/90 whitespace-nowrap">
                      R$ {item.price.toFixed(2)}
                    </div>
                  </div>

                  {item.description && (
                    <p className="text-sm text-white/45 mt-2 leading-snug line-clamp-2">
                      {item.description}
                    </p>
                  )}

                  {(item.description || item.image) && (
                    <span className="mt-3 text-xs uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors">
                      ver detalhes →
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black py-16 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,theme(colors.primary)_0%,transparent_100%)]" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <img
            src={getAssetUrl("logo.png")}
            alt="Kamaleão Drinkeria"
            className="w-32 h-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 mb-8"
          />
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <a href="https://instagram.com/kamaleaodrinkeria" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group">
              <Instagram className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              <span className="font-medium tracking-wider uppercase">@kamaleaodrinkeria</span>
            </a>
            <div className="hidden md:block w-1 h-1 bg-border rounded-full" />
            <a href="https://www.google.com/maps/search/?api=1&query=Rua+Jorge+Street,96+Jardim+Gumercindo+Guarulhos+SP" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
              <MapPin className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              <span className="font-medium tracking-wider uppercase">Rua Jorge Street, 96 — Guarulhos/SP</span>
            </a>
          </div>
          <p className="text-sm text-white/30 font-mono">
            &copy; {new Date().getFullYear()} Kamaleão Drinkeria. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

      {/* Item Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#111] border border-white/10 overflow-hidden"
            >
              {/* Photo area */}
              {selectedItem.image ? (
                <div className="w-full bg-black flex items-center justify-center" style={{ minHeight: "220px", maxHeight: "320px" }}>
                  <img
                    src={getAssetUrl(selectedItem.image)}
                    alt={selectedItem.name}
                    className="w-full h-full object-contain"
                    style={{ maxHeight: "320px" }}
                  />
                </div>
              ) : (
                <div className="w-full h-40 flex items-center justify-center bg-white/[0.04]">
                  <img src={getAssetUrl("logo.png")} alt="" className="w-24 h-auto opacity-10 grayscale" />
                </div>
              )}

              {/* Accent bottom bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary" />

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-3xl font-display uppercase tracking-wide text-white leading-none">
                    {selectedItem.name}
                  </h3>
                  <span className="text-2xl font-bold font-mono text-primary whitespace-nowrap ml-4">
                    R$ {selectedItem.price.toFixed(2)}
                  </span>
                </div>
                {selectedItem.description && (
                  <p className="text-white/65 text-base leading-relaxed">
                    {selectedItem.description}
                  </p>
                )}
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
