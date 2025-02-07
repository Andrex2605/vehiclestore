'use client';

import { useUserSession } from '@/hooks/use_user_session';
import { signInWithGoogle, signOutWithGoogle } from '@/lib/auth';
import { createSession, removeSession } from '@/actions/auth-actions';
import { useRouter } from 'next/router';

export function ButtonAuth({ session }: { session: string | null }) {
  const router = useRouter();
  const userSessionId = useUserSession(session);

  const handleSignIn = async () => {
    const userUid = await signInWithGoogle();
    if (userUid) {
      await createSession(userUid);
      router.push("/home")
    }
  };

  const handleSignOut = async () => {
    await signOutWithGoogle();
    await removeSession();
  };

  if (!userSessionId) {
    return (
        <button onClick={handleSignIn}>Sign In</button>
    );
  }
  return( <button onClick={handleSignOut} className='text-lg font-semibold hover:text-gray-300 transition duration-300'>LogOut</button>)
  

}

export default ButtonAuth;