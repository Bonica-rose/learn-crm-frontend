const PageHeader = ({ title, subtitle, action }) => {
    return (
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

                {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
            </div>

            {action && <div>{action}</div>}
        </div>
    );
};

export default PageHeader;
