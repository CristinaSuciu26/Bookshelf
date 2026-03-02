import { useState } from "react";
import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./components/themes/themes";
import { GlobalStyles } from "./components/themes/globalStyles";
import { Home } from "./components/pages/homePage/Home";
import Header from "./components/header/Header";
import { Login } from "./components/pages/loginPage/Login";
import { Register } from "./components/pages/registerPage/Register";
import { ShoppingList } from "./components/pages/shoppingList/ShoppingList";
import { ProtectedRoute } from "./components/routes/PrivateRoutes.jsx";
import { AuthProvider } from "./components/auth/AuthProvider.jsx";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <GlobalStyles />
      <AuthProvider>
        <Router>
          <Header isDark={isDark} toggle={() => setIsDark((prev) => !prev)} />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/shopping-list"
              element={
                <ProtectedRoute>
                  <ShoppingList />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
