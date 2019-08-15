import * as React from 'react'
import {FunctionComponent} from "react";
import {MiniatureUser} from "./MiniatureUser";
import './AccountStyle.css'

export interface TaskTransferProps {

}

export const TaskTransfer:FunctionComponent<TaskTransferProps>=()=>{
    return(
        <div className="transferContainer">
            <div className="titleForm">
                <strong>Передать задачу</strong>
            </div>
            <form className="formFIO">
                <input placeholder="Добавить исполнителя" className="inputFIO"/>
            </form>
            <div className="poolDesigner">


            </div>
            <div className="sendbar">
                <form>
                    <input placeholder="Добавить комментарий"/>
                </form>

            </div>
            <div className="footer">
                <div className="cancel">Cancel</div>
                <div className="accept">Accept</div>
            </div>
        </div>
    )
}