import {useEffect} from "react";

export function Modal({
                             isOpen,
                             setIsOpen,
                             children,
                             useDefaultHeader = true,
                             headerTitle = "",
                             modalClassName = "",
                             overrideModalClassName = false
                         }) {

    useEffect(() => {
        const handleEsc = (event) => {if (event.key === 'Escape') {setIsOpen();}};
        window.addEventListener('keydown', handleEsc);
        return () => {window.removeEventListener('keydown', handleEsc);};
    }, [isOpen]);

    return (
        !isOpen ? <></> :
            <div className={`fixed inset-0 z-50 flex items-center justify-center`}>
                <div
                    className={overrideModalClassName ? modalClassName : `flex flex-col min-w-[500px] max-h-[80%] overflow-hidden px-4 py-2 gap-y-2 border shadow rounded-xl ${modalClassName}`}>
                    {!useDefaultHeader ? <></> :
                        <div
                            className={"flex flex-row justify-between items-center border-b-2 border-b-zinc-200 py-2 mb-2"}>
                            <h1 className={"text-xl font-bold"}>{headerTitle}</h1>
                            <button onClick={() => setIsOpen((cur) => !cur)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={"w-6 h-6 hover:text-red-500"} fill="currentColor"
                                     viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                    }
                    {children}
                </div>
            </div>
    );
}