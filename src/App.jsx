
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/homepage";
function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/dashboard" /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={token ? <Navigate to="/dashboard" /> : <AuthPage />}
        />
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/auth" />}
        />
	<Route
  	  path="/"
  	  element={token ? <HomePage /> : <Navigate to="/auth" />}
	/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


