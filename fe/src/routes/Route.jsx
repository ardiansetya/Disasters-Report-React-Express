import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import ProtectedRoutes from "./ProtectedRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>
    },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoutes>
                <Dashboard/>
            </ProtectedRoutes>
        )
    },
])

export default router