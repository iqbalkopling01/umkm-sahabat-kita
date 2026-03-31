import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Clock, Users, Search, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Training {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  instructor: string;
  slots: number;
  slotsLeft: number;
  description: string;
  image: string;
}

const trainings: Training[] = [
  {
    id: "1",
    title: "Digital Marketing untuk UMKM Pemula",
    category: "Pemasaran Digital",
    date: "15 April 2026",
    time: "09:00 - 12:00 WIB",
    location: "Gedung Dinas Koperasi Depok",
    instructor: "Budi Santoso, S.Kom",
    slots: 30,
    slotsLeft: 12,
    description: "Pelajari dasar-dasar digital marketing termasuk social media marketing, SEO, dan Google Ads untuk meningkatkan visibilitas produk UMKM Anda.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: "2",
    title: "Manajemen Keuangan UMKM",
    category: "Keuangan",
    date: "20 April 2026",
    time: "13:00 - 16:00 WIB",
    location: "Balai Pelatihan UMKM Depok",
    instructor: "Dr. Siti Rahayu, M.M.",
    slots: 25,
    slotsLeft: 8,
    description: "Kelola keuangan usaha dengan baik, mulai dari pembukuan sederhana, laporan keuangan, hingga perencanaan anggaran.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
  {
    id: "3",
    title: "Food Photography & Styling",
    category: "Fotografi Produk",
    date: "25 April 2026",
    time: "10:00 - 14:00 WIB",
    location: "Studio Kreatif UMKM Depok",
    instructor: "Andi Wijaya",
    slots: 20,
    slotsLeft: 15,
    description: "Teknik foto produk makanan yang menarik menggunakan smartphone untuk meningkatkan daya tarik produk di marketplace dan media sosial.",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=400&fit=crop",
  },
  {
    id: "4",
    title: "Pengurusan Sertifikat Halal & BPOM",
    category: "Sertifikasi",
    date: "2 Mei 2026",
    time: "09:00 - 12:00 WIB",
    location: "Kantor MUI Kota Depok",
    instructor: "H. Ahmad Fauzi, M.Ag.",
    slots: 40,
    slotsLeft: 22,
    description: "Panduan lengkap mengurus sertifikat halal dan izin BPOM untuk produk makanan dan minuman UMKM.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
  },
  {
    id: "5",
    title: "Ekspor Produk UMKM ke Pasar Global",
    category: "Pemasaran Digital",
    date: "10 Mei 2026",
    time: "09:00 - 15:00 WIB",
    location: "Gedung Dinas Koperasi Depok",
    instructor: "Ir. Rudi Hartono, M.B.A.",
    slots: 30,
    slotsLeft: 18,
    description: "Pelajari prosedur ekspor, regulasi perdagangan internasional, dan strategi penetrasi pasar luar negeri untuk produk UMKM.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop",
  },
  {
    id: "6",
    title: "Branding & Packaging Modern",
    category: "Branding",
    date: "18 Mei 2026",
    time: "10:00 - 13:00 WIB",
    location: "Studio Kreatif UMKM Depok",
    instructor: "Diana Putri, S.Ds.",
    slots: 25,
    slotsLeft: 5,
    description: "Rancang identitas merek dan kemasan produk yang menarik agar produk UMKM lebih kompetitif di pasaran.",
    image: "https://images.unsplash.com/photo-1586953208270-767889fa9b0e?w=600&h=400&fit=crop",
  },
];

const categories = [...new Set(trainings.map((t) => t.category))];

const Pelatihan = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTraining, setSelectedTraining] = useState<Training | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const filtered = useMemo(() => {
    return trainings.filter((t) => {
      const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = !selectedCategory || t.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [search, selectedCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormOpen(false);
      setSelectedTraining(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/20">
                <GraduationCap className="h-7 w-7 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">Pelatihan & Edukasi UMKM</h1>
              <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
                Tingkatkan kompetensi dan daya saing usaha Anda melalui program pelatihan gratis dari Pemerintah Kota Depok.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b border-border bg-card py-6">
          <div className="container">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Cari pelatihan..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${!selectedCategory ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"}`}
                >
                  Semua
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${selectedCategory === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* List */}
        <section className="py-12 md:py-16">
          <div className="container">
            <p className="mb-6 text-sm text-muted-foreground">{filtered.length} pelatihan ditemukan</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((t, i) => (
                  <motion.div
                    key={t.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <Card className="group h-full overflow-hidden transition-shadow hover:shadow-lg">
                      <div className="relative h-44 overflow-hidden">
                        <img src={t.image} alt={t.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">{t.category}</Badge>
                      </div>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg leading-snug">{t.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground line-clamp-2">{t.description}</p>
                        <div className="space-y-1.5 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-primary" />{t.date}</div>
                          <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-primary" />{t.time}</div>
                          <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary" />{t.location}</div>
                          <div className="flex items-center gap-2">
                            <Users className="h-3.5 w-3.5 text-primary" />
                            <span>Sisa {t.slotsLeft} dari {t.slots} kursi</span>
                          </div>
                        </div>
                        <Button
                          className="w-full"
                          size="sm"
                          onClick={() => { setSelectedTraining(t); setFormOpen(true); }}
                          disabled={t.slotsLeft === 0}
                        >
                          {t.slotsLeft === 0 ? "Kuota Penuh" : "Daftar Sekarang"}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {filtered.length === 0 && (
              <div className="py-16 text-center text-muted-foreground">
                <GraduationCap className="mx-auto mb-3 h-10 w-10 opacity-40" />
                <p>Tidak ada pelatihan yang sesuai dengan pencarian Anda.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Registration Dialog */}
      <Dialog open={formOpen} onOpenChange={(open) => { setFormOpen(open); if (!open) setSubmitted(false); }}>
        <DialogContent className="max-w-md">
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center py-8 text-center">
              <CheckCircle className="mb-4 h-14 w-14 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Pendaftaran Berhasil!</h3>
              <p className="mt-2 text-sm text-muted-foreground">Anda akan menerima konfirmasi melalui email.</p>
            </motion.div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-lg">Daftar Pelatihan</DialogTitle>
                {selectedTraining && <p className="text-sm text-muted-foreground">{selectedTraining.title}</p>}
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reg-name">Nama Lengkap</Label>
                  <Input id="reg-name" placeholder="Masukkan nama lengkap" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-email">Email</Label>
                  <Input id="reg-email" type="email" placeholder="email@contoh.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-phone">No. Telepon</Label>
                  <Input id="reg-phone" type="tel" placeholder="08xxxxxxxxxx" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-business">Nama Usaha</Label>
                  <Input id="reg-business" placeholder="Nama UMKM Anda" required />
                </div>
                <Button type="submit" className="w-full">Kirim Pendaftaran</Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Pelatihan;
