import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { FaSearch } from 'react-icons/fa';

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState(""); 

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) || 
        user.role.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      const { users } = response.data; 
      setUsers(users);
    } catch (error) {
      setError("Failed to fetch users");
      console.error("Error fetching users:", error);
    }
  }

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      getUsers();
    } catch (error) {
      setError("Failed to delete user");
      console.error("Failed to delete user:", error);
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <h2 className="text-xl mb-6">List Of Users</h2>
      <div className="mb-4 flex justify-between items-center">
        <Link 
          to="/users/add" 
          className="inline-block px-6 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Add User
        </Link>
        <div className="flex items-center border border-gray-500 rounded w-full max-w-xs">
          <input
            type="text"
            placeholder="Search for users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border-none focus:outline-none w-full"
          />
          <FaSearch className="text-gray-800 mx-2" />
        </div>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/12 px-4 py-2 border border-gray-500 text-center">No</th>
              <th className="w-2/12 px-4 py-2 border border-gray-500 text-center">Name</th>
              <th className="w-3/12 px-4 py-2 border border-gray-500 text-center">Email</th>
              <th className="w-2/12 px-4 py-2 border border-gray-500 text-center">Role</th>
              <th className="w-2/12 px-4 py-2 border border-gray-500 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.uuid} className="bg-gray-100 border-b border-gray-800 text-center">
                <td className="px-4 py-2 border border-gray-800 text-center">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-800 text-center">{user.name}</td>
                <td className="px-4 py-2 border border-gray-800 text-center">{user.email}</td>
                <td className="px-4 py-2 border border-gray-800 text-center">{user.role}</td>
                <td className="px-4 py-2  flex space-x-2 justify-center text-center">
                  <Link to={`/users/edit/${user.uuid}`} className="text-blue-500 hover:underline">Edit</Link>
                  <button onClick={() => deleteUser(user.uuid)} className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userlist;
