import { formatDateTime } from "../utils/formatDate";
import { FaEdit, FaTrash } from "react-icons/fa";
import canAccess from "../utils/canAccess";

export const userColumns = ({ user, onDelete }) => {
    const canDelete = canAccess(user.role, "user:delete");

    const columns = [
        {
            accessorKey: "name",
            header: "User",
        },
        {
            accessorKey: "email",
            header: "Email",
        },
        {
            accessorKey: "role",
            header: "Role",
        },
        {
            accessorKey: "job_title",
            header: "Position",
        },
        {
            accessorKey: "createdAt",
            header: "Created",
            cell: ({ row }) => formatDateTime(row.original.createdAt),
        },
        {
            header: "Action",
            cell: ({ row }) => (
            <div className="flex gap-2">
                {canDelete && row.original._id === user._id && (
                <span className="rounded bg-slate-100 p-2 text-slate-600 hover:bg-slate-200">
                    NA
                </span>
                )}

                {canDelete && row.original._id !== user._id && (
                <button
                    onClick={() => onDelete(row.original._id)}
                    className="rounded bg-red-100 p-2 text-red-600 hover:bg-red-200"
                >
                    <FaTrash />
                </button>
                )}
            </div>
            ),
        },
    ];

    return columns;
};