import React from 'react';
import "./Modal.css"
import close from "../img/close.png"


const Modal = ({isModal, setIsModal, children}) => {

    return (
        <div className={isModal ? "modal active" : "modal"} onClick={() => setIsModal(false)}>
            <div className={isModal ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <button className={"modal__button"} onClick={() => setIsModal(false)}>
                    <img className={"modal__button img"} src={close}/>
                </button>
                {children}
            </div>
        </div>
    );
}
export default Modal