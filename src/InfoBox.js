import { useState } from "react";
import TextInput from "./TextInput";
import "./InfoBox.css"

function InfoBox(props) {
    const [customText, setCustomText] = useState('');

    const handleChangeText = (event) => {
        setCustomText(event.target.value);
    }

    return (
        <div className="flex-center flex-column">
            <h5>My Custom Text: {customText}</h5>
            <br />
            <TextInput value={customText} onChangeText={handleChangeText} />
        </div>
    );
}

export default InfoBox;