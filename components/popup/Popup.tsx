import React, { useEffect } from "react"
import './Popup.scss';
import CloseIcon from '../../assets/close-icon.svg';
export const Popup: React.FC<{children: React.JSX.Element , animateClass: string, title: string, subtitle: string, callback: () => void}> = (props, children) => {
    
    useEffect(() => {
        const wrapper = document.querySelector('.parallax-wrapper');
        if (props.animateClass === 'show') {
            wrapper?.setAttribute('style', 'overflow-y: hidden')
        } 
        return () => { wrapper?.setAttribute('style', 'overflow-y: auto'); }
    }, [props.animateClass]);

    return(
        <div className={`popup-container ${props.animateClass}`}>
            <div className= {`popup-slide-section ${props.animateClass}`}>
                <img src={CloseIcon} className="popup-close-icon" onClick={props.callback}></img>
                <div className="popup-header-section">
                    <h2> {props.title} </h2>
                    <h3> {props.subtitle} </h3>
                </div>
                <div className="popup-element-section">
                    {props.children}
                </div>
            </div>
        </div>
    )
}