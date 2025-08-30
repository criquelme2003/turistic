"use client";
import { useParams, useRouter } from "next/navigation";

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

export default function PackageDetailPage() {
    const params = useParams();
    const router = useRouter();
    const pkg = packages.find((p) => p.id === Number(params.id));

    if (!pkg) {
        return (
            <div className="container mx-auto py-8">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center border border-red-200">
                    <div className="text-red-500 text-5xl mb-4">😞</div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">Paquete no encontrado</h2>
                    <p className="text-slate-600">El paquete que buscas no está disponible</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                <div className="text-center mb-6">
                    <div className="text-4xl mb-3">🏖️</div>
                    <h1 className="text-3xl font-bold text-slate-800 mb-3">{pkg.name}</h1>
                    <p className="text-slate-600 text-lg leading-relaxed">{pkg.description}</p>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 mb-6 border border-teal-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-slate-600 text-sm font-medium mb-1">Precio del paquete</p>
                            <p className="text-3xl font-bold text-teal-600">${pkg.price}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-slate-600 text-sm font-medium mb-1">Disponibilidad</p>
                            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${pkg.available
                                    ? "bg-emerald-100 text-emerald-700 border border-emerald-300"
                                    : "bg-red-100 text-red-700 border border-red-300"
                                }`}>
                                {pkg.available ? "✓ Disponible" : "✗ No disponible"}
                            </span>
                        </div>
                    </div>
                </div>

                <button
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-md"
                    disabled={!pkg.available}
                    onClick={() => router.push(`/reservation/${pkg.id}`)}
                >
                    {pkg.available ? "🎯 Reservar ahora" : "No disponible"}
                </button>
            </div>
        </div>
    );
}
