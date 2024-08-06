import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditProfile = () => {
  const { id } = useParams();
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
      const response = await axios.get(`http://localhost:3000/members/${id}`);
      setUser(response.data);
    } catch (error) {
      setError("Failed to fetch user");
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/members/${id}`, user);
      navigate("/profile");
    } catch (error) {
      setError("Failed to update user");
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="p-4 bg-gray-500 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-white mb-2">Edit Profile</h1>
      <div className="bg-gray-800 p-4 rounded-lg">
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-gray-300 mb-1">Nama:</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-300 mb-1">Kelas:</label>
            <input
              type="text"
              name="user_class"
              value={user.user_class}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-300 mb-1">Alamat:</label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-300 mb-1">Nomor Telepon:</label>
            <input
              type="text"
              name="phone_number"
              value={user.phone_number}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEditProfile;
