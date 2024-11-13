import React, { useState } from "react";
import defaultimg from "/assets/defaultimg.svg";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!username.trim()) newErrors.username = "Username is required";
        if (!firstName.trim()) newErrors.firstName = "First name is required";
        if (!lastName.trim()) newErrors.lastName = "Last name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
        if (!password) newErrors.password = "Password is required";
        if (!confirmPassword) newErrors.confirmPassword = "Please confirm your password";
        else if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";

        setErrors(newErrors);
        setIsFormValid(Object.keys(newErrors).length === 0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        validateForm();

        if (isFormValid) {
            setIsLoading(true); // Start loading
            try {
                const response = await fetch("https://youmecode.onrender.com/youmecode/create-user/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, first_name: firstName, last_name: lastName, email, password }),
                });

                if (response.ok) {
                    navigate("/login");
                } else {
                    const data = await response.json();
                    setErrors({ apiError: data.message || "Sign-up failed. Try again." });
                }
            } catch (error) {
                setErrors({ apiError: "Network error. Please try again later." });
            } finally {
                setIsLoading(false); // End loading
            }
        }
    };

    return (
        <div className="flex flex-col w-full justify-center items-center">
            <div className="items-center justify-center flex">
                <img src={defaultimg} alt="" className="w-1/2" />
            </div>
            <div className="md:w-[40%]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center bg-white/20 backdrop-blur-md shadow-white rounded-md shadow-xs py-10 px-10">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} onBlur={validateForm} className="w-full ring-0 outline-none shadow-xl text-white bg-transparent border rounded-md px-4 py-2 border-primary" />
                    {errors.username && <p className="text-red-500">{errors.username}</p>}
                    
                    <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} onBlur={validateForm} className="w-full ring-0 outline-none shadow-xl text-white bg-transparent border rounded-md px-4 py-2 border-primary" />
                    {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                    
                    <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} onBlur={validateForm} className="w-full ring-0 outline-none shadow-xl text-white bg-transparent border rounded-md px-4 py-2 border-primary" />
                    {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                    
                    <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateForm} className="w-full ring-0 outline-none shadow-xl text-white bg-transparent border rounded-md px-4 py-2 border-primary" />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                    
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={validateForm} className="w-full ring-0 outline-none shadow-xl text-white bg-transparent border rounded-md px-4 py-2 border-primary" />
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                    
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} onBlur={validateForm} className="w-full ring-0 outline-none shadow-xl text-white bg-transparent border rounded-md px-4 py-2 border-primary" />
                    {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                    
                    {errors.apiError && <p className="text-red-500">{errors.apiError}</p>}
                    
                    <button
                        type="submit"
                        disabled={!isFormValid || isLoading}
                        className={`text-white transition ease-in rounded-lg px-6 py-3 border border-transparent ${
                            isFormValid && !isLoading ? "bg-primary hover:bg-transparent hover:border hover:border-primary" : "bg-gray-500 cursor-not-allowed"
                        }`}
                    >
                        {isLoading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
