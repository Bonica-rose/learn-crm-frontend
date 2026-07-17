import { formatDateTime } from "../utils/formatDate";
import { FaEdit, FaTrash } from "react-icons/fa";

export const userColumns = ({ onDelete }) => [
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
            <button
            onClick={() => onDelete(row.original._id)}
            className="rounded bg-red-100 p-2 text-red-600 hover:bg-red-200"
            >
            <FaTrash />
            </button>
        </div>
        ),
    },
];