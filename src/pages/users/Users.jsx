import { FaPlus } from "react-icons/fa";
import PageHeader from "../../components/PageHeader";
import Toolbar from "../../components/Toolbar";
import DataTable from "../../components/DataTable";
import { userColumns } from "../../tables/userColumns";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUsersAPI, deleteUserAPI } from "../../features/users/userAPI";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Users = () => {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [users, setUsers] = useState([]);
  const { user } = useSelector((state) => state.auth);

  const fetchUsers = async () => {
    try {
      const res = await getUsersAPI();
      setUsers(res.userDataList);
    } catch (error) {
      toast.error(error.response?.data?.message || "User fetching failed!");
    }
  }

  useEffect(() => {
    if (user) {
      fetchUsers();
    }
  }, [user]);
  // console.log(users);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this user?");
    if (!confirmDelete) return;
    try {
      const res = await deleteUserAPI(id);
      toast.success(res.message);
      // Refresh users
      await fetchUsers();
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
          columns={userColumns({ user, onDelete: handleDelete })}
          data={users}
          search={search}
          roleFilter={role}
        />
      </div>
    </>
  );
};

export default Users;