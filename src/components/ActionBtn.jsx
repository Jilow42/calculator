import React from "react";
import './ActionBtn.css';

const ActionBtn = (props) => (
    <div className="ac-button" onClick={props.handleAction}>
        {props.children}
    </div>
)

export default ActionBtn;