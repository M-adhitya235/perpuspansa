import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { FaSearch } from 'react-icons/fa';

const Categorylist = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);


  useEffect(() => {
    getBooks();
  }, []);


  useEffect(() => {
    setFilteredBooks(
      books.filter(book =>
        book.kategori.toLowerCase().includes(search.toLowerCase()) 
      )
    );
  }, [search, books]);

  const getBooks = async () => {
    const response = await axios.get('http://localhost:3000/books');
    setBooks(response.data.books); 
  }

  const deleteBook = async (bookId) => {
    await axios.delete(`http://localhost:3000/books/${bookId}`);
    getBooks();
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Category</h1>
      <h2 className="text-xl mb-6">List Of Category</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/12 px-2 py-1 border border-gray-500 text-center">No</th>
            <th className="w-2/12 px-2 py-1 border border-gray-500 text-center">Kategori</th>
          </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book, index) => (
              <tr key={book.id} className="bg-gray-100 border-b">
                <td className="px-4 py-2 border border-gray-800 text-center">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-800 text-center">{book.kategori}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categorylist;