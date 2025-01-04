import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.user);
    const authToken = localStorage.getItem("authToken");

    useEffect(() => {
        // Set loading to false once token is checked
        if (token === null || token === undefined || !authToken || authToken === null || authToken === undefined) {
            navigate("/login");
        } 
    }, [token, navigate, authToken]);

    return children;
};

export default ProtectedRoutes;
