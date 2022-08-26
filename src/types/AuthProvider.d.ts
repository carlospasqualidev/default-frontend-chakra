export interface IUser {
  email?: string;
  token?: string;
}

export interface IAuthProvider {
  children: JSX.Element;
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
