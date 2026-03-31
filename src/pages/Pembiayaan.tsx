import { motion } from "framer-motion";
import { Banknote, Calculator, Building2, Percent, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const schemes = [
  { title: "KUR (Kredit Usaha Rakyat)", rate: "3% per tahun", max: "Rp 500 Juta", desc: "Kredit bersubsidi pemerintah untuk UMKM produktif dengan bunga rendah.", bank: "BRI, BNI, Mandiri, BSI" },
  { title: "KUR Super Mikro", rate: "3% per tahun", max: "Rp 10 Juta", desc: "Pinjaman tanpa agunan untuk usaha mikro dan ultra mikro.", bank: "BRI, BNI" },
  { title: "Pembiayaan Syariah", rate: "Margin kompetitif", max: "Rp 200 Juta", desc: "Skema pembiayaan berbasis syariah (murabahah, musyarakah) untuk pelaku UMKM.", bank: "BSI, Bank Muamalat" },
  { title: "Program Hibah UMKM", rate: "Gratis", max: "Rp 2,4 Juta", desc: "Bantuan langsung tunai untuk UMKM terdampak atau UMKM baru.", bank: "Kementerian Koperasi" },
  { title: "Angel Investor Matching", rate: "Bagi hasil", max: "Negosiasi", desc: "Program mempertemukan UMKM potensial dengan investor untuk pendanaan equity.", bank: "Dinas Koperasi Depok" },
  { title: "Kredit Modal Kerja", rate: "6-9% per tahun", max: "Rp 1 Miliar", desc: "Fasilitas kredit untuk kebutuhan modal kerja operasional UMKM.", bank: "Bank umum" },
];

const requirements = [
  "KTP dan KK pemilik usaha",
  "NPWP pribadi atau badan usaha",
  "NIB atau Surat Izin Usaha",
  "Laporan keuangan sederhana (6 bulan terakhir)",
  "Foto lokasi dan kegiatan usaha",
  "Rencana penggunaan dana",
];

const Pembiayaan = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="bg-primary py-16 md:py-20">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/20">
              <Banknote className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">Akses Pembiayaan</h1>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
              Temukan program KUR, modal usaha, dan skema pembiayaan yang sesuai kebutuhan UMKM Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schemes */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Skema Pembiayaan</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {schemes.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                    <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2"><Percent className="h-3.5 w-3.5 text-primary" /><span>Bunga: {s.rate}</span></div>
                      <div className="flex items-center gap-2"><Banknote className="h-3.5 w-3.5 text-primary" /><span>Maks: {s.max}</span></div>
                      <div className="flex items-center gap-2"><Building2 className="h-3.5 w-3.5 text-primary" /><span>{s.bank}</span></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="border-t border-border bg-card py-12 md:py-16">
        <div className="container">
          <h2 className="mb-6 text-center text-2xl font-bold text-foreground">Persyaratan Umum</h2>
          <div className="mx-auto grid max-w-2xl gap-3">
            {requirements.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
                <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">{r}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg"><Calculator className="mr-2 h-4 w-4" /> Simulasi Pembiayaan</Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Pembiayaan;
