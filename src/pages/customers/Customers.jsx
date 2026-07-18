import { FaPlus } from "react-icons/fa";
import PageHeader from "../../components/PageHeader";
import Toolbar from "../../components/Toolbar";
import DataTable from "../../components/DataTable";
import { customerColumns } from "../../tables/customerColumns";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    getCustomersAPI,
    deleteCustomerAPI,
    getAllCustomersAPI,
    deleteCustomerForAdminAPI,
} from "../../features/customers/customerAPI";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Customers = () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [customers, setCustomers] = useState([]);
    const { user } = useSelector((state) => state.auth);

    const fetchCustomers = async () => {
        try {
            let res;
            if (user.role === "Admin") {
                res = await getAllCustomersAPI();
            } else {
                res = await getCustomersAPI();
            }
            setCustomers(res.customerDataList);
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Customer fetching failed!",
            );
        }
    }

    useEffect(() => {
        if (user) {
            fetchCustomers();
        }
    }, [user]);
    // console.log(customers);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Delete this customer?");
        if (!confirmDelete) return;
        try {
            let res;
            if (user.role === "Admin") {
                res = await deleteCustomerForAdminAPI(id);
            } else {
                res = await deleteCustomerAPI(id);
            }
            toast.success(res.message);
            // Refresh customers
            await fetchCustomers();
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Customer deletion failed!",
            );
        }
    };
    
    if (!customers) return <p>Loading...</p>;

    return (
        <>
            <PageHeader
            title="Customers"
            subtitle="Manage all customers."
            action={
                <Link
                to="/customers/add"
                className="flex items-center gap-2 rounded-lg bg-blue-800 px-4 py-1.5 text-white hover:bg-blue-700"
                >
                <FaPlus />
                Add Customer
                </Link>
            }
            />

            <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <Toolbar
                search={search}
                onSearch={setSearch}
                filters={
                <>
                    <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="rounded-lg border border-gray-300 px-3 py-2"
                    >
                    <option value="">All Status</option>
                    <option value="Lead">Lead</option>
                    <option value="Customer">Customer</option>
                    <option value="Inactive">Inactive</option>
                    </select>
                </>
                }
            />

            <DataTable
                columns={customerColumns({ user, onDelete: handleDelete })}
                data={customers}
                search={search}
                statusFilter={status}
            />
            </div>
        </>
    );
};

export default Customers;
