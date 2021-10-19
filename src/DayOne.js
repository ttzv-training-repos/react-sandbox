import FocusElement from "./FocusElement"
import LogActions from "./LogActions"
import InfoBox from "./InfoBox";

function DayOne(props){

    return (
        <div className="container">
            <FocusElement />
            <hr />
            <LogActions />
            <hr />
            <InfoBox />
        </div>
    )
}

export default DayOne;