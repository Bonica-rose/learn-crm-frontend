import { FaEdit, FaTrash } from "react-icons/fa";
import canAccess from "../utils/canAccess";
import { Link } from "react-router-dom";

export const customerColumns = ({ user, onDelete }) => {
    const canEdit = canAccess(user.role, "customer:edit");
    const canDelete = canAccess(user.role, "customer:delete");

    const columns = [
        {
        accessorKey: "name",
        header: "Customer",
        },
        {
        accessorKey: "status",
        header: "Status",
        },
        {
        accessorKey: "email",
        header: "Email",
        },
        {
        accessorKey: "phone",
        header: "Phone",
        },
        {
        accessorKey: "company",
        header: "Company",
        }
    ];

    // Only Admin sees this column
    if (user.role === "Admin") {
        columns.push({
            accessorKey: "createdBy.name",
            header: "Created By",
            cell: ({ row }) => (
                <span>
                <b>{row.original.createdBy?.role}</b> -{" "}
                {row.original.createdBy?.name}
                </span>
            ),
        });
    }
        
    columns.push({
        header: "Actions",
        cell: ({ row }) => (
        <div className="flex gap-2">
            {canEdit && (
            <Link
                to={`/customers/edit/${row.original._id}`}
                className="rounded bg-sky-100 p-2 text-sky-600 hover:bg-sky-200"
            >
                <FaEdit />
            </Link>
            )}
            {canDelete && (
            <button
                onClick={() => onDelete(row.original._id)}
                className="rounded bg-red-100 p-2 text-red-600 hover:bg-red-200"
            >
                <FaTrash />
            </button>
            )}
        </div>
        ),
    });

    return columns;
};;