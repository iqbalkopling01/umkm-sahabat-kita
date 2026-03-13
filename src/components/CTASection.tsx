import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-primary px-6 py-14 text-center md:px-16 md:py-20"
        >
          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary-foreground/5" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary-foreground/5" />

          <div className="relative z-10 mx-auto max-w-xl">
            <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
              Siap Mengembangkan Usaha Anda?
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Daftarkan UMKM Anda sekarang dan dapatkan akses ke berbagai layanan
              pendampingan, pembiayaan, dan pemasaran dari Pemerintah Kota Depok.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="hero-outline" size="lg" className="gap-2">
                Daftarkan UMKM
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
