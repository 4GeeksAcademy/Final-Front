import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import NavBar from "./component/Navbar";
import { Footer } from "./component/footer";
import { DashboardAdmin } from "./pages/dashboardAdmin";
import { DashboardTeacher } from "./pages/dashboardTeacher";
import { DashboardRepresentative } from "./pages/dashboardRepresentante";
import RegistrationForm from './component/RegistrationForm';
import LoginForm from './component/LoginForm';
import ParentDashboard from "./pages/ParentDashboard.jsx";
import ProtectedRoute from "./component/ProtectedRoutes";
import Unauthorized from "./pages/Unauthorized";


import { Context } from "./store/appContext";

const Layout = () => {
    const { store } = useContext(Context)
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") {
        return <div>Error: Backend URL no configurada</div>;
    }

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <NavBar />
                    <Routes>
                        {/* Rutas Públicas */}
                        <Route element={<Home />} path="/home" />
                        <Route element={<Home />} path="/" />
                        <Route element={<RegistrationForm />} path="/register" />
                        <Route element={<LoginForm />} path="/login" />
                        <Route
                            path="/dashboard/admin"
                            element={
                                <ProtectedRoute roles={["admin"]}>
                                    <DashboardAdmin />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/dashboard/teacher"
                            element={
                                <ProtectedRoute roles={["docente"]}>
                                    <DashboardTeacher />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/dashboard/parent"
                            element={
                                <ProtectedRoute roles={["representante"]}>
                                    <ParentDashboard />
                                </ProtectedRoute>
                            } />

                        <Route element={<Unauthorized />} path="/unauthorized" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);