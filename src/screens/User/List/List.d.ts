import { UserData } from "../User";

export interface UserTableProps {
  users: UserData[];
  usersList: Function;
}

export interface ModalEditUserProps {
  isOpen: any;
  onClose: any;
  onOpen: any;
  userEdit: UserData | undefined;
  setUserEdit: any;
  usersList: Function;
}

export interface ModalCreateUserProps {
  isOpen: any;
  onClose: any;
  usersList: Function;
}

export interface FormData {
  name: string;
  email: string;
}
