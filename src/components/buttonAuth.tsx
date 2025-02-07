'use client';

import { useUserSession } from '@/hooks/use_user_session';
import { signInWithGoogle, signOutWithGoogle } from '@/lib/auth';
import { createSession, removeSession } from '@/actions/auth-actions';

export function ButtonAuth({ session }: { session: string | null }) {
  const userSessionId = useUserSession(session);

  const handleSignIn = async () => {
    const userUid = await signInWithGoogle();
    if (userUid) {
      await createSession(userUid);
      window.location.href = '/home'; // Redirige a la página de inicio
    }
  };

  const handleSignOut = async () => {
    await signOutWithGoogle();
    await removeSession();
    window.location.href = '/login'; // Redirige a la página de login
  };

  if (!userSessionId) {
    return (
      <button
        onClick={handleSignIn}
        className="flex items-center justify-center px-6 py-2 bg-[#4285F4] text-white font-semibold rounded-lg shadow-md hover:bg-[#357AE8] transition duration-300"
      >
        <svg
          className="w-5 h-5 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="24"
          height="24"
        >
          <path
            fill="#fff"
            d="M23.49 12.3c0-.72-.06-1.41-.18-2.07H12v4.02h6.3c-.27 1.42-1.05 2.62-2.19 3.35v2.78h3.56c2.09-1.92 3.29-4.77 3.29-8.07z"
          ></path>
          <path
            fill="#fff"
            d="M12 6.24c1.1 0 2.04.37 2.74.98l2.03-2.03C15.74 4.03 14.01 3 12 3 9.03 3 6.45 4.71 5.53 7.48l-3.77-.02v2.78h2.26c1.29-2.37 3.73-4.02 6.98-4.02z"
          ></path>
          <path
            fill="#fff"
            d="M5.53 7.48C6.45 4.71 9.03 3 12 3c2.01 0 3.74 1.03 4.77 2.95l2.03-2.03C15.74 4.03 14.01 3 12 3 9.03 3 6.45 4.71 5.53 7.48z"
          ></path>
        </svg>
        Sign in with Google
      </button>
    );
  }

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center justify-center px-6 py-2 bg-[#db4437] text-white font-semibold rounded-lg shadow-md hover:bg-[#c1351d] transition duration-300"
    >
      <svg
        className="w-5 h-5 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="24"
        height="24"
      >
        <path
          fill="#fff"
          d="M23.49 12.3c0-.72-.06-1.41-.18-2.07H12v4.02h6.3c-.27 1.42-1.05 2.62-2.19 3.35v2.78h3.56c2.09-1.92 3.29-4.77 3.29-8.07z"
        ></path>
        <path
          fill="#fff"
          d="M12 6.24c1.1 0 2.04.37 2.74.98l2.03-2.03C15.74 4.03 14.01 3 12 3 9.03 3 6.45 4.71 5.53 7.48l-3.77-.02v2.78h2.26c1.29-2.37 3.73-4.02 6.98-4.02z"
        ></path>
        <path
          fill="#fff"
          d="M5.53 7.48C6.45 4.71 9.03 3 12 3c2.01 0 3.74 1.03 4.77 2.95l2.03-2.03C15.74 4.03 14.01 3 12 3 9.03 3 6.45 4.71 5.53 7.48z"
        ></path>
      </svg>
      LogOut
    </button>
  );
}

export default ButtonAuth;
