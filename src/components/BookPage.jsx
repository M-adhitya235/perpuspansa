// src/pages/BookPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; 
import headerImage from '../assets/pic-1.jpg'; 
import { FaBook, FaUsers, FaBrain, FaPaintBrush, FaCalculator, FaLanguage, FaFlask, FaGlobe, FaBookOpen, FaHeart, FaPeopleCarry, FaFrown, FaTheaterMasks, FaTasks, FaAtlas, FaUser } from 'react-icons/fa'; // Import icons
import Footer from '../components/Footer';

const categories = [
  { name: 'Kesenian, Hiburan, dan Olahraga', path: '/kategori/Kesenian-Hiburan-dan-Olahraga', icon: <FaPaintBrush /> },
  { name: 'Matematika', path: '/kategori/Matematika', icon: <FaCalculator /> },
  { name: 'Bahasa Indonesia', path: '/kategori/Bahasa-Indonesia', icon: <FaLanguage /> },
  { name: 'Ilmu Pengetahuan Alam (IPA)', path: '/kategori/IPA', icon: <FaFlask /> },
  { name: 'Ilmu Pengetahuan Sosial (IPS)', path: '/kategori/IPS', icon: <FaGlobe /> },
  { name: 'Pendidikan Agama', path: '/kategori/Pendidikan-Agama', icon: <FaBookOpen /> },
  { name: 'Healthy Living', path: '/kategori/Healthy-Living', icon: <FaHeart /> },
  { name: 'Sosial', path: '/kategori/Sosial', icon: <FaPeopleCarry /> },
  { name: 'Pendidikan Kewarganegaraan', path: '/kategori/Pendidikan-Kewarganegaraan', icon: <FaUser /> },
  { name: 'Seni Budaya', path: '/kategori/Seni-Budaya', icon: <FaTheaterMasks /> },
  { name: 'Prakarya', path: '/kategori/Prakarya', icon: <FaTasks /> },
  { name: 'Buku Fiksi', path: '/kategori/Fiksi', icon: <FaBookOpen /> },
];

const BookPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="relative">
        <img src={headerImage} alt="Header" className="w-full h-64 object-cover mt-16" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center p-6">
          <h1 className="text-4xl font-bold mb-2">Book Categories</h1>
          <p className="text-lg">Explore our diverse collection of book categories</p>
        </div>
      </header>
      <Navbar /> 
      <main className="flex-grow p-6 bg-gray-100">
        <section className="container mx-auto px-4">
          <h4 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
            Pilih subjek yang menarik bagi Anda
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center p-6 text-center text-gray-800 no-underline hover:bg-gray-50 transition-colors w-60 md:w-72 lg:w-80"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookPage;
