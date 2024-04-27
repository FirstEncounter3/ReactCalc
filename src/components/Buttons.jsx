import { useState } from "react";

import "../styles/NumButtons.css";
import "../styles/OperatorButtons.css";

import Display from "./Display";

const NumButtons = () => {
    const defaultState = '0'

    const [currentValue, setCurrentValue] = useState(defaultState);

    const getButtonsValue = (event) => {
        if (currentValue === defaultState) {
            return setCurrentValue(event.target.textContent);
        }
        return setCurrentValue(currentValue + event.target.textContent);
    }

    const clearDisplay = () => {
        return setCurrentValue(defaultState);
    }

    const clearLastSymbol = () => {
        if(currentValue.length === 1) {
            return setCurrentValue(defaultState);
        };
        return setCurrentValue(String(currentValue).slice(0, -1));
    }

    const getEvaluation = () => {
        return setCurrentValue(eval(currentValue));
    }

    const pushButtons = () => {
        let buttonList = [];
        for (let i = 1; i <= 9; i++) {
            buttonList.push(
            <button className="numButtons" key={i} onClick={getButtonsValue}>
                {i}
            </button>
            );
        }
        return buttonList;
    }

    return(
        <>
        <Display currentValue={currentValue} />
        <div className="wrapper">
            <button className="operatorButtons" onClick={clearDisplay}>AC</button>
            <button className="operatorButtons" onClick={clearLastSymbol}>DEL</button>
            <button className="operatorButtons" onClick={getButtonsValue}>+</button>
            <button className="operatorButtons" onClick={getButtonsValue}>*</button>
            <button className="operatorButtons" onClick={getButtonsValue}>/</button>
            <button className="operatorButtons" onClick={getButtonsValue}>-</button>
            { pushButtons() }
            <button className="numButtons" onClick={getButtonsValue}>.</button>
            <button className="numButtons" onClick={getButtonsValue}>0</button>
            <button className="numButtons" onClick={getEvaluation}>=</button>
        </div>
        </>
    );

}

export default NumButtons;