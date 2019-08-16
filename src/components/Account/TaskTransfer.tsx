import * as React from 'react'
import {FunctionComponent} from "react";



export interface TaskTransferProps {

}

export const TaskTransfer:FunctionComponent<TaskTransferProps>=()=>{
    return(
        <div >
            <div >
                <strong>Передать задачу</strong>
            </div>
            <form >
                <input placeholder="Добавить исполнителя" />
            </form>
            <div >


            </div>
            <div >
                <form>
                    <input placeholder="Добавить комментарий"/>
                </form>

            </div>
            <div >
                <div >Cancel</div>
                <div >Accept</div>
            </div>
        </div>
    )
}