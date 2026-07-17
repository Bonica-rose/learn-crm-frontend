import { FaPlus } from "react-icons/fa";
import PageHeader from "../../components/PageHeader";
import Toolbar from "../../components/Toolbar";
import DataTable from "../../components/DataTable";
import { userColumns } from "../../tables/userColumns";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUsersAPI, deleteUserAPI } from "../../features/users/userAPI";
import toast from "react-hot-toast";

const Users = () => {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await getUsersAPI();
        setUsers(res.userDataList);
      } catch (error) {
        toast.error(error.message || "User fetching failed!");
      }      
    }

    fetchUsers();
  }, []);
  // console.log(users);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this user?");
    if (!confirmDelete) return;
    try {
      const res = await deleteUserAPI(id);
      toast.success(res.message);
      // Refresh users
      fetchUsers();
    } catch (error) {
      toast.error(error.response?.data?.message || "User deletion failed!");
    }
  };

  if (!users) return <p>Loading...</p>;
  return (
    <>
      <PageHeader
        title="Users"
        subtitle="Manage all system users."
        action={
          <Link
            to=""
            className="flex items-center gap-2 rounded-lg bg-blue-800 px-4 py-1.5 text-white hover:bg-blue-700"
          >
            <FaPlus />
            Add User
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
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="rounded-lg border border-gray-300 px-3 py-2"
              >
                <option value="">All Roles</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
              </select>
            </>
          }
        />

        <DataTable
          columns={userColumns({ onDelete: handleDelete })}
          data={users}
          search={search}
          roleFilter={role}
        />
      </div>
    </>
  );
};

export default Users;