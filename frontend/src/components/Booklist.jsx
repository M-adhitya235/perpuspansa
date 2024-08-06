import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { FaSearch } from 'react-icons/fa';

const Booklist = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    setFilteredBooks(
      books.filter(book =>
        book.name.toLowerCase().includes(search.toLowerCase()) || 
        book.pengarang.toLowerCase().includes(search.toLowerCase()) ||
        book.penerbit.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, books]);

  const getBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/books');
      setBooks(response.data.books || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:3000/books/${bookId}`);
      getBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <h2 className="text-xl mb-6">List Of Books</h2>
      <div className="mb-4 flex justify-between items-center">
        <Link 
          to="/books/add" 
          className="inline-block px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Add Book
        </Link>
        <div className="flex items-center border border-gray-600 rounded w-full max-w-xs">
          <input
            type="text"
            placeholder="Search for books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border-none focus:outline-none w-full"
          />
          <FaSearch className="text-gray-800 mx-2" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/12 px-4 py-2 border border-gray-500 text-center">No</th>
              <th className="w-2/12 px-4 py-2 border border-gray-500 text-center">Book Name</th>
              <th className="w-2/12 px-4 py-2 border border-gray-500 text-center">Pengarang</th>
              <th className="w-2/12 px-4 py-2 border border-gray-500 text-center">Penerbit</th>
              <th className="w-2/12 px-4 py-2 border border-gray-500 text-center">ISBN</th>
              <th className="w-2/12 px-4 py-2 border border-gray-500 text-center">Kategori</th>
              <th className="w-2/12 px-4 py-2 border border-gray-500 text-center">Sumber</th>
              <th className="w-2/12 px-4 py-2 border border-gray-500 text-center">No Induk</th>
              <th className="w-2/12 px-4 py-2 border border-gray-500 text-center">No Pengenal</th>
              <th className="w-2/12 px-4 py-2 border border-gray-500 text-center">Bahasa</th>
              <th className="w-2/12 px-4 py-2 border border-gray-500 text-center">Link</th>
              <th className="w-2/12 px-4 py-2 border border-gray-500 text-center">Created By</th>
              <th className="w-2/12 px-4 py-2 border border-gray-500 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book, index) => (
                <tr key={book.uuid} className="bg-gray-100 border-b border-gray-800">
                  <td className="px-4 py-2 border border-gray-800 text-center">{index + 1}</td>
                  <td className="px-4 py-2 border border-gray-800 text-center">{book.name}</td>
                  <td className="px-4 py-2 border border-gray-800 text-center">{book.pengarang}</td>
                  <td className="px-4 py-2 border border-gray-800 text-center">{book.penerbit}</td>
                  <td className="px-4 py-2 border border-gray-800 text-center">{book.isbn}</td>
                  <td className="px-4 py-2 border border-gray-800 text-center">{book.kategori}</td>
                  <td className="px-4 py-2 border border-gray-800 text-center">{book.sumber}</td>
                  <td className="px-4 py-2 border border-gray-800 text-center">{book.noinduk}</td>
                  <td className="px-4 py-2 border border-gray-800 text-center">{book.nopengenal}</td>
                  <td className="px-4 py-2 border border-gray-800 text-center">{book.bahasa}</td>
                  <td className="px-4 py-2 border border-gray-800 text-center">
                    {book.link ? (
                      <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Buka Link
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="px-4 py-2 border border-gray-800 text-center">{book.user ? book.user.name : "Unknown"}</td>
                  <td className="px-4 py-2 flex justify-center space-x-2 text-center">
                    <Link to={`/books/edit/${book.uuid}`} className="text-blue-500 hover:underline text-center">Edit</Link>
                    <button onClick={() => deleteBook(book.uuid)} className="text-red-500 hover:underline text-center">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="13" className="text-center px-4 py-2 border border-gray-300">No books found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booklist;
