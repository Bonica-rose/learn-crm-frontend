const CustomerForm = ({ methods, onSubmit, loading = false, buttonText }) => {
    const btnLoadingText = (buttonText.includes('Update')) ? 'Updating...' : 'Saving';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
        >
            <div className="grid gap-6 md:grid-cols-2">
            {/* Name */}
            <div>
                <label className="mb-1 block text-sm font-medium">Name</label>
                <input
                type="text"
                name="name"
                {...register("name")}
                className="w-full rounded-lg border border-gray-400 px-3 py-1.5 outline-none transition focus:border-blue-500"
                />
                {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
            </div>

            {/* Email */}
            <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input
                type="email"
                name="email"
                {...register("email")}
                className="w-full rounded-lg border border-gray-400 px-3 py-1.5 outline-none transition focus:border-blue-500"
                />
                {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
            </div>

            {/* Phone */}
            <div>
                <label className="mb-1 block text-sm font-medium">Phone</label>
                <input
                type="tel"
                name="phone"
                {...register("phone")}
                className="w-full rounded-lg border border-gray-400 px-3 py-1.5 outline-none transition focus:border-blue-500"
                />
                {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
            </div>

            {/* Company */}
            <div>
                <label className="mb-1 block text-sm font-medium">Company</label>
                <input
                type="text"
                name="company"
                {...register("company")}
                className="w-full rounded-lg border border-gray-400 px-3 py-1.5 outline-none transition focus:border-blue-500"
                />
                {errors.company && (
                <p className="text-sm text-red-500">{errors.company.message}</p>
                )}
            </div>

            {/* Address */}
            <div>
                <label className="mb-1 block text-sm font-medium">Address</label>
                <input
                type="text"
                name="address"
                {...register("address")}
                className="w-full rounded-lg border border-gray-400 px-3 py-1.5 outline-none transition focus:border-blue-500"
                />
                {errors.company && (
                <p className="text-sm text-red-500">{errors.address.message}</p>
                )}
            </div>

            {/* Status */}
            <div>
                <label className="mb-1 block text-sm font-medium">Status</label>
                <select
                name="status"
                {...register("status")}
                className="w-full rounded-lg border border-gray-400 px-3 py-2 outline-none transition focus:border-blue-500"
                >
                <option value="Lead">Lead</option>
                <option value="Customer">Customer</option>
                <option value="Inactive">Inactive</option>
                </select>
                {errors.status && (
                <p className="text-sm text-red-500">{errors.status.message}</p>
                )}
            </div>
            </div>

            <div className="flex justify-end gap-3">
                <button
                    type="submit"
                    disabled={loading}
                    className="rounded-lg bg-blue-800 px-3 py-2 text-white hover:bg-blue-900"
                >
                    {loading ? btnLoadingText : buttonText}
                </button>
            </div>
        </form>
    );
};

export default CustomerForm;
