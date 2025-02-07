import ButtonAuth from "@/components/buttonAuth";
import Logo from "@/components/logo";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { SESSION_COOKIE_NAME } from "../../../constants";

export const metadata: Metadata = {
    title: 'Sign in',
    description: 'Sign in to get access to vehicles list'
}
const AuthPage = () => {
    const session = cookies().get(SESSION_COOKIE_NAME)?.value || null;

    return (
        <div className="flex justify-center items-center md:h-[95vh] md:px-10 lg:px-20">
            <div className="container h-[85vh] flex-col justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-full flex-col p-10 text-white lg:flex">
                    <div className="bg-auth absolute inset-0">
                    </div>
                    <Logo/>
                </div>

                <div className="pt-10 lg:p-8 flex items-center md:h-[70vh]">
                    <div className="mx-auto flex w-full justify-center space-y-6 sm:w-[450px]">
                        <ButtonAuth session={session}/>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default AuthPage;