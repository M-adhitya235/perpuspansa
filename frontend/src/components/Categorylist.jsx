import React, { useState, useEffect } from 'react';
import axios from "axios";

const Categorylist = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

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
    try {
      const response = await axios.get(`${apiUrl}/books`);
      setBooks(response.data.books || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`${apiUrl}/books/${bookId}`);
      getBooks();
    } catch (error) {
      console.error("Failed to delete book:", error);
    }
  };

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
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book, index) => (
                <tr key={book.id} className="bg-gray-100 border-b">
                  <td className="px-4 py-2 border border-gray-800 text-center">{index + 1}</td>
                  <td className="px-4 py-2 border border-gray-800 text-center">{book.kategori}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center px-4 py-2 border border-gray-300">No categories found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categorylist;
