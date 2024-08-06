import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditMember = () => {
  const [name, setName] = useState("");
  const [user_class, setUserClass] = useState(""); 
  const [address, setAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState(""); 
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getMemberById = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/members/${id}`);
        console.log("Data member: ", response.data); 
        setName(response.data.name);
        setUserClass(response.data.user_class); 
        setAddress(response.data.address);
        setPhoneNumber(response.data.phone_number); 
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getMemberById();
  }, [id]);

  const updateMember = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/members/${id}`, {
        name,
        user_class,
        address,
        phone_number,
      });
      navigate("/members");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-white mb-4">Members</h1>
      <h2 className="text-xl text-gray-300 mb-6">Update Member</h2>
      <div className="bg-gray-900 p-6 rounded-lg">
        <p className="text-red-500 text-center mb-4">{msg}</p>
        <form onSubmit={updateMember}>
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
            <label className="block text-gray-300 text-sm font-bold mb-2">Kelas</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={user_class} 
              onChange={(e) => setUserClass(e.target.value)} 
              placeholder="Kelas"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Alamat</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Nomor Telepon</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={phone_number} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
              placeholder="Nomor Telepon"
            />
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEditMember;
