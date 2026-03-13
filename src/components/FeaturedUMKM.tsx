import { motion } from "framer-motion";
import { MapPin, Star, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const umkmList = [
  {
    name: "Batik Margonda",
    category: "Kerajinan & Fashion",
    location: "Pancoran Mas, Depok",
    rating: 4.8,
    products: 42,
    verified: true,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop",
  },
  {
    name: "Kopi Nusantara Depok",
    category: "Makanan & Minuman",
    location: "Beji, Depok",
    rating: 4.9,
    products: 18,
    verified: true,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
  },
  {
    name: "Keripik Bu Sari",
    category: "Makanan & Minuman",
    location: "Cimanggis, Depok",
    rating: 4.7,
    products: 12,
    verified: true,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop",
  },
  {
    name: "Furniture Jati Lestari",
    category: "Kerajinan & Furnitur",
    location: "Sawangan, Depok",
    rating: 4.6,
    products: 35,
    verified: false,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
  },
];

const FeaturedUMKM = () => {
  return (
    <section id="umkm" className="bg-card py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              UMKM Unggulan
            </span>
            <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
              UMKM Pilihan Kota Depok
            </h2>
            <p className="mt-2 max-w-lg text-muted-foreground">
              Temukan dan dukung pelaku usaha lokal terbaik di Kota Depok.
            </p>
          </div>
          <Button variant="outline" size="sm">
            Lihat Semua UMKM
          </Button>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {umkmList.map((umkm, i) => (
            <motion.div
              key={umkm.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-background transition-shadow duration-200 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={umkm.image}
                  alt={umkm.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {umkm.verified && (
                  <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                    <BadgeCheck className="h-3 w-3" /> Terverifikasi
                  </span>
                )}
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-secondary">{umkm.category}</p>
                <h3 className="mt-1 font-semibold text-foreground">{umkm.name}</h3>
                <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {umkm.location}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                  <span className="flex items-center gap-1 text-sm font-medium text-foreground">
                    <Star className="h-3.5 w-3.5 fill-current text-accent-foreground" />
                    {umkm.rating}
                  </span>
                  <span className="text-xs text-muted-foreground">{umkm.products} Produk</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedUMKM;
