import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import heroImage from "@/assets/hero-umkm.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pelaku UMKM Indonesia di pasar tradisional"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      </div>

      <div className="container relative z-10 py-20 md:py-28 lg:py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium text-primary-foreground">
              Platform Resmi Pemerintah Kota Depok
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem]"
          >
            Dukung & Kembangkan
            <br />
            UMKM Kota Depok
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/80 md:text-lg"
          >
            Portal resmi pemberdayaan UMKM Dkerens Depok. Akses perizinan,
            pembiayaan, pelatihan, dan pemasaran produk UMKM dalam satu
            platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button variant="hero-outline" size="lg" className="gap-2">
              Daftarkan UMKM Anda
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 max-w-lg"
          >
            <div className="flex items-center gap-2 rounded-xl bg-primary-foreground/10 p-1.5 backdrop-blur">
              <div className="flex flex-1 items-center gap-2 px-3">
                <Search className="h-4 w-4 text-primary-foreground/60" />
                <input
                  type="text"
                  placeholder="Cari UMKM, produk, atau layanan..."
                  className="w-full bg-transparent py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none"
                />
              </div>
              <Button size="sm" className="rounded-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Cari
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
