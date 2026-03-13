import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin, Star, BadgeCheck, Phone, Mail, Globe, Instagram,
  Clock, Calendar, ArrowLeft, ChevronRight, User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { umkmData } from "@/data/umkmData";
import { useState } from "react";

const UMKMDetail = () => {
  const { id } = useParams<{ id: string }>();
  const umkm = umkmData.find((u) => u.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!umkm) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground">UMKM tidak ditemukan</h1>
          <p className="mt-2 text-muted-foreground">Data UMKM yang Anda cari tidak tersedia.</p>
          <Link to="/">
            <Button className="mt-6">Kembali ke Beranda</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Breadcrumb */}
        <div className="border-b border-border bg-card">
          <div className="container flex items-center gap-2 py-3 text-sm text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-foreground">Beranda</Link>
            <ChevronRight className="h-3 w-3" />
            <a href="/#umkm" className="transition-colors hover:text-foreground">UMKM</a>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{umkm.name}</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative h-64 overflow-hidden md:h-80">
          <img
            src={umkm.image}
            alt={umkm.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container pb-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-accent text-accent-foreground">{umkm.category}</Badge>
                  {umkm.verified && (
                    <Badge className="bg-primary text-primary-foreground">
                      <BadgeCheck className="mr-1 h-3 w-3" /> Terverifikasi
                    </Badge>
                  )}
                </div>
                <h1 className="mt-2 text-2xl font-bold text-primary-foreground md:text-4xl">
                  {umkm.name}
                </h1>
                <div className="mt-2 flex items-center gap-4 text-sm text-primary-foreground/80">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {umkm.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current" /> {umkm.rating}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container py-8 md:py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <motion.section
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h2 className="text-lg font-bold text-foreground">Tentang Usaha</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{umkm.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div className="rounded-lg bg-accent/50 p-3 text-center">
                    <User className="mx-auto h-5 w-5 text-accent-foreground" />
                    <p className="mt-1 text-xs text-muted-foreground">Pemilik</p>
                    <p className="text-sm font-semibold text-foreground">{umkm.owner}</p>
                  </div>
                  <div className="rounded-lg bg-accent/50 p-3 text-center">
                    <Calendar className="mx-auto h-5 w-5 text-accent-foreground" />
                    <p className="mt-1 text-xs text-muted-foreground">Berdiri Sejak</p>
                    <p className="text-sm font-semibold text-foreground">{umkm.established}</p>
                  </div>
                  <div className="rounded-lg bg-accent/50 p-3 text-center">
                    <Clock className="mx-auto h-5 w-5 text-accent-foreground" />
                    <p className="mt-1 text-xs text-muted-foreground">Total Produk</p>
                    <p className="text-sm font-semibold text-foreground">{umkm.products.length}</p>
                  </div>
                </div>
              </motion.section>

              {/* Product Gallery */}
              <motion.section
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-lg font-bold text-foreground">Galeri Produk</h2>
                <div className="mt-4 grid gap-4 grid-cols-2 sm:grid-cols-3">
                  {umkm.products.map((product, i) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * i }}
                      whileHover={{ y: -4 }}
                      className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
                      onClick={() => setSelectedImage(product.image)}
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="text-sm font-semibold text-foreground line-clamp-1">{product.name}</h3>
                        <p className="mt-1 text-sm font-bold text-primary">{product.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Sidebar - Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="sticky top-20 space-y-6"
              >
                {/* Contact Card */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="text-base font-bold text-foreground">Informasi Kontak</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Alamat</p>
                        <p className="text-sm text-foreground">{umkm.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Telepon</p>
                        <p className="text-sm text-foreground">{umkm.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="text-sm text-foreground">{umkm.email}</p>
                      </div>
                    </div>
                    {umkm.website && (
                      <div className="flex items-start gap-3">
                        <Globe className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Website</p>
                          <p className="text-sm text-foreground">{umkm.website}</p>
                        </div>
                      </div>
                    )}
                    {umkm.instagram && (
                      <div className="flex items-start gap-3">
                        <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Instagram</p>
                          <p className="text-sm text-foreground">{umkm.instagram}</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Jam Operasional</p>
                        <p className="text-sm text-foreground">{umkm.operatingHours}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <Button className="w-full" size="sm">
                      <Phone className="mr-2 h-4 w-4" /> Hubungi Sekarang
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      <Mail className="mr-2 h-4 w-4" /> Kirim Pesan
                    </Button>
                  </div>
                </div>

                {/* Back button */}
                <Link to="/">
                  <Button variant="ghost" className="w-full gap-2">
                    <ArrowLeft className="h-4 w-4" /> Kembali ke Beranda
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Product preview"
            className="max-h-[80vh] max-w-full rounded-xl object-contain"
          />
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default UMKMDetail;
