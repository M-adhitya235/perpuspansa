import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../features/axiosInstance";
import perpusCahayaImg from '../assets/perpuscahaya.jpg';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [user_class, setUserClass] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    console.log({
      name,
      user_class,
      address,
      phone_number,
      email,
      password,
      confPassword
    });
  
    try {
      await axiosInstance.post('/users', {
        name,
        user_class,
        address,
        phone_number,
        email,
        password,
        confPassword, 
        role: "user",
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg || "Registration failed");
      } else {
        setMsg("An error occurred");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${perpusCahayaImg})` }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-600 mb-4">Register</h1>
          <p className="text-red-500 text-center mb-4">{msg}</p>
          <form onSubmit={saveUser}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-blue-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Kelas</label>
              <input
                type="text"
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-blue-700"
                value={user_class}
                onChange={(e) => setUserClass(e.target.value)}
                placeholder="Class"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Alamat</label>
              <input
                type="text"
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-blue-700"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Nomor Telepon</label>
              <input
                type="text"
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-blue-700"
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-blue-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-blue-700"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
              <input
                type="password"
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-blue-700"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                placeholder="******"
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <Link to="/login" className="text-xs text-gray-500">
              Sudah memiliki akun? <span className="text-blue-700">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
