import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddBook = () => {
  const [name, setName] = useState("");
  const [pengarang, setPengarang] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [isbn, setIsbn] = useState("");
  const [kategori, setKategori] = useState("");
  const [sumber, setSumber] = useState("");
  const [noinduk, setNoinduk] = useState("");
  const [nopengenal, setNopengenal] = useState("");
  const [bahasa, setBahasa] = useState("");
  const [link, setLink] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveBook = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/books", {
        name: name,
        pengarang: pengarang,
        penerbit: penerbit,
        isbn: isbn,
        kategori: kategori,
        sumber: sumber,
        noinduk: noinduk,
        nopengenal: nopengenal,
        bahasa: bahasa,
        link: link ? link : null 
      });
      navigate("/books");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="p-6 bg-[#ffdc64] rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-black mb-4">Books</h1>
      <h2 className="text-xl text-black mb-6">Add New Book</h2>
      <div className="bg-gray-500 p-6 rounded-lg">
        <p className="text-red-500 text-center mb-4">{msg}</p>
        <form onSubmit={saveBook}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Pengarang</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={pengarang}
              onChange={(e) => setPengarang(e.target.value)}
              placeholder="Pengarang"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Penerbit</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={penerbit}
              onChange={(e) => setPenerbit(e.target.value)}
              placeholder="Penerbit"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">ISBN</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              placeholder="ISBN"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Kategori</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
              placeholder="Kategori"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Sumber</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={sumber}
              onChange={(e) => setSumber(e.target.value)}
              placeholder="Sumber"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">No Induk</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={noinduk}
              onChange={(e) => setNoinduk(e.target.value)}
              placeholder="No Induk"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">No Pengenal</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={nopengenal}
              onChange={(e) => setNopengenal(e.target.value)}
              placeholder="No Pengenal"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Bahasa</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={bahasa}
              onChange={(e) => setBahasa(e.target.value)}
              placeholder="Bahasa"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Link</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Masukkan URL"
            />
            <div className="mt-2">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Buka Link
                </a>
              ) : (
                <span className="text-gray-300">N/A</span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full px-4 py-2 bg-blue-400 text-white rounded hover:bg-[#064cac]">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAddBook;
