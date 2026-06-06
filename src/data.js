export const profileData = {
  name: "Muhammad Zidane Julian Saputra",
  nim: "E41232150",
  title: "Full Stack & Mobile Developer",
  subtitles: [
    "Web Developer",
    "Mobile Developer",
    "Computer Vision & IoT Enthusiast"
  ],
  email: "zidaneejulian@gmail.com",
  github: "https://github.com/zidaneeesa",
  location: "Jember, Jawa Timur",
  interests: ["Web Development", "Mobile Development", "Computer Vision", "IoT"],
  aboutBio: "Saya memiliki pengalaman pengembangan aplikasi web dan mobile, pernah mengerjakan proyek berbasis Laravel, CodeIgniter, Flutter, serta prototype sistem computer vision dan IoT dengan integrasi database dan monitoring sistem.",
  readinessStatement: "Siap terlibat dalam proyek nyata/project real karena memiliki pengalaman pengembangan aplikasi web dan mobile, pernah mengerjakan proyek berbasis Laravel, CodeIgniter, Flutter, serta prototype sistem computer vision dan IoT dengan integrasi database dan monitoring sistem."
};

export const skillsData = {
  web: [
    { name: "HTML", level: "Expert" },
    { name: "CSS", level: "Expert" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "Vue.js", level: "Intermediate" },
    { name: "PHP", level: "Advanced" },
    { name: "Laravel", level: "Advanced" },
    { name: "CodeIgniter", level: "Intermediate" },
    { name: "Python", level: "Advanced" },
    { name: "Flask", level: "Intermediate" }
  ],
  mobile: [
    { name: "Kotlin", level: "Intermediate" },
    { name: "Flutter", level: "Advanced" },
    { name: "Dart", level: "Advanced" },
    { name: "Java", level: "Intermediate" }
  ],
  dbAndTools: [
    { name: "MySQL", level: "Advanced" },
    { name: "Firebase", level: "Intermediate" },
    { name: "SQLite", level: "Intermediate" },
    { name: "Git & GitHub", level: "Advanced" },
    { name: "Computer Vision", level: "Advanced" },
    { name: "IoT", level: "Advanced" }
  ]
};

export const projectsData = [
  {
    id: "si-pustaka",
    title: "SI-PUSTAKA",
    category: "Desktop App",
    role: "Java Developer",
    year: "2024",
    tech: ["Java", "MySQL", "NetBeans", "Desktop UI"],
    description: "Sistem informasi perpustakaan berbasis desktop yang dirancang menggunakan Java (Swing/NetBeans) dan basis data MySQL. Menyediakan sistem manajemen buku, pencatatan transaksi peminjaman & pengembalian buku, denda keterlambatan, serta manajemen akun admin dan mahasiswa.",
    highlights: ["Aplikasi desktop multi-user (Admin & Mahasiswa)", "Manajemen data buku, transaksi & sirkulasi real-time", "Perhitungan denda & status buku otomatis"]
  },
  {
    id: "pemesanan-tiket-wisata",
    title: "SI-JELI",
    category: "Web & Mobile App",
    role: "Full Stack & Mobile Developer",
    year: "2024",
    tech: ["Kotlin", "Java", "Android Studio", "PHP", "MySQL", "Bootstrap"],
    description: "Sistem informasi pemesanan tiket wisata di Jember berbasis web & mobile. Terdiri dari aplikasi mobile JELI (Jember Liburan) untuk penjelajahan destinasi, verifikasi kode, histori perjalanan, dan tiket online, serta web frontend untuk invoice dan dashboard admin.",
    highlights: ["Aplikasi mobile JELI (Jember Liburan)", "E-Ticket dengan sistem verifikasi QR Code", "Dashboard admin & web invoice terintegrasi"]
  },
  {
    id: "tukang-pangkas-rambut",
    title: "BarberGo",
    category: "Web & Mobile App",
    role: "Full Stack & Mobile Developer",
    year: "2025",
    tech: ["Laravel", "Flutter", "Firebase", "PHP", "Dart", "MySQL"],
    description: "Sistem on-demand barbershop panggilan terintegrasi. Terdiri dari aplikasi mobile untuk pelanggan & barber, serta dashboard admin web untuk rekap transaksi, penggajian, dan manajemen data.",
    highlights: ["Aplikasi mobile pelanggan (booking & tracking)", "Aplikasi mobile barber (kelola jadwal & status)", "Dashboard web admin (rekap & penggajian Laravel)"]
  },
  {
    id: "gerbang-otomatis",
    title: "SI-GERBANG",
    category: "Web App & IoT",
    role: "Full Stack Developer",
    year: "2025",
    tech: ["Python", "Flask", "YOLOv8", "Tesseract OCR", "Wemos", "MySQL"],
    description: "Sistem informasi monitoring gerbang otomatis berbasis web (SI-GERBANG). Mengintegrasikan computer vision (YOLOv8 & Tesseract-OCR) untuk deteksi plat nomor kendaraan secara real-time dari kamera pengawas, yang terhubung ke kontroler Wemos untuk membuka gerbang otomatis.",
    highlights: ["Sistem deteksi plat nomor otomatis secara real-time", "Manajemen whitelist plat nomor terdaftar", "Log monitoring akses dan integrasi kendali Wemos"]
  },
  {
    id: "e-library-sman4",
    title: "E-Library SMAN 4 Jember",
    category: "Web & Mobile App",
    role: "Full Stack Developer",
    year: "2026",
    tech: ["Laravel", "PHP", "MySQL", "CSS", "JavaScript"],
    description: "Sistem perpustakaan sekolah digital untuk SMAN 4 Jember guna memfasilitasi akses buku digital, manajemen rekapitulasi pengunjung, dan pendataan sirkulasi.",
    highlights: ["E-book reader internal", "Grafik statistik harian", "Akses akun siswa & guru"]
  }
];

export const timelineData = [
  {
    type: "education",
    title: "Politeknik Negeri Jember",
    subtitle: "Teknik Informatika (D4)",
    date: "2023 - Sekarang",
    description: "Aktif sebagai mahasiswa teknologi informasi, fokus pada pemrograman web/mobile, basis data, dan machine learning."
  },
  {
    type: "project",
    title: "Pengembangan E-Library SMAN 4 Jember",
    subtitle: "Full Stack Developer",
    date: "2026",
    description: "Mendesain dan mengimplementasikan sistem perpustakaan sekolah digital untuk menunjang literasi guru dan siswa."
  },
  {
    type: "education",
    title: "SMKN 6 Jember",
    subtitle: "RPL (Rekayasa Perangkat Lunak)",
    date: "2020 - 2023",
    description: "Mendalami dasar-dasar pemrograman perangkat lunak, algoritma, basis data, serta pengembangan aplikasi web dan mobile."
  }
];
