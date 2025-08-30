"use client";
import { useState } from "react";

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

export default function AdminDashboardPage() {
    const [active, setActive] = useState("reservas");

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-8 py-6 border-b border-slate-200">
                    <h1 className="text-3xl font-bold text-slate-800 flex items-center">
                        <span className="text-4xl mr-3">🏢</span>
                        Panel de Administración
                    </h1>
                    <p className="text-slate-600 mt-2">Gestiona todas las operaciones del sistema</p>
                </div>

                <div className="flex min-h-[70vh]">
                    <aside className="w-64 bg-gradient-to-b from-slate-50 to-slate-100 border-r border-slate-200 p-6">
                        <ul className="space-y-2">
                            {menu.map((item) => (
                                <li key={item.key}>
                                    <button
                                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium ${active === item.key
                                                ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg transform scale-105"
                                                : "text-slate-700 hover:bg-slate-200 hover:text-slate-800"
                                            }`}
                                        onClick={() => setActive(item.key)}
                                    >
                                        {item.key === "usuarios" && "👥 "}
                                        {item.key === "reservas" && "📋 "}
                                        {item.key === "proveedores" && "🤝 "}
                                        {item.key === "reportes" && "📊 "}
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    <main className="flex-1 p-8 bg-white">
                        {active === "reservas" && (
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                                        📋 Gestión de Reservas
                                    </h2>
                                    <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium border border-teal-200">
                                        {reservas.length} reservas activas
                                    </span>
                                </div>

                                <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                                    <table className="w-full">
                                        <thead className="bg-gradient-to-r from-slate-100 to-blue-100">
                                            <tr>
                                                <th className="px-6 py-4 text-left font-semibold text-slate-700 border-b border-slate-200">ID</th>
                                                <th className="px-6 py-4 text-left font-semibold text-slate-700 border-b border-slate-200">Cliente</th>
                                                <th className="px-6 py-4 text-left font-semibold text-slate-700 border-b border-slate-200">Paquete</th>
                                                <th className="px-6 py-4 text-left font-semibold text-slate-700 border-b border-slate-200">Fecha</th>
                                                <th className="px-6 py-4 text-left font-semibold text-slate-700 border-b border-slate-200">Estado</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {reservas.map((r, index) => (
                                                <tr key={r.id} className={`hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 transition-all duration-200 ${index % 2 === 0 ? "bg-white" : "bg-slate-25"
                                                    }`}>
                                                    <td className="px-6 py-4 font-mono text-slate-600">#{r.id}</td>
                                                    <td className="px-6 py-4 font-semibold text-slate-800">{r.cliente}</td>
                                                    <td className="px-6 py-4 text-slate-700">{r.paquete}</td>
                                                    <td className="px-6 py-4 text-slate-600">{r.fecha}</td>
                                                    <td className="px-6 py-4">
                                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${r.estado === "Confirmada"
                                                                ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                                                                : "bg-amber-100 text-amber-700 border-amber-200"
                                                            }`}>
                                                            {r.estado === "Confirmada" ? "✓" : "⏳"} {r.estado}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {active !== "reservas" && (
                            <div className="text-center mt-20">
                                <div className="text-6xl mb-4">🚧</div>
                                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                                    Sección en construcción
                                </h3>
                                <p className="text-slate-600 mb-4">
                                    La sección <span className="font-semibold text-teal-600">{menu.find((m) => m.key === active)?.label}</span> estará disponible pronto
                                </p>
                                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-100 to-blue-100 rounded-lg border border-slate-200">
                                    <span className="text-slate-700 text-sm">🔜 Próximamente</span>
                                </div>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
