import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <main className="mx-auto max-w-7xl p-6">
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;
