import { useRef } from "react";


function FocusElement(props){
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
    }
    return (
        <div className="flex-center">
            <input type="text" ref={inputEl} />
            <button onClick={onButtonClick}>Focus input</button>
        </div>
    );
}

export default FocusElement;