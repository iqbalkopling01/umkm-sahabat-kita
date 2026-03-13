export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

export interface UMKMDetail {
  id: string;
  name: string;
  category: string;
  location: string;
  address: string;
  rating: number;
  products: Product[];
  verified: boolean;
  image: string;
  description: string;
  owner: string;
  phone: string;
  email: string;
  website?: string;
  instagram?: string;
  operatingHours: string;
  established: string;
}

export const umkmData: UMKMDetail[] = [
  {
    id: "batik-margonda",
    name: "Batik Margonda",
    category: "Kerajinan & Fashion",
    location: "Pancoran Mas, Depok",
    address: "Jl. Margonda Raya No. 45, Pancoran Mas, Depok 16431",
    rating: 4.8,
    verified: true,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop",
    description: "Batik Margonda adalah usaha kerajinan batik tulis dan cap khas Depok yang telah berdiri sejak 2015. Kami menghadirkan motif-motif unik yang terinspirasi dari kekayaan budaya dan alam Kota Depok, termasuk motif Belimbing yang menjadi ikon kota. Setiap kain batik kami dibuat dengan teknik tradisional oleh pengrajin berpengalaman.",
    owner: "Ibu Siti Rahmawati",
    phone: "0812-3456-7890",
    email: "batik.margonda@gmail.com",
    instagram: "@batikmargonda",
    operatingHours: "Senin - Sabtu, 08:00 - 17:00 WIB",
    established: "2015",
    products: [
      { id: "p1", name: "Batik Tulis Motif Belimbing", price: "Rp 350.000", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop" },
      { id: "p2", name: "Batik Cap Motif Margonda", price: "Rp 180.000", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop" },
      { id: "p3", name: "Kemeja Batik Pria", price: "Rp 275.000", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop" },
      { id: "p4", name: "Syal Batik Premium", price: "Rp 120.000", image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc64?w=400&h=400&fit=crop" },
      { id: "p5", name: "Tas Batik Handmade", price: "Rp 200.000", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop" },
      { id: "p6", name: "Dress Batik Wanita", price: "Rp 320.000", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop" },
    ],
  },
  {
    id: "kopi-nusantara-depok",
    name: "Kopi Nusantara Depok",
    category: "Makanan & Minuman",
    location: "Beji, Depok",
    address: "Jl. Raya Beji No. 12, Beji, Depok 16421",
    rating: 4.9,
    verified: true,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=500&fit=crop",
    description: "Kopi Nusantara Depok menyajikan kopi speciality dari berbagai daerah di Indonesia. Kami berkomitmen untuk mendukung petani kopi lokal dengan membeli langsung dari perkebunan. Setiap biji kopi kami roasting sendiri untuk memastikan kesegaran dan cita rasa terbaik.",
    owner: "Bapak Andi Pratama",
    phone: "0857-1234-5678",
    email: "kopinusantaradepok@gmail.com",
    website: "www.kopinusantaradepok.id",
    instagram: "@kopinusantaradpk",
    operatingHours: "Setiap Hari, 07:00 - 22:00 WIB",
    established: "2018",
    products: [
      { id: "p1", name: "Kopi Arabika Gayo 250g", price: "Rp 85.000", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop" },
      { id: "p2", name: "Kopi Robusta Lampung 250g", price: "Rp 65.000", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=400&h=400&fit=crop" },
      { id: "p3", name: "Cold Brew Bottle 500ml", price: "Rp 45.000", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop" },
      { id: "p4", name: "Drip Bag Coffee (5pcs)", price: "Rp 55.000", image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=400&fit=crop" },
    ],
  },
  {
    id: "keripik-bu-sari",
    name: "Keripik Bu Sari",
    category: "Makanan & Minuman",
    location: "Cimanggis, Depok",
    address: "Jl. Raya Cimanggis No. 88, Cimanggis, Depok 16451",
    rating: 4.7,
    verified: true,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&h=500&fit=crop",
    description: "Keripik Bu Sari memproduksi berbagai varian keripik dan camilan khas dengan bahan baku segar dan bumbu rempah pilihan. Usaha rumahan yang kini telah berkembang menjadi produsen camilan terpercaya di Kota Depok sejak 2012.",
    owner: "Ibu Sari Dewi",
    phone: "0813-9876-5432",
    email: "keripikbusari@gmail.com",
    instagram: "@keripikbusari",
    operatingHours: "Senin - Jumat, 08:00 - 16:00 WIB",
    established: "2012",
    products: [
      { id: "p1", name: "Keripik Singkong Balado", price: "Rp 25.000", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=400&fit=crop" },
      { id: "p2", name: "Keripik Pisang Coklat", price: "Rp 30.000", image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=400&fit=crop" },
      { id: "p3", name: "Kerupuk Udang Premium", price: "Rp 35.000", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=400&fit=crop" },
    ],
  },
  {
    id: "furniture-jati-lestari",
    name: "Furniture Jati Lestari",
    category: "Kerajinan & Furnitur",
    location: "Sawangan, Depok",
    address: "Jl. Raya Sawangan No. 156, Sawangan, Depok 16511",
    rating: 4.6,
    verified: false,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=500&fit=crop",
    description: "Furniture Jati Lestari adalah workshop furnitur yang menggunakan kayu jati berkualitas tinggi. Setiap produk dibuat oleh tukang kayu berpengalaman dengan sentuhan desain modern dan klasik. Kami juga menerima pesanan custom sesuai kebutuhan pelanggan.",
    owner: "Bapak Hendra Wijaya",
    phone: "0821-5678-9012",
    email: "jatilestari.furniture@gmail.com",
    operatingHours: "Senin - Sabtu, 08:00 - 17:00 WIB",
    established: "2010",
    products: [
      { id: "p1", name: "Meja Makan Jati 6 Kursi", price: "Rp 8.500.000", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=400&fit=crop" },
      { id: "p2", name: "Kursi Tamu Set Minimalis", price: "Rp 5.200.000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop" },
      { id: "p3", name: "Lemari Pakaian 3 Pintu", price: "Rp 6.800.000", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=400&h=400&fit=crop" },
      { id: "p4", name: "Rak Buku Minimalis", price: "Rp 2.100.000", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400&h=400&fit=crop" },
      { id: "p5", name: "Nakas Kayu Jati", price: "Rp 1.500.000", image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=400&h=400&fit=crop" },
    ],
  },
];
