import React, {useState} from "react";
import {Input} from "./component/input/input.jsx";

function App() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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

            <div className={"flex flex-col gap-y-2 px-2"}>
                <Input type={"text"} placeholder={"username"} onValueChange={setUsername}/>
                <Input type={"password"} placeholder={"password"} onValueChange={setPassword} className={""}/>
            </div>

            {/*<Spinner className={"w-6 h-6 text-indigo-500 border-2"} fullscreen={true}/>*/}
        </div>
    );
}

export default App
