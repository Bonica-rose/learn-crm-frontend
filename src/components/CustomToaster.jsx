import { Toaster, ToastBar } from "react-hot-toast";

export default function CustomToaster() {
    return (
        <Toaster
        position="top-right"
        toastOptions={{
            duration: 3000,
        }}
        >
        {(t) => (
            <div className="relative overflow-hidden rounded">
            <ToastBar toast={t} />

            {/* Progress Bar */}
            {!t.visible ? null : (                        
                <div
                className={`absolute bottom-0 left-0 h-1 animate-progress ${
                    t.type === "success"
                    ? "bg-green-500"
                    : t.type === "error"
                    ? "bg-red-500"
                    : "bg-blue-500"
                }`}
                style={{
                    animationDuration: `${t.duration}ms`,
                }}
                />
            )}
            </div>
        )}
        </Toaster>
    );
}