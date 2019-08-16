import * as React from "react";
import {FunctionComponent} from "react";
import {Word} from "./Container";
import krestik from '../krestik.png'
import styles from './SearchStyles.module.scss'
export interface SelectedProps {
    Selectword: Word,
    del:()=>void,
}

export const Selected:FunctionComponent<SelectedProps>=(props)=>{
    return(
        <h3 onClick={props.del}  className={styles.selectedWord}>{props.Selectword.keyword}</h3>
    )
}