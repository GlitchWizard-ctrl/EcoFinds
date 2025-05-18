import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";

    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      localStorage.setItem("token", result.token);
      alert(`Welcome, ${result.user.username}`);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isLogin ? "Login to EcoFinds" : "Sign Up for EcoFinds"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              {...register("username", {
                required: "Username is required",
              })}
              className="w-full border p-2 rounded"
            />
          )}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-4">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
