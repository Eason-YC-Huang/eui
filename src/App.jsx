import React from "react";
import {AlertManager, useAlertManager} from "./component/alert/Alert.jsx";

function App() {

    const {alerts, addAlert, removeAlert} = useAlertManager();

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
                <button
                    onClick={() => addAlert('This is an info alert!')}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                > Add Info Alert
                </button>
                <button
                    onClick={() => addAlert('This is an info alert!', 'success', 3000)}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                > Add Success Alert
                </button>
                <button
                    onClick={() => addAlert('This is an info alert!', 'error', 3000)}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                > Add Error Alert
                </button>
                <button
                    onClick={() => addAlert('This is an info alert!', 'warning', 3000)}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                > Add Warning Alert
                </button>
            </div>

            {/*<Spinner className={"w-6 h-6 text-indigo-500 border-2"} fullscreen={true}/>*/}
        </div>
    );
}

export default App
