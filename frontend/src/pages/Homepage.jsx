import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBook, FaPen, FaBible, FaEllipsisH } from 'react-icons/fa'; 
import Navbar from "../components/Navbar";
import headerImage from '../assets/pic-1.jpg';
import Footer from '../components/Footer';

const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); 

 
  const handleMoreClick = () => {
    navigate('/book'); 
  };

  return (
    <div className="min-h-screen flex flex-col">
    <Navbar />
      <img src={headerImage} alt="Header" className="w-full h-64 object-cover mt-16" /> 
      

      <div className="p-4">
        <h2 id="welcome" className="text-2xl font-bold mb-4 text-center">Pintasan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
          <Link to="/genre/Fiction" className="bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center h-12 text-center text-gray-800 no-underline hover:bg-gray-200 transition-colors">
            <FaBook size={20} className="mr-2" />
            <h3 className="text-lg">Buku Fiksi</h3>
          </Link>
          <Link to="/genre/Non-fiction" className="bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center h-12 text-center text-gray-800 no-underline hover:bg-gray-200 transition-colors">
            <FaPen size={20} className="mr-2" />
            <h3 className="text-lg">Non-Fiksi</h3>
          </Link>
          <Link to="/genre/Religion" className="bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center h-12 text-center text-gray-800 no-underline hover:bg-gray-200 transition-colors">
            <FaBible size={20} className="mr-2" />
            <h3 className="text-lg">Agama</h3>
          </Link>
          <button className="bg-blue-500 text-white rounded-md flex items-center justify-center h-12 text-center no-underline hover:bg-blue-600 transition-colors" onClick={handleMoreClick}>
            <FaEllipsisH size={20} className="mr-2" />
            <h3 className="text-lg">More</h3>
          </button>
        </div>
      </div>

      <div className="container mx-auto mt-8 px-4 flex-grow">
        <section className="mt-8">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Selamat Datang di Homepage</h2>
            <p className="text-gray-600 leading-relaxed text-center">
              Selamat datang di website kami! Kami berkomitmen untuk memberikan pengalaman terbaik dalam mencari dan membaca buku. Jelajahi berbagai genre dan temukan buku-buku menarik yang dapat memperkaya pengetahuan Anda.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Moto Perpustakaan</h2>
            <p className="text-gray-600 leading-relaxed text-center">
              Dengan membaca kita tahu dan semakin paham.
            </p>
          </div>
        </section>
      </div>

      {/* Move Footer outside of the container */}
      <Footer />
    </div>
  );
};

export default Homepage;