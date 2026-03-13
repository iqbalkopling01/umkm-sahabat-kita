import { motion } from "framer-motion";
import { Building2, Users, ShoppingBag, Award } from "lucide-react";

const stats = [
  { icon: Building2, value: "24.500+", label: "UMKM Terdaftar" },
  { icon: Users, value: "150.000+", label: "Tenaga Kerja" },
  { icon: ShoppingBag, value: "85.000+", label: "Produk Lokal" },
  { icon: Award, value: "3.200+", label: "UMKM Terverifikasi" },
];

const StatsSection = () => {
  return (
    <section className="border-b border-border bg-card py-12">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2 text-center md:flex-row md:gap-4 md:text-left"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
                <stat.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground md:text-3xl">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
