import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Homepage from "./pages/Homepage";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Listen for token changes in localStorage (optional)
  useEffect(() => {
    function onStorageChange() {
      setToken(localStorage.getItem("token"));
    }
    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/homepage" /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={
            token ? <Navigate to="/homepage" /> : <AuthPage setToken={setToken} />
          }
        />
        <Route
          path="/homepage"
          element={token ? <Homepage /> : <Navigate to="/auth" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
