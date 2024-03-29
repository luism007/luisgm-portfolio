import React, { useEffect, useState, useId } from "react";
import leftIcon from "../../assets/left-arrow.svg";
import rightIcon from "../../assets/right-arrow.svg";
import leftIconDark from '../../assets/left-arrow-dark.svg';
import rightIconDark from '../../assets/right-arrow-dark.svg';
import './HorizontalScrollList.scss';
import { ETheme } from "../../constants/enums/ETheme";
export const HorizontalScrollList: React.FC<{items: React.JSX.Element[], offset?: number | null, theme?: string | null}> = (props) => {
    const [index, setIndex] = useState(0);
    const [numItems, setNumItems] = useState(0);
    const id = useId();
    const scrollTo = () => {
        const scrollContainer = document.getElementById(`scroll-container-${id}`);
        const offsetCalc = (props?.offset) ? props.offset : (1 / numItems) * 100;
        // Since 3 items currently exist inside the experience array, moving about 1/3 to the 'next' or 'prev' ... 
        // element should showcase them in the viewport. 
        scrollContainer?.setAttribute('style', `transform: translateX(-${ index * offsetCalc}%)`);
    }

    const clickLeft = () => {setIndex(index - 1);};
    const clickRight = () => {setIndex(index + 1);}
    
    useEffect(() => {
        setNumItems(props.items.length);
        scrollTo();
    }, [index]);

    return(
        <div className = 'container-horizontal-scroll-stepper'>
            {index > 0 && <img src = {(props.theme === ETheme.DARK) ? leftIconDark : leftIcon} onClick={clickLeft} className="horizontal-scroll-arrow left"></img>}
            <div className='container-horizontal-scroll-stepper-items' id = {`scroll-container-${id}`}>
                {
                    props.items.map((item, index) => {
                        return (
                            <div key={index} id = {`horizontal-list-${index}`} className = {'horizontal-list-item'}>
                                {item}
                            </div>
                        )
                    })
                }
            </div>
            {index < props.items.length - 1 && <img src = {(props.theme === ETheme.DARK) ? rightIconDark : rightIcon} onClick={clickRight} className="horizontal-scroll-arrow right"></img>}
        </div>
    );
}

