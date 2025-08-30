import React from "react";
import { Link } from "react-router-dom";

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

const HomePage = () => (
    <div>
        <h1 className="text-3xl font-bold mb-6 text-center">Buscar Paquetes Turísticos</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">{pkg.name}</h2>
                        <p className="mb-2 text-gray-700">{pkg.description}</p>
                        <p className="mb-2 font-bold text-blue-600">${pkg.price}</p>
                        <p className={pkg.available ? "text-green-600" : "text-red-600"}>
                            {pkg.available ? "Disponible" : "No disponible"}
                        </p>
                    </div>
                    <Link
                        to={`/package/${pkg.id}`}
                        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Ver detalle
                    </Link>
                </div>
            ))}
        </div>
    </div>
);

export default HomePage;
