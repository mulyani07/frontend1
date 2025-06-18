# 💼 Job Portal Frontend

Ini adalah frontend dari aplikasi **Job Portal** yang dibangun menggunakan **React.js**, **Tailwind CSS**, dan **Redux**. Aplikasi ini menyediakan antarmuka pengguna untuk pencarian kerja, autentikasi, dan pengelolaan profil pengguna.

---

## 🔗 Repository

👉 [GitHub - frontend](https://github.com/mulyani07/frontend.git)

---

## 🚀 Deployment (Vercel)

Frontend ini dideploy menggunakan [Vercel](https://vercel.com).

### Langkah-langkah Deploy ke Vercel:

1. Kunjungi [vercel.com](https://vercel.com), login dengan akun GitHub.
2. Klik **New Project** lalu pilih repo frontend kamu.
3. Konfigurasikan sebagai berikut:

   * **Framework Preset**: React
   * **Root Directory**: (kosongkan atau sesuaikan jika tidak di root)
   * Aktifkan `npm install` dan `npm run build` sebagai build & install command (biasanya otomatis terdeteksi)
4. Klik **Deploy** dan tunggu hingga proses selesai.
5. Setelah selesai, Vercel akan memberikan URL frontend seperti:

   ```
   https://your-frontend.vercel.app
   ```

---

## 🧪 Jalankan Secara Lokal

### 1. Clone Repo

```bash
git clone https://github.com/mulyani07/frontend.git
cd frontend
```

### 2. Install Dependensi

```bash
npm install
```

### 3. Buat File `.env`

Buat file `.env` di root proyek:

```env
VITE_API_URL=http://localhost:8000
```

### 4. Jalankan Aplikasi

```bash
npm run dev
```

Frontend akan berjalan di `http://localhost:5173` secara default.

---

