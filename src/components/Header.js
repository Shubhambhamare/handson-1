import React, {useState} from "react";
import Classcomponent from "./Classcomponent";
import FunctComp from "./FunctComp";



function Header(){
    const [classcomponent,setClasscomponent] = useState(false);
    const [functComp,setFunctComp] = useState(false);

    return (
        <div className="container">
        <div>
            <h1 className="Head">Style USing Functional And Class Components</h1>
            <div className="btns">
                <button className="button1" onClick = {() => setFunctComp(!functComp)}>To See THe Function Component click</button>
                <button className="button2" onClick={() => setClasscomponent(!classcomponent)}>To see the Class Component Click Me</button>
            </div>
            <div className="Click">
                <div className="functCompo">
                    {functComp && <FunctComp/>}
                </div>
                <div className="classcomponent">
                    {classcomponent && <Classcomponent/>}
                </div>
        </div>
        </div>
        </div>


    )
};


export default Header;