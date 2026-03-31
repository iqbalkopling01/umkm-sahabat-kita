import { motion } from "framer-motion";
import { FileText, Banknote, GraduationCap, Megaphone, ShieldCheck, Handshake } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: FileText,
    title: "Perizinan Usaha",
    description: "Urus NIB, SIUP, dan izin usaha lainnya secara online dengan panduan langkah demi langkah.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    href: "/perizinan",
  },
  {
    icon: Banknote,
    title: "Akses Pembiayaan",
    description: "Temukan program KUR, modal usaha, dan skema pembiayaan yang sesuai kebutuhan UMKM Anda.",
    color: "text-primary",
    bgColor: "bg-primary-light",
    href: "/pembiayaan",
  },
  {
    icon: GraduationCap,
    title: "Pelatihan & Edukasi",
    description: "Ikuti pelatihan digital marketing, manajemen keuangan, dan keterampilan bisnis lainnya.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    href: "/pelatihan",
  },
  {
    icon: Megaphone,
    title: "Pemasaran Produk",
    description: "Promosikan produk UMKM melalui marketplace, pameran, dan jaringan pemasaran terintegrasi.",
    color: "text-primary",
    bgColor: "bg-primary-light",
    href: "/pemasaran",
  },
  {
    icon: ShieldCheck,
    title: "Sertifikasi & Standar",
    description: "Dapatkan sertifikat halal, BPOM, SNI, dan standarisasi produk untuk meningkatkan daya saing.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    href: "/sertifikasi",
  },
  {
    icon: Handshake,
    title: "Pendampingan Usaha",
    description: "Konsultasi bisnis dengan mentor berpengalaman untuk membantu pengembangan usaha Anda.",
    color: "text-primary",
    bgColor: "bg-primary-light",
    href: "/pendampingan",
  },
];

const ServicesSection = () => {
  return (
    <section id="layanan" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            Layanan Kami
          </span>
          <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
            Solusi Lengkap untuk UMKM
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Berbagai layanan terintegrasi untuk mendukung pertumbuhan dan
            keberlanjutan usaha mikro, kecil, dan menengah di Kota Depok.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.a
              href="#"
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow duration-200 hover:shadow-lg"
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${service.bgColor}`}>
                <service.icon className={`h-5 w-5 ${service.color}`} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary-hover">
                Pelajari Selengkapnya
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
