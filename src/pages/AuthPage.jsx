import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

export default function AuthPage({ setToken }) {
  const [isLogin, setIsLogin] = useState(true);
  const [isDark, setIsDark] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // Dark mode effect toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

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

      // Save token in localStorage and update state in parent
      localStorage.setItem("token", result.token);
      setToken(result.token);

      alert(`Welcome, ${result.user.username}`);

      // Navigate to homepage after login
      navigate("/homepage");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: isDark ? "#121212" : "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: isDark ? "#1e1e1e" : "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: isDark
            ? "0 0 10px rgba(0,0,0,0.8)"
            : "0 0 15px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
          position: "relative",
        }}
      >
        {/* Dark mode toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle dark mode"
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            backgroundColor: isDark ? "#4caf50" : "#388e3c",
            border: "none",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            color: "#fff",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        <h2
          style={{
            marginBottom: "25px",
            textAlign: "center",
            color: isDark ? "#a5d6a7" : "#2e7d32",
          }}
        >
          {isLogin ? "Login to EcoFinds" : "Sign Up for EcoFinds"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: "15px" }}>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: `1.5px solid ${isDark ? "#4caf50" : "#388e3c"}`,
              backgroundColor: isDark ? "#2e2e2e" : "#fff",
              color: isDark ? "#eee" : "#222",
            }}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "0.9rem", margin: 0 }}>
              {errors.email.message}
            </p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Min 6 characters" },
            })}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: `1.5px solid ${isDark ? "#4caf50" : "#388e3c"}`,
              backgroundColor: isDark ? "#2e2e2e" : "#fff",
              color: isDark ? "#eee" : "#222",
            }}
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "0.9rem", margin: 0 }}>
              {errors.password.message}
            </p>
          )}

          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Username"
                {...register("username", { required: "Username is required" })}
                style={{
                  padding: "12px",
                  borderRadius: "8px",
                  border: `1.5px solid ${isDark ? "#4caf50" : "#388e3c"}`,
                  backgroundColor: isDark ? "#2e2e2e" : "#fff",
                  color: isDark ? "#eee" : "#222",
                }}
              />
              {errors.username && (
                <p style={{ color: "red", fontSize: "0.9rem", margin: 0 }}>
                  {errors.username.message}
                </p>
              )}
            </>
          )}

          <button
            type="submit"
            style={{
              backgroundColor: isDark ? "#4caf50" : "#388e3c",
              border: "none",
              padding: "14px",
              borderRadius: "10px",
              color: "#fff",
              fontWeight: "600",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = isDark ? "#388e3c" : "#2e7d32")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = isDark ? "#4caf50" : "#388e3c")
            }
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: isDark ? "#a5d6a7" : "#2e7d32",
            fontSize: "0.95rem",
          }}
        >
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: isDark ? "#81c784" : "#1b5e20",
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontWeight: "600",
                }}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                style={{
                  background: "none",
                  border: "none",
                  color: isDark ? "#81c784" : "#1b5e20",
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontWeight: "600",
                }}
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
