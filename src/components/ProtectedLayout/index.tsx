import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: any }) => {
  const auth = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (!auth.email) {
      navigate("/login");
    }
  }, []);

  return children;
};
