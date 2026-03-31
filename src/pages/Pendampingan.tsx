import { motion } from "framer-motion";
import { Handshake, Users, Target, TrendingUp, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const programs = [
  { icon: Target, title: "Mentoring Bisnis", desc: "Pendampingan satu-satu dengan mentor berpengalaman untuk menyusun strategi pengembangan usaha." },
  { icon: TrendingUp, title: "Inkubasi Usaha", desc: "Program inkubasi intensif selama 3 bulan untuk UMKM terpilih, termasuk akses co-working space." },
  { icon: MessageSquare, title: "Konsultasi Gratis", desc: "Layanan konsultasi bisnis gratis setiap hari kerja di kantor Dinas Koperasi Depok." },
  { icon: Users, title: "Komunitas UMKM", desc: "Bergabung dengan komunitas sesama pelaku UMKM untuk berbagi pengalaman dan peluang kerjasama." },
  { icon: Calendar, title: "Business Matching", desc: "Program pertemuan bisnis antara UMKM dengan calon buyer, investor, dan mitra strategis." },
  { icon: Handshake, title: "Kemitraan Korporasi", desc: "Fasilitasi kemitraan antara UMKM dengan perusahaan besar untuk supply chain." },
];

const mentors = [
  { name: "Dr. Hendra Wijaya", expertise: "Strategi Bisnis & Manajemen", experience: "15 tahun" },
  { name: "Siti Nurhaliza, M.M.", expertise: "Keuangan & Akuntansi UMKM", experience: "12 tahun" },
  { name: "Andi Prasetyo", expertise: "Digital Marketing & E-commerce", experience: "10 tahun" },
  { name: "Ratna Dewi, S.T.", expertise: "Produksi & Quality Control", experience: "8 tahun" },
];

const Pendampingan = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="bg-primary py-16 md:py-20">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/20">
              <Handshake className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">Pendampingan Usaha</h1>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
              Konsultasi dan pendampingan bisnis oleh mentor berpengalaman untuk memaksimalkan potensi usaha Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Program Pendampingan</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-accent">
                      <p.icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="border-t border-border bg-card py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Tim Mentor</h2>
          <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
            {mentors.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 rounded-xl border border-border bg-background p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {m.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{m.name}</h3>
                  <p className="text-sm text-muted-foreground">{m.expertise}</p>
                  <p className="text-xs text-muted-foreground">Pengalaman {m.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg"><Handshake className="mr-2 h-4 w-4" /> Daftar Pendampingan</Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Pendampingan;
