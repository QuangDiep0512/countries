import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';
import { useState, useEffect, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    const unsubcribed = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });

        localStorage.setItem('user', JSON.stringify({ displayName, email, uid, photoURL }));
        // navigate("/");
        // const token = await user.getIdToken();
        // console.log("get token: ", token);
        return;
      }
      // navigate("/login");
      setUser({});
      localStorage.removeItem('user');
    });

    return () => {
      unsubcribed();
    };
  }, [navigate]);
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
