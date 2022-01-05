import React from "react";
import './ClearBtn.css';

const ClearBtn = (props) => (
    <div className="ac-button" onClick={props.handleAC}>
        {props.children}
    </div>
)

export default ClearBtn;