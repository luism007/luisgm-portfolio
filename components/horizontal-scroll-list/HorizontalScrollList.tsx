import React, { useEffect, useState } from "react";
import './HorizontalScrollList.scss';
export const HorizontalScrollList: React.FC<{items: React.JSX.Element[]}> = (props) => {
    const [index, setIndex] = useState(0);

    const scrollTo = () => {
        const item = document.getElementById(`horizontal-list-${index}`);
        item?.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    }

    const clickLeft = () => {setIndex(index - 1);};
    const clickRight = () => { setIndex(index + 1);}
    
    useEffect(() => {
        scrollTo();
    }, [index]);

    return(
        <div className = 'container-horizontal-scroll-stepper'>
            {index > 0 && <span onClick={clickLeft}> Left Arrow </span>}
            <div className='container-horizontal-scroll-stepper-items'>
                {
                    props.items.map((item, index) => {
                        return (
                            <span key={index} id = {`horizontal-list-${index}`}>
                                {item}
                            </span>
                        )
                    })
                }
            </div>
            {index < props.items.length - 1 && <span onClick={clickRight}> Right Arrow </span>}
        </div>
    );
}

