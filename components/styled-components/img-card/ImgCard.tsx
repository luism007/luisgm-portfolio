import React from "react"
import { ImgType } from "../../../constants/types/ImgType"
import './ImgCard.scss';
export const ImgCard: React.FC<{img: ImgType}> = (props) => {
    return(
        <div className="imgcard-container">
            <img src = {props.img.source} style = {{objectFit: 'cover'}} ></img>
        </div>
    );
}