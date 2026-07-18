import { Link } from "react-router-dom";

const Unauthorized = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold text-red-600">403</h1>

            <h2 className="mt-4 text-2xl font-semibold">Access Denied</h2>

            <p className="mt-2 text-gray-500">
                You don't have permission to access this page.
            </p>

            <Link
                to="/dashboard"
                className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
                Go to Dashboard
            </Link>
        </div>
    );
};

export default Unauthorized;
