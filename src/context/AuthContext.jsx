import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const decodeToken = (token) => {
    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        return payload;
    } catch {
        return null;
    }
};

 export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
    const [userId, setUserId] = useState(localStorage.getItem("userId"));

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedUserId = localStorage.getItem("userId");

        console.log("Token found:", token); // Debug log
        console.log("User ID found:", storedUserId); // Debug log

        if (token && storedUserId) {
            const decodedToken = decodeToken(token);
            if (decodedToken && decodedToken.exp * 1000 > Date.now()) {
                setIsAuthenticated(true);
                setUserId(storedUserId);

                console.log("User is authenticated");
                console.log("User ID:", storedUserId);
            } else {
                logout();
            }
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedUserId = localStorage.getItem("userId");
      
        if (token && storedUserId) {
          setIsAuthenticated(true);
          setUserId(storedUserId);
        }
        setLoading(false); // End loading state
      }, []);
      
    const login = (token) => {
        localStorage.setItem("token", token);
        const decodedToken = decodeToken(token);
        if (decodedToken) {
            const userId = decodedToken.user_id;
            localStorage.setItem("userId", userId);
            setUserId(userId);
            setIsAuthenticated(true);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        setIsAuthenticated(false);
        setUserId(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userId, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

