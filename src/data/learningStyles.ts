
import { LearningStyleInfo } from '../types';

export const learningStyles: Record<string, LearningStyleInfo> = {
  visual: {
    title: "Pembelajar Visual",
    description: "Kamu adalah pembelajar visual! Kamu belajar paling baik melalui apa yang kamu lihat. Kamu mengandalkan gambar, diagram, dan representasi visual untuk memahami informasi.",
    traits: [
      "Mudah mengingat apa yang dilihat daripada yang didengar",
      "Lebih suka membaca daripada dibacakan",
      "Membutuhkan gambaran menyeluruh sebelum memahami detail",
      "Menyukai diagram, grafik, peta pikiran, dan presentasi visual",
      "Sering membuat catatan dengan warna dan gambar"
    ],
    strategies: [
      "Gunakan peta pikiran dan diagram untuk merangkum informasi",
      "Gunakan highlighter warna-warni untuk mencatat",
      "Tonton video tutorial atau demonstrasi",
      "Visualisasikan informasi dalam pikiran",
      "Duduk di bagian depan kelas untuk menghindari gangguan visual"
    ],
    icon: "eye"
  },
  auditory: {
    title: "Pembelajar Auditori",
    description: "Kamu adalah pembelajar auditori! Kamu belajar paling baik melalui apa yang kamu dengar. Kamu mengandalkan diskusi, ceramah, dan penjelasan verbal untuk memahami informasi.",
    traits: [
      "Mudah mengingat apa yang didengar atau didiskusikan",
      "Menikmati diskusi kelompok dan pembelajaran berbasis dialog",
      "Bisa terganggu oleh kebisingan",
      "Suka berbicara pada diri sendiri saat belajar",
      "Memiliki kemampuan bahasa verbal yang baik"
    ],
    strategies: [
      "Rekam kuliah dan dengarkan kembali",
      "Bacakan materi dengan suara keras",
      "Diskusikan materi dengan teman atau kelompok belajar",
      "Gunakan lagu atau ritme untuk mengingat informasi",
      "Jelaskan konsep pada orang lain untuk memperkuat pemahaman"
    ],
    icon: "headphones"
  },
  kinesthetic: {
    title: "Pembelajar Kinestetik",
    description: "Kamu adalah pembelajar kinestetik! Kamu belajar paling baik melalui pengalaman dan praktik langsung. Kamu mengandalkan gerakan, sentuhan, dan aktivitas fisik untuk memahami informasi.",
    traits: [
      "Lebih suka belajar dengan melakukan daripada membaca/mendengar",
      "Kesulitan duduk diam untuk waktu yang lama",
      "Mengandalkan intuisi dan perasaan",
      "Menikmati aktivitas hands-on dan eksperimen",
      "Menggunakan gerakan tangan saat berbicara"
    ],
    strategies: [
      "Belajar sambil berjalan atau bergerak",
      "Gunakan model fisik atau objek yang bisa dimanipulasi",
      "Ambil jeda belajar dengan aktivitas fisik singkat",
      "Ikuti kelas dengan komponen praktik",
      "Gunakan kartu belajar yang bisa dipindah-pindahkan"
    ],
    icon: "move"
  }
};
