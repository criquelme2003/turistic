import Link from "next/link";

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

export default function Home() {
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-4xl font-bold mb-8 text-center text-slate-800 tracking-tight">
                ✈️ Descubre tu Próxima Aventura
            </h1>
            <p className="text-center text-slate-600 mb-10 text-lg max-w-2xl mx-auto">
                Explora nuestros paquetes turísticos cuidadosamente seleccionados para crear recuerdos inolvidables
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packages.map((pkg) => (
                    <div key={pkg.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between border border-slate-200 hover:border-teal-300">
                        <div>
                            <h2 className="text-xl font-bold mb-3 text-slate-800">{pkg.name}</h2>
                            <p className="mb-4 text-slate-600 leading-relaxed">{pkg.description}</p>
                            <div className="flex items-center justify-between mb-3">
                                <p className="text-2xl font-bold text-teal-600">${pkg.price}</p>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${pkg.available
                                        ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                                        : "bg-red-100 text-red-700 border border-red-200"
                                    }`}>
                                    {pkg.available ? "✓ Disponible" : "✗ No disponible"}
                                </span>
                            </div>
                        </div>
                        <Link
                            href={`/package/${pkg.id}`}
                            className="mt-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 text-center font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Ver detalle →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
