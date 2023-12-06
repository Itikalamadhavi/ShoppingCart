import React from 'react';
import styles from './navigation.module.css'

export const Navigation = () => {
    const HeaderContent = () => {
        return (
            <div className={styles.navbarHeader}>
                <div className={styles.navbar}>
                    <div>Mens Wear</div>
                    <div>Womens Wear</div>
                    <div>Kids Wear</div>
                    <div>Electronics</div>
                    <div>Accessories</div>
                </div>
                <div className={styles.iconNavbar}>
                    <input placeholder="enter to search" className={styles.input}/>
                    <img src="https://static.thenounproject.com/png/4530368-200.png" alt="profile" width={50} height={45}/>
                    <img src="https://cdn-icons-png.flaticon.com/128/2767/2767018.png" alt="wishlist" width={45} height={42}/>
                </div>
            </div>
        )
    }

    const render = () => {
        return (
            <div className={styles.mainNavBar}>
                {HeaderContent()}
            </div>
        )
    }
    return render()

}