import * as React from 'react'
import {FunctionComponent} from "react";

export interface MiniatureUserProps {

    id:number,
    nickname:string,
    profession:string
}





export const MiniatureUser:FunctionComponent<MiniatureUserProps>=(props)=>{

    return(
        <React.Fragment>
        <div >Ac</div>
        <div >
        <div> {props.nickname}</div>
    <div >{props.profession}</div>
        </div>
        </React.Fragment>
    )
}