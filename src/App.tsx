import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "@/components/HomePage";
import PackageDetailPage from "@/components/PackageDetailPage";
import ReservationFormPage from "@/components/ReservationFormPage";
import AdminDashboardPage from "@/components/AdminDashboardPage";

const Navbar = () => (
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center shadow">
        <div className="font-bold text-lg">Turistic ERP</div>
        <div className="space-x-4">
            <Link to="/" className="hover:underline">Inicio</Link>
            <Link to="/admin" className="hover:underline">Panel Admin</Link>
        </div>
    </nav>
);

const App = () => (
    <Router>
        <Navbar />
        <div className="container mx-auto py-6">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/package/:id" element={<PackageDetailPage />} />
                <Route path="/reservation/:id" element={<ReservationFormPage />} />
                <Route path="/admin" element={<AdminDashboardPage />} />
            </Routes>
        </div>
    </Router>
);

export default App;
