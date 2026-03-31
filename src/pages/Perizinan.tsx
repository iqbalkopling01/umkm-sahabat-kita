import { motion } from "framer-motion";
import { FileText, CheckCircle, ArrowRight, Clock, FileCheck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const steps = [
  { icon: FileText, title: "Siapkan Dokumen", desc: "KTP, NPWP, foto lokasi usaha, dan surat keterangan domisili." },
  { icon: FileCheck, title: "Isi Formulir Online", desc: "Lengkapi data usaha melalui portal OSS (Online Single Submission)." },
  { icon: Clock, title: "Proses Verifikasi", desc: "Tim kami memverifikasi data dan dokumen Anda dalam 3-5 hari kerja." },
  { icon: Shield, title: "Terbitnya Izin", desc: "NIB dan izin usaha diterbitkan secara elektronik." },
];

const permits = [
  { title: "NIB (Nomor Induk Berusaha)", desc: "Identitas dasar pelaku usaha yang berlaku sebagai TDP, API, dan hak kepabeanan.", time: "1-3 hari" },
  { title: "SIUP (Surat Izin Usaha Perdagangan)", desc: "Izin untuk menjalankan kegiatan usaha perdagangan.", time: "3-5 hari" },
  { title: "IUMK (Izin Usaha Mikro Kecil)", desc: "Izin khusus untuk usaha mikro dan kecil dengan proses yang dipermudah.", time: "1 hari" },
  { title: "Izin Lokasi", desc: "Persetujuan penggunaan lahan untuk kegiatan usaha.", time: "5-7 hari" },
  { title: "PIRT (Pangan Industri Rumah Tangga)", desc: "Izin produksi makanan dan minuman skala rumah tangga.", time: "5-14 hari" },
  { title: "TDI (Tanda Daftar Industri)", desc: "Izin untuk usaha yang bergerak di bidang industri.", time: "3-5 hari" },
];

const Perizinan = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="bg-primary py-16 md:py-20">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/20">
              <FileText className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">Perizinan Usaha</h1>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
              Urus NIB, SIUP, dan izin usaha lainnya secara online dengan panduan langkah demi langkah.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Alur Pengurusan Izin</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
                  <s.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="mb-1 text-xs font-semibold text-primary">Langkah {i + 1}</div>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                {i < steps.length - 1 && <ArrowRight className="absolute -right-3 top-6 hidden h-5 w-5 text-muted-foreground/40 md:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Permits */}
      <section className="border-t border-border bg-card py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Jenis Perizinan</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {permits.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-foreground">{p.title}</h3>
                      <span className="shrink-0 rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">{p.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg">
              <FileText className="mr-2 h-4 w-4" /> Mulai Pengurusan Izin
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Perizinan;
