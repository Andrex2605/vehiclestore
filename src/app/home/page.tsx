'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebaseconfig';
import { collection, getDocs } from 'firebase/firestore';
import Navbar from '@/components/navBar';
import CarCard from '@/components/card';
import { Car } from '@/models/car';

const HomePage = () => {
    const [cars, setCars] = useState<Car[]>([]);

    const fetchCars = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'cars'));
            const carsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Car[];
            setCars(carsData);
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };

    useEffect(() => {
        fetchCars();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Navbar con fondo transparente */}
            <nav className="absolute top-0 left-0 w-full bg-transparent text-white p-4 z-20">
                <Navbar />
            </nav>

            {/* Header con fondo e imagen */}
            <header className="relative w-full h-[70vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/carBack.jpg')" }}>
                {/* Capa de degradado transparente encima de la imagen */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>

                {/* Contenido sobre la imagen */}
                <h1 className="text-white text-5xl font-bold relative z-10">Explora los Mejores Autos</h1>
            </header>

            <section className="container mx-auto py-10">
                <h2 className="text-3xl font-bold text-center mb-6">Galería de Autos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {cars.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
