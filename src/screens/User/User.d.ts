export interface UserData {
  id: number;
  name: string;
  email: string;
  created_at: string;
  is_active: boolean;
}

export interface AdminData {
  name: string;
  email: string;
  created_at: Date;
}
