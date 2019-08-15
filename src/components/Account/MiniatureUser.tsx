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
        <div className="currentStatus">Ac</div>
        <div className="professionPool">
        <div className="name"> {props.nickname}</div>
    <div className="profession">{props.profession}</div>
        </div>
        </React.Fragment>
    )
}