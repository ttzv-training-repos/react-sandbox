function TextInput(props) {
    const {value, onChangeText} = props;
    return (
        <div>
            <input type="text" value={value} onChange={(e) => onChangeText(e)}/>
        </div>
    );

}

export default TextInput;