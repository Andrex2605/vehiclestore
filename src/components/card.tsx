import { Car } from "@/models/car";

interface CarCardProps {
    car: Car;
  }

function CarCard({car}:CarCardProps) {
  const { marca, modelo, imagen, año, descripcion } = car;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-900">
      <img className="w-full h-48 object-cover" src={imagen} alt={`${marca} ${modelo}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{marca} {modelo}</div>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Año:</span> {año}
        </p>
        <p className="text-gray-700 text-base mt-2">
          {descripcion}
        </p>
      </div>
    </div>
  );
}
export default CarCard;