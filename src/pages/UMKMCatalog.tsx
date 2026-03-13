import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Star, BadgeCheck, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { umkmData } from "@/data/umkmData";

const categories = [...new Set(umkmData.map((u) => u.category))];
const locations = [...new Set(umkmData.map((u) => u.location))];

const UMKMCatalog = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return umkmData.filter((u) => {
      const matchSearch =
        !search ||
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = !selectedCategory || u.category === selectedCategory;
      const matchLocation = !selectedLocation || u.location === selectedLocation;
      return matchSearch && matchCategory && matchLocation;
    });
  }, [search, selectedCategory, selectedLocation]);

  const activeFilters = [selectedCategory, selectedLocation].filter(Boolean).length;

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory(null);
    setSelectedLocation(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-primary py-12 md:py-16">
          <div className="container text-center">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-primary-foreground md:text-4xl"
            >
              Katalog UMKM Kota Depok
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-3 max-w-lg text-sm text-primary-foreground/80 md:text-base"
            >
              Temukan dan dukung pelaku usaha lokal terbaik di Kota Depok
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-6 max-w-xl"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Cari nama UMKM atau produk..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-11 bg-card pl-10 pr-4 text-foreground"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container py-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant={showFilters ? "default" : "outline"}
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <Filter className="h-4 w-4" />
              Filter
              {activeFilters > 0 && (
                <Badge className="ml-1 h-5 w-5 rounded-full bg-primary-foreground p-0 text-xs text-primary">
                  {activeFilters}
                </Badge>
              )}
            </Button>

            {(selectedCategory || selectedLocation || search) && (
              <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1 text-muted-foreground">
                <X className="h-3 w-3" /> Hapus filter
              </Button>
            )}

            <span className="ml-auto text-sm text-muted-foreground">
              {filtered.length} UMKM ditemukan
            </span>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4 overflow-hidden rounded-xl border border-border bg-card p-5"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-foreground">Kategori</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                        className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                          selectedCategory === cat
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background text-foreground hover:border-primary/50"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-foreground">Lokasi</p>
                  <div className="flex flex-wrap gap-2">
                    {locations.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => setSelectedLocation(selectedLocation === loc ? null : loc)}
                        className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                          selectedLocation === loc
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background text-foreground hover:border-primary/50"
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Results Grid */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((umkm, i) => (
              <motion.div
                key={umkm.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <Link to={`/umkm/${umkm.id}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden">
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
                  <div className="p-5">
                    <p className="text-xs font-medium text-secondary">{umkm.category}</p>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">{umkm.name}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{umkm.description}</p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {umkm.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current text-accent-foreground" /> {umkm.rating}
                      </span>
                    </div>
                    <div className="mt-3 border-t border-border pt-3">
                      <span className="text-xs text-muted-foreground">{umkm.products.length} Produk</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg font-semibold text-foreground">Tidak ada UMKM ditemukan</p>
              <p className="mt-1 text-sm text-muted-foreground">Coba ubah kata kunci atau filter pencarian Anda.</p>
              <Button variant="outline" size="sm" className="mt-4" onClick={clearFilters}>
                Hapus semua filter
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UMKMCatalog;
