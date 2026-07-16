import { useState } from "react";

const UserForm = ({ initialValues, onSubmit, loading = false }) => {
    const [formData, setFormData] = useState(
        initialValues ?? {
        name: "",
        email: "",
        phone: "",
        role: "",
        status: "Active",
        password: "",
        },
    );

    const handleChange = (e) => {
        setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-lg border bg-white p-6 shadow-sm"
        >
        <div className="grid gap-6 md:grid-cols-2">
            {/* Name */}
            <div>
            <label className="mb-2 block text-sm font-medium">Name</label>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border px-3 py-2"
            />
            </div>

            {/* Email */}
            <div>
            <label className="mb-2 block text-sm font-medium">Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border px-3 py-2"
            />
            </div>

            {/* Phone */}
            <div>
            <label className="mb-2 block text-sm font-medium">Phone</label>
            <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border px-3 py-2"
            />
            </div>

            {/* Role */}
            <div>
            <label className="mb-2 block text-sm font-medium">Role</label>
            <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full rounded-lg border px-3 py-2"
            >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Sales">Sales</option>
                <option value="Manager">Manager</option>
            </select>
            </div>

            {/* Status */}
            <div>
            <label className="mb-2 block text-sm font-medium">Status</label>
            <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-lg border px-3 py-2"
            >
                <option>Active</option>
                <option>Inactive</option>
            </select>
            </div>

            {/* Password */}
            <div>
            <label className="mb-2 block text-sm font-medium">Password</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-lg border px-3 py-2"
            />
            </div>
        </div>

        <div className="flex justify-end gap-3">
            <button type="button" className="rounded-lg border px-5 py-2">
            Cancel
            </button>

            <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
            {loading ? "Saving..." : "Save User"}
            </button>
        </div>
        </form>
    );
};

export default UserForm;
