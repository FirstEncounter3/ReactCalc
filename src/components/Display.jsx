import "../styles/Display.css";

const Display = (props) => {

    return (
        <div className="display">
            <span>{props.currentValue}</span>
        </div>
    );
}

export default Display;