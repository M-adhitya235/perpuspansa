import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { FaSearch } from 'react-icons/fa';

const Memberlist = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState(""); 

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter(user => {
        const name = user.name ? user.name.toLowerCase() : "";
        const address = user.address ? user.address.toLowerCase() : "";
        return name.includes(search.toLowerCase()) || address.includes(search.toLowerCase());
      })
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
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-4">Members</h1>
          <h2 className="text-xl mb-0">List Of Members</h2>
        </div>
        <div className="flex items-center border border-gray-500 rounded w-full max-w-xs mt-10">
          <input
            type="text"
            placeholder="Search for members..."
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
              <th className="w-3/12 px-4 py-2 border border-gray-500 text-center">Kelas</th>
              <th className="w-2/12 px-4 py-2 border border-gray-500 text-center">Alamat</th>
              <th className="w-2/12 px-4 py-2 border border-gray-500 text-center">Nomor Telepon</th>
              <th className="w-2/12 px-4 py-2 border border-gray-500 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => {
                if (user.role === "admin") return null;
                return (
                <tr key={user.uuid} className="bg-gray-100 border-b border-gray-800">
                    <td className="px-4 py-2 border border-gray-800 text-center">{index}</td>
                    <td className="px-4 py-2 border border-gray-800 text-center">{user.name}</td>
                    <td className="px-4 py-2 border border-gray-800 text-center">{user.user_class}</td>
                    <td className="px-4 py-2 border border-gray-800 text-center">{user.address}</td>
                    <td className="px-4 py-2 border border-gray-800 text-center">{user.phone_number}</td>
                    <td className="px-4 py-2 flex space-x-2 justify-center">
                    <Link to={`/members/edit/${user.uuid}`} className="text-blue-500 hover:underline">Edit</Link>
                    <button onClick={() => deleteUser(user.uuid)} className="text-red-500 hover:underline">Delete</button>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Memberlist;
