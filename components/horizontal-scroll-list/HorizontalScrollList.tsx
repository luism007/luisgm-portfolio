import React, { useEffect, useState } from "react";
import leftIcon from "../../assets/left-arrow.svg";
import rightIcon from "../../assets/right-arrow.svg";
import './HorizontalScrollList.scss';
export const HorizontalScrollList: React.FC<{items: React.JSX.Element[]}> = (props) => {
    const [index, setIndex] = useState(0);

    const scrollTo = () => {
        const item = document.getElementById(`horizontal-list-${index}`);
        item?.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
    }

    const clickLeft = () => {setIndex(index - 1);};
    const clickRight = () => { setIndex(index + 1);}
    
    useEffect(() => {
        scrollTo();
    }, [index]);

    return(
        <div className = 'container-horizontal-scroll-stepper'>
            {index > 0 && <img src = {leftIcon} onClick={clickLeft} className="horizontal-scroll-arrow left"></img>}
            <div className='container-horizontal-scroll-stepper-items'>
                {
                    props.items.map((item, index) => {
                        return (
                            <span key={index} id = {`horizontal-list-${index}`} className = {`horizontal-list-${index}`}>
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

