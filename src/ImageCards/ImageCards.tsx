import React from "react";
import styles from './imageCards.module.css'

export interface ImageSrc {
    image: string;
    price: string;
    details: string;
}

const data = [
    { image: "https://assets.vogue.com/photos/5891e0ebb482c0ea0e4db2a8/4:3/w_2560%2Cc_limit/02-lestrange.jpg", price: "$120.00", description: "Black sweat shirt with white Shirt" },
    { image: "https://i.pinimg.com/236x/fe/85/6f/fe856fe857f1c14ed3ef4b6e1efa692f.jpg", price: "$140.00", description: "Navy Blue suit with white Shirt" },
    { image: "https://i.pinimg.com/236x/6a/39/45/6a3945f4016b87b35c7a8833abe2e74f.jpg", price: "$200.00", description: "grey suit with white Shirt" },
    { image: "https://i.pinimg.com/736x/cc/9c/45/cc9c45c7e87de35252628b585d7e11da.jpg", price: "$400.00", description: "Suit with white Shirt and dark Pant" },
]

export const ImageCards = () => {

    const ImageCardContainer = (props: ImageSrc) => {
        return (
            <div className={styles.imageCardsContainer}>
                <img src={props.image} className={styles.imageCards} />
                <div>{props.price}</div>
                <div>{props.details}</div>
            </div>
        )
    }

    const renderImageContainerMultipleTimes = () => {
        return data.map((item: { image: string; price: string; description: string; }, index: number) => (
            <ImageCardContainer key={index} image={item.image} price={item.price} details={item.description} />
        ));
    }

    const render = () => {
        return (
            <div className={styles.cardstyles}>{renderImageContainerMultipleTimes()}</div>
        )
    }
    return render()
}