import { AdminData } from "../User";

export interface DetailsProps {
  editing: boolean;
  setEditing: any;
  setUserData: any;
  userData: AdminData;
}

export interface FieldProps {
  title: string;
  children: JSX.Element;
}

export interface FormData {
  name: string;
  email: string;
  password: string;
}
