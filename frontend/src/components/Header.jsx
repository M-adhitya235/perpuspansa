import React from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogOut, reset } from "../features/authSlice";

const Header = ({ open }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  };


  return (
    <div className={`flex items-center justify-between p-3 duration-500`} style={{ backgroundColor: "#064cac" }}>
      <h1 className="text-white text-xl">PERPUSTAKAAN CAHAYA SMPN 1 BPP</h1>
      <div className="flex items-center">
        <button onClick={logout} className="bg-red-200 text-black px-4 py-2 rounded-md">Logout</button>
      </div>
    </div>
  );
};

export default Header;
