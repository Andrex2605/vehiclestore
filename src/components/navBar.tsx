'use client';

import { signOutWithGoogle } from '@/lib/auth';
import Logo from './logo';
import { removeSession } from '@/actions/auth-actions';

const Navbar = () => {
     const handleSignOut = async () => {
        await signOutWithGoogle();
        await removeSession();
        window.location.href = '/';  // Redirige a la página de login
      };
  return (
    <div className="bg-transparent min-h-screen">
      <nav className="bg-gray-900 text-white w-[90%] mx-auto mt-5 rounded-3xl shadow-lg p-4 flex justify-between items-center pr-8 pl-8">
        {/* Ajustamos el tamaño del logo */}
        <div className="text-2xl font-bold flex items-center">
          <Logo/>
        </div>

        <ul className="flex space-x-7">
          <li>
            <a href="/home" className="text-lg font-semibold hover:text-gray-300 transition duration-300">Inicio</a>
          </li>
          <li>
            <a href="/admin" className="text-lg font-semibold hover:text-gray-300 transition duration-300">Admin</a>
          </li>
          <li>
            <button onClick={
                handleSignOut
                
            } className=''>LogOut</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
