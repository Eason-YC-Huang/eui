import {useState} from "react";
import {create} from "zustand";

// use this if you are using zustand
export const useGlobalAlert = create((set) => ({
    alerts: [],
    addAlert: ({message, type = 'info', duration = 5000}) => {
        const id = generateUUID();
        const createTime = new Date().getTime();
        set((prevState) => ({alerts: [...prevState.alerts, {id, createTime, message, type, duration}]}))
    },
    removeAlert: ({id}) => set((prevState) => ({alerts: prevState.alerts.filter(alert => alert.id !== id) })),
}));

export function useAlert() {
    const [alerts, setAlerts] = useState([]);

    const addAlert = ({message, type = 'info', duration = 5000}) => {
        const id = generateUUID();
        const createTime = new Date().getTime();
        setAlerts((prevState) => [...prevState, {id, createTime, message, type, duration}]);
    };

    const removeAlert = ({id}) => {
        setAlerts((prevState) => prevState.filter(alert => alert.id !== id));
    };
    return {alerts, addAlert, removeAlert}
}

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}