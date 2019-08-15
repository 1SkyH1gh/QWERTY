import * as React from 'react'
import {FunctionComponent} from "react";
import './AccountStyle.css'
import avatar from './avatar.jpg'
import add from './add.png'
import {MiniatureUser} from "./MiniatureUser";
import user from '../../Users.json'
export interface AccountProps {


}

export const Account:FunctionComponent<AccountProps>=()=>{
    return(
        <div className="account">
            <div className="account_header_link">
                <div className="link">
                    <svg  viewBox="0 0 24 24" className="graphicSVG">
                        <path fill="#000000" d="M2,2H4V20H22V22H2V2M7,10H17V13H7V10M11,15H21V18H11V15M6,4H22V8H20V6H8V8H6V4Z" />
                    </svg>
                    Графика</div>
                <div className="link">3-д</div>
                <div className="link">Препресс</div>
                <div className="link">Чертеж</div>
                <div className="link">Видео</div>
            </div>
            <div className="avatarBlock">
                <div className="avatar"><img src={avatar} className="avatarimg"/></div>
                <div className="addAvatar"><img src={add} className="addavatarimg"/></div>
            </div>
            <div className="profileInfo">
             <div className="content">
                <MiniatureUser profession={user[0].profession} nickname={user[0].nickname} id={user[0].id} />
                <div className="functionGive"> <svg  viewBox="0 0 24 24" className="giveSVG">
                    <path fill="#000000" d="M16,9C18.33,9 23,10.17 23,12.5V15H17V12.5C17,11 16.19,9.89 15.04,9.05L16,9M8,9C10.33,9 15,10.17 15,12.5V15H1V12.5C1,10.17 5.67,9 8,9M8,7A3,3 0 0,1 5,4A3,3 0 0,1 8,1A3,3 0 0,1 11,4A3,3 0 0,1 8,7M16,7A3,3 0 0,1 13,4A3,3 0 0,1 16,1A3,3 0 0,1 19,4A3,3 0 0,1 16,7M9,16.75V19H15V16.75L18.25,20L15,23.25V21H9V23.25L5.75,20L9,16.75Z" />
                </svg>Передать</div>
                <div className="functionOpen">
                    <svg  viewBox="0 0 24 24" className="openSVG">
                        <path fill="#000000" d="M4.94,6.35C4.55,5.96 4.55,5.32 4.94,4.93C5.33,4.54 5.96,4.54 6.35,4.93L13.07,10.31L13.42,10.59C14.2,11.37 14.2,12.64 13.42,13.42C12.64,14.2 11.37,14.2 10.59,13.42L10.31,13.07L4.94,6.35M12,20A8,8 0 0,0 20,12C20,9.79 19.1,7.79 17.66,6.34L19.07,4.93C20.88,6.74 22,9.24 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12H4A8,8 0 0,0 12,20M12,1A2,2 0 0,1 14,3A2,2 0 0,1 12,5A2,2 0 0,1 10,3A2,2 0 0,1 12,1Z" />
                    </svg>
                    Открыта</div>
                <div className="dataStatus">5 дней</div>
                <div className="taskAmount">8</div>
                <div className="message">
                    <svg  viewBox="0 0 24 24" className="counterSVG">
                        <path fill="#000000" d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H6L4,18V4H20" />
                    </svg>
                    <span className="messageAmount">3</span>
                </div>
             </div>
                <div className="subscriber">
                    <div className="sub"><span className="statusnotDisturb"/>MP</div>
                    <div className="sub"><span className="statusOnline"/>AA</div>
                    <div className="sub"><span className="statusAFK"/>IB</div>
                    <div className="sub"><span className="statusnotDisturb"/>KV</div>
                </div>



            </div>



        </div>
    )
}