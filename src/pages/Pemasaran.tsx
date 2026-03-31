import { motion } from "framer-motion";
import { Megaphone, ShoppingBag, Globe, Smartphone, TrendingUp, Store, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const channels = [
  { icon: ShoppingBag, title: "Marketplace Nasional", desc: "Fasilitasi pendaftaran dan optimasi toko di Tokopedia, Shopee, Bukalapak, dan marketplace lainnya." },
  { icon: Globe, title: "Website & Landing Page", desc: "Bantuan pembuatan website profesional untuk menampilkan produk UMKM secara online." },
  { icon: Smartphone, title: "Social Media Marketing", desc: "Pelatihan dan pendampingan pengelolaan media sosial untuk promosi produk." },
  { icon: Store, title: "Pameran & Bazaar", desc: "Akses ke event pameran lokal dan nasional untuk memperkenalkan produk ke pasar lebih luas." },
  { icon: Camera, title: "Konten Kreatif", desc: "Fasilitas foto dan video produk profesional untuk kebutuhan promosi." },
  { icon: TrendingUp, title: "Katalog Digital Depok", desc: "Tampilkan produk Anda di katalog digital resmi UMKM Kota Depok." },
];

const stats = [
  { value: "500+", label: "Produk terdaftar di marketplace" },
  { value: "50+", label: "Pameran per tahun" },
  { value: "1M+", label: "Jangkauan audiens online" },
];

const Pemasaran = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="bg-primary py-16 md:py-20">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/20">
              <Megaphone className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">Pemasaran Produk</h1>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
              Promosikan produk UMKM melalui marketplace, pameran, dan jaringan pemasaran terintegrasi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card py-10">
        <div className="container grid grid-cols-3 gap-4 text-center">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="text-2xl font-bold text-primary md:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Channels */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Kanal Pemasaran</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {channels.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-accent">
                      <c.icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg"><Megaphone className="mr-2 h-4 w-4" /> Daftarkan Produk Anda</Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Pemasaran;
