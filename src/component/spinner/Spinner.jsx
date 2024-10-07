export function Spinner({
                            className = "",
                            fullscreen = false
                        }) {
    return (
        <div className={fullscreen ? "fixed inset-0 z-50 flex items-center justify-center" : ""}>
            <div
                className={`inline-block h-8 w-8 rounded-full border-4 border-solid border-current border-e-transparent animate-spin align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${className}`}
                role="status">
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
        </div>
    )
}