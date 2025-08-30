import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Turistic ERP",
    description: "Sistema de reservas turísticas",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen`}
            >
                <nav className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-4 flex justify-between items-center shadow-lg">
                    <div className="font-bold text-xl tracking-wide">🌴 Turistic ERP</div>
                    <div className="space-x-6">
                        <Link href="/" className="hover:text-cyan-200 transition-colors duration-200 font-medium">Inicio</Link>
                        <Link href="/admin" className="hover:text-cyan-200 transition-colors duration-200 font-medium">Panel Admin</Link>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    );
}
