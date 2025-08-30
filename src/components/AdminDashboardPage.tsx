import React, { useState } from "react";

const reservas = [
    {
        id: 101,
        cliente: "Ana López",
        paquete: "Aventura en la Selva",
        fecha: "2025-09-10",
        estado: "Confirmada",
    },
    {
        id: 102,
        cliente: "Luis Pérez",
        paquete: "Descubre la Ciudad Colonial",
        fecha: "2025-09-15",
        estado: "Pendiente",
    },
];

const menu = [
    { key: "usuarios", label: "Usuarios" },
    { key: "reservas", label: "Reservas" },
    { key: "proveedores", label: "Proveedores" },
    { key: "reportes", label: "Reportes" },
];

const AdminDashboardPage = () => {
    const [active, setActive] = useState("reservas");

    return (
        <div className="flex min-h-[60vh]">
            <aside className="w-48 bg-blue-50 border-r p-4">
                <h2 className="font-bold text-lg mb-6">Panel Admin</h2>
                <ul className="space-y-2">
                    {menu.map((item) => (
                        <li key={item.key}>
                            <button
                                className={`w-full text-left px-3 py-2 rounded ${active === item.key ? "bg-blue-600 text-white" : "hover:bg-blue-100"}`}
                                onClick={() => setActive(item.key)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="flex-1 p-8">
                {active === "reservas" && (
                    <div>
                        <h3 className="text-xl font-bold mb-4">Reservas</h3>
                        <table className="w-full border rounded shadow">
                            <thead className="bg-blue-100">
                                <tr>
                                    <th className="px-4 py-2 border">ID</th>
                                    <th className="px-4 py-2 border">Cliente</th>
                                    <th className="px-4 py-2 border">Paquete</th>
                                    <th className="px-4 py-2 border">Fecha</th>
                                    <th className="px-4 py-2 border">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reservas.map((r) => (
                                    <tr key={r.id} className="hover:bg-blue-50">
                                        <td className="px-4 py-2 border">{r.id}</td>
                                        <td className="px-4 py-2 border">{r.cliente}</td>
                                        <td className="px-4 py-2 border">{r.paquete}</td>
                                        <td className="px-4 py-2 border">{r.fecha}</td>
                                        <td className="px-4 py-2 border">{r.estado}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {active !== "reservas" && (
                    <div className="text-gray-500 text-center mt-16">
                        <span className="text-lg">Sección en construcción: {menu.find((m) => m.key === active)?.label}</span>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboardPage;
