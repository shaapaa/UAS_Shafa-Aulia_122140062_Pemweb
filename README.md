## Nama : Shafa Aulia
## NIM  : 122140062
## UAS Pemrograman Web RB
---

<h1 align="center">BLOWG</h1>

**Blowg** adalah aplikasi web modern yang dirancang sebagai platform blog dan cerita digital dari berbagai genre — mulai dari fiction, love, romance, action, magical, historical, hingga kisah berdasarkan latar negara asal. Dengan antarmuka intuitif dan responsif, pengguna dapat membaca, mengeksplorasi, serta berinteraksi melalui komentar pada setiap postingan.

---

## Deskripsi Aplikasi

**Blowg** adalah sebuah aplikasi web modern yang dirancang sebagai platform blog dan cerita digital dari berbagai genre, seperti fiction, love, romance, action, magical, historical, hingga kisah berdasarkan latar negara asal. Melalui antarmuka yang intuitif dan responsif, pengguna dapat membaca dan mengeksplorasi beragam tulisan yang dikurasi dalam berbagai kategori, baik untuk hiburan, inspirasi, maupun pengetahuan. Pengalaman membaca diperkaya dengan fitur pencarian cerdas berbasis kata kunci, sehingga semakin spesifik kata yang diketik, hasil yang ditampilkan akan semakin terfokus pada cerita yang paling relevan.

Setiap pengguna dapat membuat akun, lalu menulis, mengedit, dan menghapus artikelnya sendiri secara langsung melalui antarmuka yang terhubung ke backend secara real-time. Komentar antar pengguna juga dapat dilakukan untuk membangun interaksi dan diskusi pada setiap postingan. Aplikasi ini juga menyajikan fitur Recent Posts, pagination, serta filter genre untuk memudahkan navigasi.

---

## Dependensi Paket
Untuk memastikan aplikasi Blowg berjalan dengan optimal, dibutuhkan beberapa dependensi baik di sisi frontend maupun backend. Dependensi ini mencakup pustaka inti untuk membangun antarmuka pengguna yang responsif, manajemen state global, pengelolaan routing, serta framework backend yang mendukung pengembangan RESTful API dengan otentikasi dan integrasi database PostgreSQL. Berikut adalah daftar paket dan library utama yang digunakan dalam proyek ini:

### 1. Frontend (Node.js)
- `react` & `react-dom` — Library inti untuk membangun UI  
- `react-router-dom` — Menangani routing Single-Page Application  
- `axios` — HTTP client untuk berkomunikasi dengan backend  
- `tailwindcss` — Utility-first CSS framework untuk styling responsif  
- `@reduxjs/toolkit` & `react-redux` — State management global  
- `@headlessui/react` (opsional) — Komponen UI tanpa styling bawaan  
- `@testing-library/react` & `jest` — Framework dan utilitas untuk unit/integration testing

### 2. Backend

- `pyramid` — Web framework untuk RESTful API
- `sqlalchemy` — untuk berinteraksi dengan PostgreSQL
- `alembic` — Migration tool untuk versioning schema database
- `psycopg2-binary` — Driver PostgreSQL
- `bcrypt` — Hashing password
- `pyramid_basic_auth` — Plugin HTTP Basic Auth
- `pytest & pytest-cov` — Framework dan plugin untuk testing dengan coverage

---

## Fitur Utama
**Blowg** dirancang untuk memberikan pengalaman membaca dan menulis blog yang modern dan interaktif. Aplikasi ini tidak hanya memungkinkan pengguna untuk menjelajahi beragam artikel dari berbagai genre, tetapi juga memberikan kontrol penuh kepada pengguna atas konten mereka sendiri. Dengan sistem CRUD yang terintegrasi, pencarian cerdas, serta dukungan komentar dan tag, BLOWG menghadirkan platform menulis yang dinamis dan responsif. Berikut adalah fitur-fitur utama yang tersedia dalam aplikasi:
- Search Bar: Pencarian cerdas berdasarkan kata kunci
- Recent Posts: Daftar artikel terbaru
- Pagination: Navigasi mudah antar halaman postingan
- Tags/Genre Filter: Kategori berdasarkan genre atau tag
- Post List & Post Card: Tampilan daftar dan pratinjau artikel
- CRUD Artikel: Create, Read, Update, Delete milik pengguna
- Komentar: Interaksi antar pengguna pada setiap artikel
- Responsif: Desain mobile-first dengan hamburger menu