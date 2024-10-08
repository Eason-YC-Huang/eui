import {Spinner} from "../spinner/Spinner.jsx";

export function Button({
                           type = "info",
                           children = <></>, onClick = () => {},
                           buttonClassName = "", overrideButtonClassName = false,
                           showLoading = true, isLoading = false, loadingClassName = ""
                       }) {

    const typeClasses = {
        info: 'bg-blue-200 hover:bg-blue-300 text-blue-800',
        success: 'bg-green-200 hover:bg-green-300 text-green-800',
        warning: 'bg-yellow-200 hover:bg-yellow-300 text-yellow-800',
        error: 'bg-red-200 hover:bg-red-300 text-red-800',
    };

    return <button
        className={overrideButtonClassName ? buttonClassName : `${typeClasses[type]} font-medium py-2 px-4 rounded ${buttonClassName}`}
        onClick={onClick}
        disabled={isLoading}>
        <div className={"flex justify-center items-center gap-x-2"}>
            {isLoading && showLoading && <Spinner className={loadingClassName}/>}
            {children}
        </div>
    </button>;
}