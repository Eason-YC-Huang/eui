import React from "react";
import {useGlobalAlert} from "./component/alert/AlertHook.jsx";
import {AlertManager} from "./component/alert/Alert.jsx";
import {getUserInfo} from "./api/Api.js";

function App() {
    const {alerts, addAlert, removeAlert} = useGlobalAlert();

    return (
        <>
            <AlertManager alerts={alerts} addAlert={addAlert} removeAlert={removeAlert}/>
            <div className={"flex flex-col justify-between h-screen"}>
                <UserInfo/>
            </div>
        </>
    );
}

function UserInfo() {

    const {addAlert} = useGlobalAlert();
    const onGetUserInfo = () => {
        try {
            console.log("getUserInfo");
            getUserInfo({userId: "123"});
        } catch (error){
            console.log("addAlert");
            addAlert({
                message: error.message,
                type: "error",
            })
        }
    }

    return (<button onClick={onGetUserInfo}>Add Alert</button>);
}

export default App
