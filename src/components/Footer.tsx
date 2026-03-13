import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="kontak" className="border-t border-border bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">D</span>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">UMKM Dkerens</p>
                <p className="text-xs text-muted-foreground">Kota Depok</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Platform resmi Pemerintah Kota Depok untuk pemberdayaan dan
              pengembangan UMKM.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Layanan</h4>
            <ul className="mt-4 space-y-2.5">
              {["Perizinan Usaha", "Akses Pembiayaan", "Pelatihan", "Pemasaran Produk", "Sertifikasi"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Informasi</h4>
            <ul className="mt-4 space-y-2.5">
              {["Tentang Kami", "Berita & Artikel", "FAQ", "Kebijakan Privasi", "Syarat & Ketentuan"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Kontak</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Jl. Margonda Raya No. 54, Depok, Jawa Barat 16431</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                <span>(021) 772-0001</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <span>umkm@depok.go.id</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Pemerintah Kota Depok. Hak cipta dilindungi.</p>
          <p>Dinas Koperasi dan Usaha Mikro Kota Depok</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
