import React, { useState } from "react";
import { useParams } from "react-router-dom";

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

const ReservationFormPage = () => {
    const { id } = useParams();
    const pkg = packages.find((p) => p.id === Number(id));
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        fechaInicio: "",
        fechaFin: "",
        metodoPago: "Tarjeta",
    });
    const [submitted, setSubmitted] = useState(false);

    if (!pkg) {
        return <div className="text-center text-red-600">Paquete no encontrado.</div>;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow p-8">
            <h1 className="text-2xl font-bold mb-4">Reserva: {pkg.name}</h1>
            {submitted ? (
                <div className="text-green-600 font-semibold text-center">
                    ¡Reserva realizada con éxito!<br />
                    <span className="text-gray-700">Resumen:</span><br />
                    Cliente: {form.nombre}<br />
                    Email: {form.email}<br />
                    Fechas: {form.fechaInicio} a {form.fechaFin}<br />
                    Método de pago: {form.metodoPago}<br />
                    Paquete: {pkg.name} (${pkg.price})
                </div>
            ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-1 font-medium">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            required
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block mb-1 font-medium">Fecha inicio</label>
                            <input
                                type="date"
                                name="fechaInicio"
                                value={form.fechaInicio}
                                onChange={handleChange}
                                required
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-1 font-medium">Fecha fin</label>
                            <input
                                type="date"
                                name="fechaFin"
                                value={form.fechaFin}
                                onChange={handleChange}
                                required
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Método de pago</label>
                        <select
                            name="metodoPago"
                            value={form.metodoPago}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        >
                            <option value="Tarjeta">Tarjeta</option>
                            <option value="Transferencia">Transferencia</option>
                            <option value="Efectivo">Efectivo</option>
                        </select>
                    </div>
                    <div className="bg-gray-100 rounded p-4">
                        <span className="font-semibold">Resumen:</span><br />
                        Paquete: {pkg.name}<br />
                        Precio: ${pkg.price}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Confirmar reserva
                    </button>
                </form>
            )}
        </div>
    );
};

export default ReservationFormPage;
