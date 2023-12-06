import React from "react";
import styles from './imageCards.module.css'

export interface imageSrc {
    imageSrc : string;
}
const images:string[] = [
    "https://assets.vogue.com/photos/5891e0ebb482c0ea0e4db2a8/4:3/w_2560%2Cc_limit/02-lestrange.jpg",
    "https://i.pinimg.com/236x/fe/85/6f/fe856fe857f1c14ed3ef4b6e1efa692f.jpg",
    "https://i.pinimg.com/236x/6a/39/45/6a3945f4016b87b35c7a8833abe2e74f.jpg",
    "https://i.pinimg.com/736x/cc/9c/45/cc9c45c7e87de35252628b585d7e11da.jpg",
]
export const ImageCards = (images:any) => {
    const ImageCardContainer = (props:imageSrc) => {
        return (
            <div className={styles.imageCards}>
                <img src={props.imageSrc}/>
            </div>
        )
    }

    const renderImageContainerMultipleTimes = () => {
      return images.map((index: number,imagesURL: string) => (
            <ImageCardContainer key={index} imageSrc={imagesURL}/>
        ))
    }

    const render = () => {
        return(
            <>{renderImageContainerMultipleTimes}</>
        )
    }
    return render()
}