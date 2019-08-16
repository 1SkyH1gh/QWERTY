import * as React from 'react'
import {FunctionComponent} from "react";
import avatarTest from './AvatarTest.jpg'


import styles from './Account.module.scss'
export interface AccountProps {


}

export const Account:FunctionComponent<AccountProps>=()=>{
    return(

            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.links}>
                        test
                    </div>
                    <div className={styles.links}>
                        portfolio
                    </div>
                    <div className={styles.links}>
                        contacts
                    </div>
                    <div className={styles.links}>
                        main
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.avatarBlock}>
                        <img src={avatarTest} className={styles.avatar}/>
                     </div>
                    <div className={styles.descriptionBlock}>
                        <div className={styles.descriptions}>
                            <h3>ilya tormanov</h3>
                            <p>WEB-developer</p>

                        </div>
                        <div className={styles.buttons}>
                            <h2>peredat'</h2>
                            <h2>open</h2>
                            <h2>date</h2>
                            <h2>dangerous</h2>
                            <h2>message</h2>
                        </div>
                    </div>
                    <div className={styles.inicialBlock}>
                        <h2 className={styles.inicial}>IB</h2>
                    </div>

                </div>

            </div>


    )
}