import { createContext } from 'react';

const AuthContext = createContext({
  userToken: null,
  Login: () => {},
  logout: () => {},
});

export default AuthContext;
