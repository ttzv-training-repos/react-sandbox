import { useEffect, useMemo, useState } from "react";
import "./LogActions.css"

function LogActions(params) {
    const [clickNumber, setClickNumber] = useState(0);
    const firstRender = useMemo( () => console.log("First render"), [])
    useEffect( () => {
        console.log("Number rendered!");
        console.log(`Number is: ${clickNumber}`)
    },[clickNumber])
    return (
        <h5 className="number" onClick={() => setClickNumber(clickNumber + 1)}>{clickNumber}</h5>
    );
}

export default LogActions;