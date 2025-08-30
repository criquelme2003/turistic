import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const packages = [
    {
        id: 1,
        name: "Aventura en la Selva",
        description: "Explora la selva con guías expertos y actividades extremas.",
        price: 350,
        available: true,
    },
    {
        id: 2,
        name: "Descubre la Ciudad Colonial",
        description: "Tour guiado por la ciudad histórica y sus monumentos.",
        price: 220,
        available: true,
    },
    {
        id: 3,
        name: "Relax en la Playa",
        description: "Paquete todo incluido en resort frente al mar.",
        price: 500,
        available: false,
    },
];

const PackageDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const pkg = packages.find((p) => p.id === Number(id));

    if (!pkg) {
        return <div className="text-center text-red-600">Paquete no encontrado.</div>;
    }

    return (
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-8">
            <h1 className="text-2xl font-bold mb-4">{pkg.name}</h1>
            <p className="mb-2 text-gray-700">{pkg.description}</p>
            <p className="mb-2 font-bold text-blue-600">Precio: ${pkg.price}</p>
            <p className={pkg.available ? "text-green-600" : "text-red-600"}>
                {pkg.available ? "Disponible" : "No disponible"}
            </p>
            <button
                className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition disabled:opacity-50"
                disabled={!pkg.available}
                onClick={() => navigate(`/reservation/${pkg.id}`)}
            >
                Reservar
            </button>
        </div>
    );
};

export default PackageDetailPage;
