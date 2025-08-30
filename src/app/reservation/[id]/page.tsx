"use client";
import { useParams } from "next/navigation";
import { useState } from "react";

const packages = [
    {
        id: 1,
        name: "Aventura en la Selva",
        price: 350,
    },
    {
        id: 2,
        name: "Descubre la Ciudad Colonial",
        price: 220,
    },
    {
        id: 3,
        name: "Relax en la Playa",
        price: 500,
    },
];

export default function ReservationFormPage() {
    const params = useParams();
    const pkg = packages.find((p) => p.id === Number(params.id));
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        fechaInicio: "",
        fechaFin: "",
        metodoPago: "Tarjeta",
    });
    const [submitted, setSubmitted] = useState(false);

    if (!pkg) {
        return (
            <div className="container mx-auto py-6">
                <div className="text-center text-red-600">Paquete no encontrado.</div>
            </div>
        );
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                {submitted ? (
                    <div className="text-center">
                        <div className="text-6xl mb-4">🎉</div>
                        <h1 className="text-2xl font-bold text-slate-800 mb-4">¡Reserva Confirmada!</h1>
                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                            <div className="text-left space-y-2">
                                <div className="flex justify-between">
                                    <span className="font-medium text-slate-600">Cliente:</span>
                                    <span className="text-slate-800">{form.nombre}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium text-slate-600">Email:</span>
                                    <span className="text-slate-800">{form.email}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium text-slate-600">Fechas:</span>
                                    <span className="text-slate-800">{form.fechaInicio} a {form.fechaFin}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium text-slate-600">Método de pago:</span>
                                    <span className="text-slate-800">{form.metodoPago}</span>
                                </div>
                                <div className="flex justify-between border-t pt-2 mt-2">
                                    <span className="font-semibold text-slate-700">Paquete:</span>
                                    <span className="font-semibold text-teal-600">{pkg.name} (${pkg.price})</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-8">
                            <div className="text-4xl mb-3">📝</div>
                            <h1 className="text-3xl font-bold text-slate-800 mb-2">Completar Reserva</h1>
                            <p className="text-slate-600">Para: <span className="font-semibold text-teal-600">{pkg.name}</span></p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-2 font-semibold text-slate-700">Nombre completo</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={form.nombre}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 text-slate-700"
                                        placeholder="Tu nombre completo"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 font-semibold text-slate-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 text-slate-700"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-2 font-semibold text-slate-700">📅 Fecha inicio</label>
                                    <input
                                        type="date"
                                        name="fechaInicio"
                                        value={form.fechaInicio}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 text-slate-700"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 font-semibold text-slate-700">📅 Fecha fin</label>
                                    <input
                                        type="date"
                                        name="fechaFin"
                                        value={form.fechaFin}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 text-slate-700"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block mb-2 font-semibold text-slate-700">💳 Método de pago</label>
                                <select
                                    name="metodoPago"
                                    value={form.metodoPago}
                                    onChange={handleChange}
                                    className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 text-slate-700"
                                >
                                    <option value="Tarjeta">💳 Tarjeta de crédito/débito</option>
                                    <option value="Transferencia">🏦 Transferencia bancaria</option>
                                    <option value="Efectivo">💵 Efectivo</option>
                                </select>
                            </div>

                            <div className="bg-gradient-to-r from-slate-50 to-teal-50 rounded-xl p-6 border border-slate-200">
                                <h3 className="font-bold text-slate-800 mb-3">📋 Resumen de la reserva</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-slate-600">Paquete:</span>
                                        <span className="font-semibold text-slate-800">{pkg.name}</span>
                                    </div>
                                    <div className="flex justify-between border-t pt-2">
                                        <span className="text-slate-600">Total:</span>
                                        <span className="text-2xl font-bold text-teal-600">${pkg.price}</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                🎯 Confirmar reserva
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
