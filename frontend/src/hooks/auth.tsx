import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface LoggedUser {
  _id: string;
  name: string;
  email: string;
}

interface AuthState {
  loggedUser: LoggedUser;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: LoggedUser;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

  const [data, setData] = useState(() => {
    const loggedUser = localStorage.getItem('@RENTX:loggedUser');

    if (loggedUser) {
      return { loggedUser: JSON.parse(loggedUser) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const data = { email, password } 

    const response = await api.post('/authenticate', data);
    
    const { loggedUser } = response.data;

    localStorage.setItem('@RENTX:loggedUser', JSON.stringify(loggedUser));

    setData({ loggedUser });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@RENTX:loggedUser');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.loggedUser, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  console.log(context.user)

  return context;
}

export { AuthProvider, useAuth };
