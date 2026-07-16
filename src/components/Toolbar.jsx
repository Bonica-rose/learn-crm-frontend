const Toolbar = ({ search, onSearch, filters, actions }) => {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Left */}
            <div className="flex flex-1 flex-wrap items-center gap-3">
            {/* Search */}
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-1.5 focus:border-blue-500 focus:outline-none md:w-80"
            />

            {/* Filters */}
            {filters}
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">{actions}</div>
        </div>
    );
};

export default Toolbar;
