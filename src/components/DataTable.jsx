import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

const DataTable = ({ columns, data }) => {
    const [sorting, setSorting] = useState([]);

    const table = useReactTable({
        data,
        columns,

        state: { sorting,},

        onSortingChange: setSorting,

        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    {/* Header */}
                    <thead className="bg-gray-50">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th
                            key={header.id}
                            onClick={header.column.getToggleSortingHandler()}
                            className="cursor-pointer border border-gray-500 bg-slate-900 px-6 py-3 text-left text-sm font-semibold text-gray-100 select-none"
                            >
                            <div className="flex items-center gap-2">
                                {flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                                )}

                                {{
                                asc: "▲",
                                desc: "▼",
                                }[header.column.getIsSorted()] ?? ""}
                            </div>
                            </th>
                        ))}
                        </tr>
                    ))}
                    </thead>

                    {/* Body */}
                    <tbody>
                    {table.getRowModel().rows.length ? (
                        table.getRowModel().rows.map((row) => (
                        <tr
                            key={row.id}
                            className="border-b border-gray-300 last:border-b-0 hover:bg-gray-50"
                        >
                            {row.getVisibleCells().map((cell) => (
                            <td
                                key={cell.id}
                                className="px-6 py-4 text-sm text-gray-700"
                            >
                                {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext(),
                                )}
                            </td>
                            ))}
                        </tr>
                        ))
                    ) : (
                        <tr>
                        <td
                            colSpan={columns.length}
                            className="py-8 text-center text-gray-500"
                        >
                            No records found.
                        </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;