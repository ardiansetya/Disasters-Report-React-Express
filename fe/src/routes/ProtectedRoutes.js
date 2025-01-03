import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.user);

    useEffect(() => {
        // Set loading to false once token is checked
        if (token === null) {
            navigate("/login");
        } 
    }, [token, navigate]);

    return children;
};

export default ProtectedRoutes;
