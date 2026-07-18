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
            cell: ({ row }) => {
                const isCurrentUser = row.original._id === user._id;

                return (
                    <div className="flex gap-2">
                    {canDelete &&
                        (isCurrentUser ? (
                        <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
                            N/A
                        </span>
                        ) : (
                        <button
                            onClick={() => onDelete(row.original._id)}
                            className="rounded bg-red-100 p-2 text-red-600 hover:bg-red-200"
                        >
                            <FaTrash />
                        </button>
                        ))}
                    </div>
                );
            },
        },
    ];

    return columns;
};