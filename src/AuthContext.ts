import { createContext } from "react";

export interface IAuthContext {
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const defaultAuthContext: IAuthContext = {
  signIn: async (username: string, password: string) => {},
  signOut: async () => {},
};

export const AuthContext = createContext<IAuthContext>(defaultAuthContext);
