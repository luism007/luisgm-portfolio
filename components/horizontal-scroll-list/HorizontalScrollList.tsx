import React, { useEffect, useState } from "react";
import leftIcon from "../../assets/left-arrow.svg";
import rightIcon from "../../assets/right-arrow.svg";
import './HorizontalScrollList.scss';
export const HorizontalScrollList: React.FC<{items: React.JSX.Element[]}> = (props) => {
    const [index, setIndex] = useState(0);

    const scrollTo = () => {
        const scrollContainer = document.getElementById('scroll-container');
        // Since 3 items currently exist inside the experience array, moving about 1/3 to the 'next' or 'prev' ... 
        // element should showcase them in the viewport. 
        scrollContainer?.setAttribute('style', `transform: translateX(-${ index * 33 }%)`);
    }

    const clickLeft = () => {setIndex(index - 1);};
    const clickRight = () => { setIndex(index + 1);}
    
    useEffect(() => {
        scrollTo();
    }, [index]);

    return(
        <div className = 'container-horizontal-scroll-stepper'>
            {index > 0 && <img src = {leftIcon} onClick={clickLeft} className="horizontal-scroll-arrow left"></img>}
            <div className='container-horizontal-scroll-stepper-items' id = "scroll-container">
                {
                    props.items.map((item, index) => {
                        return (
                            <span key={index} id = {`horizontal-list-${index}`} className = {'horizontal-list-item'}>
                                {item}
                            </span>
                        )
                    })
                }
            </div>
            {index < props.items.length - 1 && <img src = {rightIcon} onClick={clickRight} className="horizontal-scroll-arrow right"></img>}
        </div>
    );
}

