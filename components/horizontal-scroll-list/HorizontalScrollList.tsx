import React, { useEffect, useState } from "react";
import './HorizontalScrollList.scss';
export const HorizontalScrollList: React.FC<{items: React.JSX.Element[]}> = (props) => {
    const [index, setIndex] = useState(0);

    const scrollTo = () => {
        console.log('Scroll To', index);
        const item = document.getElementById(`horizontal-list-${index}`);
        console.log('Item', item);
        item?.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
    }

    const clickLeft = () => {setIndex(index - 1);};
    const clickRight = () => { setIndex(index + 1);}
    
    useEffect(() => {
        console.log('Index', index);
        scrollTo();
    }, [index]);

    return(
        <div className = 'container-horizontal-scroll-stepper'>
            {index > 0 && <button onClick={clickLeft} className="horizontal-scroll-arrow left"> Left Arrow </button>}
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
            {index < props.items.length - 1 && <button onClick={clickRight} className="horizontal-scroll-arrow right"> Right Arrow </button>}
        </div>
    );
}

