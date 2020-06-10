import React from 'react';

import './modal.css';

const modal = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h5>Add a task!</h5>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                       {props.children}
                    </p>
                </div>
               
            </div>
        </div>
    )
    /*<div className="modal-footer">
    <button className="btn-cancel" onClick={props.close}>Cancel</button>
    <button className="btn-continue" onClick={props.submit}>Submit</button>
</div>*/
}

export default modal;
