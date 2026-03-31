import { motion } from "framer-motion";
import { ShieldCheck, Award, FileCheck, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const certifications = [
  { title: "Sertifikat Halal", desc: "Jaminan kehalalan produk makanan, minuman, dan kosmetik sesuai syariat Islam.", org: "BPJPH / MUI", time: "30-60 hari" },
  { title: "Izin Edar BPOM", desc: "Izin peredaran produk obat, makanan, dan kosmetik yang aman untuk konsumsi.", org: "BPOM RI", time: "14-30 hari" },
  { title: "SNI (Standar Nasional Indonesia)", desc: "Standar mutu produk yang diakui secara nasional untuk meningkatkan daya saing.", org: "BSN", time: "30-90 hari" },
  { title: "Sertifikat PIRT", desc: "Izin produksi pangan industri rumah tangga untuk produk olahan makanan.", org: "Dinas Kesehatan", time: "5-14 hari" },
  { title: "Sertifikat Merek Dagang", desc: "Perlindungan hukum atas merek dagang produk UMKM Anda.", org: "DJKI Kemenkumham", time: "6-12 bulan" },
  { title: "ISO 9001 (Manajemen Mutu)", desc: "Sertifikasi sistem manajemen mutu untuk meningkatkan kepercayaan pelanggan.", org: "Lembaga Sertifikasi", time: "3-6 bulan" },
];

const benefits = [
  "Meningkatkan kepercayaan konsumen",
  "Memperluas akses pasar domestik dan internasional",
  "Memenuhi persyaratan tender dan kerjasama bisnis",
  "Perlindungan hukum atas produk dan merek",
];

const Sertifikasi = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="bg-primary py-16 md:py-20">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/20">
              <ShieldCheck className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">Sertifikasi & Standar</h1>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
              Dapatkan sertifikasi resmi untuk meningkatkan kualitas dan daya saing produk UMKM Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="mb-6 text-center text-2xl font-bold text-foreground">Manfaat Sertifikasi</h2>
          <div className="mx-auto grid max-w-2xl gap-3">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-t border-border bg-card py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Jenis Sertifikasi</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-1 flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <h3 className="font-semibold text-foreground">{c.title}</h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="rounded bg-accent px-2 py-0.5 font-medium text-accent-foreground">{c.org}</span>
                      <span>± {c.time}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg"><ShieldCheck className="mr-2 h-4 w-4" /> Ajukan Sertifikasi</Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Sertifikasi;
