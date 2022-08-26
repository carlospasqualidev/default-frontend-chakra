import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
//Components
import { AuthProvider } from "../context/AuthProvider";
import { ProtectedLayout } from "../components/ProtectedLayout";
import { Sidebar } from "../components/Layout/Sidebar/Sidebar";

//Profile
import { Profile } from "../screens/User/Profile";

//Access
import { Login } from "../screens/Access/Login";
import { Register } from "../screens/Access/Register";

//Users

import { UsersList } from "../screens/User/List";

import { UserDetails } from "../screens/User/Details";

function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<Login />} />

          <Route
            path="/"
            element={
              <ProtectedLayout>
                <Sidebar />
              </ProtectedLayout>
            }
          >
            <Route path="/profile" element={<Profile />} />

            <Route path="/users" element={<Outlet />}>
              <Route index element={<UsersList />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRoutes;
