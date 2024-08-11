import React, { useState, useEffect } from "react";
import axiosInstance from "../features/axiosInstance"; 
import { useNavigate } from "react-router-dom";
import { FaEdit } from 'react-icons/fa';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "",
    user_class: "",
    address: "",
    phone_number: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await axiosInstance.get(`/members`);
      setUser(response.data);
    } catch (error) {
      setError("Failed to fetch user");
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleEditClick = () => {
    navigate(`/members/edit/${user.uuid}`); // Ganti dengan rute edit yang sesuai
  };

  return (
    <div className="p-4 bg-gray-500 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-white mb-2">Profile Page</h1>
      <div className="bg-gray-800 p-4 rounded-lg">
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        <div className="mb-2">
          <h2 className="text-lg text-gray-300 mb-1">Nama: {user.name}</h2>
        </div>
        <div className="mb-2">
          <h2 className="text-lg text-gray-300 mb-1">Kelas: {user.user_class}</h2>
        </div>
        <div className="mb-2">
          <h2 className="text-lg text-gray-300 mb-1">Alamat: {user.address}</h2>
        </div>
        <div className="mb-2">
          <h2 className="text-lg text-gray-300 mb-1">Nomor Telepon: {user.phone_number}</h2>
        </div>
        {user && user.role === "admin" && (
          <div className="text-center mt-4">
            <button
              onClick={handleEditClick}
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaEdit className="mr-1" /> Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
