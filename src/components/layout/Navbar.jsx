import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    const navLinkClass = ({ isActive }) =>
        isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600";

    return (
        <nav className="bg-white shadow">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">CRM</div>

            {/* Navigation */}
            <div className="flex items-center gap-6">
            <NavLink to="/dashboard" className={navLinkClass}>
                Dashboard
            </NavLink>

            <NavLink to="/customers" className={navLinkClass}>
                Customers
            </NavLink>
            </div>

            {/* User */}
            <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{user?.name}</span>

            <button
                onClick={handleLogout}
                className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
                Logout
            </button>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;
