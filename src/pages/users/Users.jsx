import { FaPlus } from "react-icons/fa";
import PageHeader from "../../components/PageHeader";
import Toolbar from "../../components/Toolbar";
import DataTable from "../../components/DataTable";
import { userColumns } from "../../tables/userColumns";
import { useState } from "react";

const Users = () => {
    const [search, setSearch] = useState("");
    const users = [
      {
        name: "David",
        email: "david@gmail.com",
        role: "Staff",
        job_title: "Sales Executive",
      },
      {
        name: "Kevin",
        email: "dkevin@gmail.com",
        role: "Staff",
        job_title: "Sales Executive",
      },
    ];
    return (
      <>
        <PageHeader
          title="Users"
          subtitle="Manage all system users."
          action={
            <button className="flex items-center gap-2 rounded-lg bg-blue-800 px-4 py-1.5 text-white hover:bg-blue-700">
              <FaPlus />
              Add User
            </button>
          }
        />

        <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <Toolbar
            search={search}
            onSearch={setSearch}
            filters={
              <>
                <select className="rounded-lg border border-gray-300 px-3 py-2">
                  <option>All Roles</option>
                  <option>Admin</option>
                  <option>Staff</option>
                </select>
              </>
            }
          />

          <DataTable columns={userColumns} data={users} />
        </div>
      </>
    );
};

export default Users;