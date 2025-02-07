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
    <div className="flex justify-center items-center min-h-screen bg-gray-500" style={{
        backgroundImage: 'url("/carBack.jpg"), linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 2))',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
        
      <div className="w-full md:w-[600px] lg:w-[700px] h-auto bg-white rounded-lg shadow-xl overflow-hidden flex">

        {/* Left side with background and logo */}
        <div className="hidden lg:flex w-1/2 bg-auth relative p-10 flex-col justify-center items-center text-white">
          <div className="absolute inset-0 bg-opacity-50 backdrop-blur-lg rounded-lg"></div>
          <Logo />
        </div>

        {/* Right side with authentication button */}
        <div className="w-full lg:w-1/2 p-8 flex justify-center items-center bg-white">
          <div className="w-full max-w-sm space-y-6">
            <h2 className="text-2xl font-semibold text-center text-gray-800">Sign In</h2>
            <ButtonAuth session={session} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default AuthPage;
