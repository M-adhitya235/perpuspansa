// src/pages/InformationPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import headerImage from '../assets/pic-1.jpg';
import { Element } from 'react-scroll';
import Footer from '../components/Footer';

const InformationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="relative">
        <img src={headerImage} alt="Header" className="w-full h-64 object-cover mt-16" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-3xl md:text-4xl font-bold">Informasi</h1>
        </div>
      </header>
      <Navbar />
      <main className="flex-grow p-4">
        <div className="container mx-auto bg-white rounded-lg shadow-lg p-6 space-y-8">
          {/* Section: Perkenalan Singkat */}
          <section className="bg-white rounded-lg p-6 shadow-md">
            <Element name="intro">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Perkenalan Singkat</h2>
              <p className="text-gray-700">
                SMP Negeri 1 Balikpapan adalah sekolah menengah pertama yang berfokus pada memberikan pendidikan berkualitas untuk para siswa. Kami berkomitmen untuk membentuk karakter yang berintegritas, kreatif, dan berdaya saing tinggi.
              </p>
            </Element>
          </section>

          {/* Section: Jam Operasional */}
          <section className="bg-white rounded-lg p-6 shadow-md">
            <Element>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Jam Operasional</h2>
              <p className="text-gray-700">
                <span className="font-semibold">Senin - Kamis:</span> <br />
                Open: 07.00 <br />
                Close: 16.00 <br />
                <span className="font-semibold">Jumat:</span> <br />
                Open: 07.00 <br />
                Close: 12.00 <br />
              </p>
            </Element>
          </section>

          {/* Section: Visi dan Misi */}
          <section className="bg-white rounded-lg p-6 shadow-md">
            <Element name="vision-mission">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Visi dan Misi Perpustakaan</h2>
              <h3 className="text-xl font-semibold mb-2">Visi Perpustakaan:</h3>
              <p className="text-gray-700 mb-4">
                Terwujudnya perpustakaan sekolah yang sehat dan bermanfaat guna meningkatkan pendidikan.
              </p>
              <h3 className="text-xl font-semibold mb-2">Misi Perpustakaan:</h3>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Mengefektifkan kegiatan membaca di perpustakaan.</li>
                <li>Memanfaatkan buku dan ruang perpustakaan dalam kegiatan belajar dan mengajar.</li>
                <li>Mewujudkan warga sekolah yang berwawasan luas dalam meningkatkan pendidikan.</li>
              </ul>
            </Element>
          </section>

          {/* Section: Tata Tertib */}
          <section className="bg-white rounded-lg p-6 shadow-md">
            <Element name="rules">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Tata Tertib Pengunjung Perpustakaan</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Setiap siswa/pengunjung yang masuk di ruang perpustakaan harus tertib dan meletakkan alas kaki di rak yang telah disediakan.</li>
                <li>Setiap siswa/pengunjung ke perpustakaan wajib mengisi buku pengunjung.</li>
                <li>Setiap siswa/pengunjung ke perpustakaan dilarang membawa makanan dan minuman.</li>
                <li>Setiap siswa/pengunjung ke perpustakaan dilarang berbicara keras.</li>
                <li>Setiap siswa/pengunjung ke perpustakaan merapikan kembali buku yang telah dibaca dengan meletakkan di atas meja baca yang tersedia.</li>
                <li>Setiap siswa/pengunjung ke perpustakaan dilarang merusak, menghilangkan, mengambil, dan/atau memindahkan koleksi perpustakaan dan fasilitas yang ada di perpustakaan.</li>
                <li>Hal-hal lain yang belum diatur dalam tata tertib ini akan ditentukan oleh penanggung jawab perpustakaan.</li>
              </ul>
            </Element>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InformationPage;