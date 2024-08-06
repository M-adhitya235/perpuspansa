import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import Layout from "./Layout";
import axios from "axios";

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [totalBuku, setTotalBuku] = useState(0);
    const [totalKategori, setTotalKategori] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);
    const { isError, user } = useSelector(state => state.auth);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bookResponse = await axios.get("http://localhost:3000/books");
                const userResponse = await axios.get("http://localhost:3000/users");

                setTotalBuku(bookResponse.data.total);
                setTotalKategori(bookResponse.data.totalCategories);
                setTotalUsers(userResponse.data.total); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate("/");
        }
    }, [isError, navigate]);

    return (
        <Layout>
            <h1 className="text-black text-xl">Dashboard</h1>
            <p className="text-black">Welcome back <strong>{user && user.name}</strong></p>
            <div className="flex-1 p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-green-300 text-black justify-center text-center p-2 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-2">Total Buku</h2>
                        <p className="text-xl">{totalBuku}</p>
                    </div>
                    <div className="bg-blue-300 text-black justify-center text-center p-2 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-2">Total Kategori</h2>
                        <p className="text-xl">{totalKategori}</p>
                    </div>
                    <div className="bg-red-300 text-black justify-center text-center p-2 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-2">Total Pengguna</h2>
                        <p className="text-xl">{totalUsers}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
