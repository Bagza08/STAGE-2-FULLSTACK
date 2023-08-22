export interface IUser {
  id?: number;
  username: string;
  full_name: string;
  email: string;
  profile_picture: string;
}

export interface IRegister {
  username: string;
  full_name: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}
