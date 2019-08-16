import * as React from 'react'
import {FunctionComponent, useState} from "react";
import folder from '../folder-outline.png'
import chart from '../chart-timeline.png'
import search from '../magnify.png'
import messages from '../android-messages.png'
import tag from '../tag-plus.png'
import arrow from '../chevron-down.png'
import styles from './HeaderStyles.module.scss'


export interface HeaderInt {
selected:any,
    popover:boolean,
    setPopover: (b: boolean)=>void,
testF:()=>void
}




export const Header:FunctionComponent<HeaderInt>=(props)=>{



    return(
        <div className={styles.headerContainer}>
            <div className={styles.blockLink}>
                <img src={folder}/><p>All project 43</p> <img src={arrow}/>
            </div>

            <div className={styles.blockLink}>
                <img src={chart}/><p>create date</p>
            </div>

            <div className={styles.blockLink}>
                <p>Task status</p> <img src={arrow}/>
            </div>

            <div className={styles.blockLink}>
                <p >project number</p> <img src={arrow}/>
            </div>

            <form className={styles.blockLink}>
                <input placeholder="search..." src={search}/>
            </form>
            <div className={styles.blockLink} >

                <img src={messages} onClick={props.testF}/>
            </div>





                <div onClick={() => props.setPopover(!props.popover)} className={styles.blockLink}>
                    <img src={tag}/> <h3 className={styles.blockLink}>{props.selected.length>0?props.selected.length:""}</h3>
                </div>



        </div>
    )
}