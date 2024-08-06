import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ikuti Kami</h2>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/perpuscahayaspansabpn/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaWhatsapp size={24} />
          </a>
        </div>

        {/* Garis pemisah tipis */}
        <hr className="border-t border-gray-600 mb-6 border-2" />

        <h2 className="text-2xl md:text-3xl font-bold mb-4">Alamat</h2>
        <p className="mb-4">
          Jl. Kapten Piere Tendean <br />
          Gunungsari Ilir, Kec. Balikpapan Tengah <br />
          Kota Balikpapan, Kalimantan Timur <br />
          76112
        </p>
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;