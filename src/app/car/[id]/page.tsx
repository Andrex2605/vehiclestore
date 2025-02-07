import Logo from "@/components/logo";
import Navbar from "@/components/navBar";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home page'
}
const AuthPage = () => {
    return (
        <header> <Navbar></Navbar>
        <div className="flex justify-center items-center md:h-[95vh] md:px-10 lg:px-20">
            <div className="container h-[85vh] flex-col justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-full flex-col p-10 text-white lg:flex items-center justify-center">
                    <div className="bg-auth absolute inset-0">
                    </div>
                    <Logo/>
                </div>

                <div className="pt-10 lg:p-8 flex items-center md:h-[70vh]">
                    <div className="mx-auto flex w-full justify-center space-y-6 sm:w-[450px]">
                        <h1>DETALLE DE VEHICULO</h1>
                    </div>

                </div>

            </div>
        </div>
        </header>
    );
}

export default AuthPage;