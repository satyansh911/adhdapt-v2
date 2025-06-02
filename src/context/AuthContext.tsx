'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useUserStore } from '@/store/useUserStore';

interface AuthContextType {
  loading: boolean;
  user: FirebaseUser | null;
}

const AuthContext = createContext<AuthContextType>({ loading: true, user: null });

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const setUserStore = useUserStore((state) => state.setUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        setUserStore({
          id: firebaseUser.uid,
          name: firebaseUser.displayName || '',
          email: firebaseUser.email || '',
          avatar: firebaseUser.photoURL || '',
        });
      } else {
        setUser(null);
        setUserStore(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [setUserStore]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};