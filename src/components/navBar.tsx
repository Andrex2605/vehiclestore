
import Link from 'next/link';
import Logo from './logo';

const Navbar = () => {

  return (
    <nav className="bg-gray-800 pl-10 pr-10">
      <div className="container mx-auto flex justify-between items-center">
        <Logo/>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home" className="text-white hover:text-gray-300">Inicio</Link>
          </li>
          <li>
          <Link href="/admin" className="text-white hover:text-gray-300">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;