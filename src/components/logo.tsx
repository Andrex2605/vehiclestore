import Image from 'next/image';

const Logo = () => {
    return (
        <div className="relative z-20 flex items-center text-lg font-medium w-48 md:w-64">
            <Image
                src='/car.svg'
                alt="car"
                width={150} // Ancho de la imagen
                height={150} // Alto de la imagen
                priority
            />
        </div>
    );
}

export default Logo;