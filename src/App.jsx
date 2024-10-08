import React, {useState} from "react";
import {AlertManager, useAlertManager} from "./component/alert/Alert.jsx";
import {Button} from "./component/button/button.jsx";

function App() {

    const {alerts, addAlert, removeAlert} = useAlertManager();

    const [isLoaing, setIsLoaing] = useState(false)

    return (
        <div>
            {/*<button onClick={() => setIsOpen(true)}>Open Modal</button>*/}
            {/*<Modal isOpen={isOpen} setIsOpen={setIsOpen} useDefaultHeader={true} headerTitle={"Hello World"} modalClassName={"w-[500px]"}>*/}
            {/*    <p>*/}
            {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aspernatur atque autem*/}
            {/*        consequuntur culpa cupiditate delectus dicta, eaque eius eligendi enim eos error est et fugiat*/}
            {/*        inventore iusto laboriosam libero magnam maiores molestias nam necessitatibus nihil nobis nulla*/}
            {/*        obcaecati odio omnis pariatur perferendis placeatquae quam quibusdam quis quis*/}
            {/*    </p>*/}
            {/*</Modal>*/}

            <AlertManager alerts={alerts} addAlert={addAlert} removeAlert={removeAlert}/>

            <div className={"fixed bottom-0 w-full flex gap-x-2 items-center justify-center"}>
                <Button onClick={() => {
                    setIsLoaing(true);
                    setTimeout(() => {
                        addAlert('This is an info alert!');
                        setIsLoaing(false);
                    }, 2000);
                }}
                        showLoading={true} isLoading={isLoaing} loadingClassName={"w-4 h-4 border-2"}
                >Add Info Alert</Button>

                <Button type={"success"}
                        onClick={() => addAlert('This is an Success alert!', 'success',)}
                        showLoading={true} isLoading={isLoaing} loadingClassName={"w-4 h-4 border-2"}
                >Add Success Alert</Button>

                <Button type={"warning"}
                        onClick={() => addAlert('This is an Success alert!', 'warning',)}
                        showLoading={true} isLoading={isLoaing} loadingClassName={"w-4 h-4 border-2"}
                >Add Warning Alert</Button>

                <Button type={"error"}
                        onClick={() => addAlert('This is an Success alert!', 'error', -1)}
                        showLoading={true} isLoading={isLoaing} loadingClassName={"w-4 h-4 border-2"}
                >Add Error Alert</Button>

            </div>

            {/*<Spinner className={"w-6 h-6 text-indigo-500 border-2"} fullscreen={true}/>*/}
        </div>
    );
}

export default App
