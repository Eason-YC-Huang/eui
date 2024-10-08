import React, {useEffect} from 'react';
export const AlertManager = ({alerts = [], addAlert, removeAlert}) => {
    return (
        alerts.length === 0 ? <></> :
            <div className="fixed top-0 z-50 flex items-center justify-center w-full p-4">
                <div className="basis-[80%]">
                    {alerts.map(alert => (
                        <Alert
                            key={alert.id}
                            createTime={alert.createTime}
                            message={alert.message}
                            type={alert.type}
                            duration={alert.duration}
                            onClose={() => removeAlert({id: alert.id})}
                        />
                    ))}
                </div>
            </div>
    );
};
const Alert = ({createTime = new Date().getTime(), message, type, onClose, duration = 0}) => {
    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                onClose();
            }, ((createTime + duration) - new Date().getTime()));
            return () => clearTimeout(timer);
        }
    }, [duration, onClose]);

    const typeClasses = {
        info: 'bg-blue-100 text-blue-800',
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        error: 'bg-red-100 text-red-800',
    };

    return (
        <div className={`flex justify-between items-center p-4 mb-4 rounded shadow ${typeClasses[type]}`}>
            <span>{message}</span>
            <button onClick={onClose} className="text-xl font-bold">&times;</button>
        </div>
    );
};