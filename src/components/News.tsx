import * as React from 'react'
import {FunctionComponent, ReactNode} from "react";
import styles from './ContentChildren/ContentStyles.module.scss'
import {Account} from "./Account/Account";

export interface NewsProps {
test:boolean
}

export const News:FunctionComponent<NewsProps>=(props)=>{
    return(
        <div className={styles.News}>
            {props.test?<Account/>:<React.Fragment/>}
        </div>
    )
}