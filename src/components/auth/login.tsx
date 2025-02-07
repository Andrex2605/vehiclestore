'use client'



import { signInWithGoogle } from "@/lib/auth";

const Auth = () => {


    return (
        <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-[family-name:var(--font-geist-mono)] mb-20">Sing In</h1>
            <form>
                <div className="mb-3 p-20">
                        <button onClick={signInWithGoogle}>Iniciar sesión con Google</button>
                </div>
            </form>
        </div>
    );
}

export default Auth;

