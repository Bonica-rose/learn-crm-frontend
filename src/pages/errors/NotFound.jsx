import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
            <h1 className="text-7xl font-bold text-blue-600">404</h1>

            <h2 className="mt-4 text-3xl font-semibold text-gray-800">
                Page Not Found
            </h2>

            <p className="mt-2 max-w-md text-gray-500">
                Sorry, the page you're looking for doesn't exist or may have been moved.
            </p>

            <Link
                to="/dashboard"
                className="mt-8 rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
            >
                Back to Dashboard
            </Link>
        </div>
    );
};

export default NotFound;
