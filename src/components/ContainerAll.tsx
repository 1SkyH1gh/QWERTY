import * as React from 'react'
import {FunctionComponent} from "react";
import {Header} from "../Header/Header";
import {Container, Word} from "../Search/Container";
import {useState} from "react";
import _selected from "../RenoJson.json";
import Popover from "react-tiny-popover";
import styles from './ContainerAllStyles.module.scss'


import {Content} from "./Content";
import {News} from "./News";


export interface ContainerAllProps {

}
export const wordsData: Word[] = _selected;
export const ContainerAll:FunctionComponent<ContainerAllProps>=(props)=>{

    const [popover,setPopover]=useState(false)

    const [selected, setSelected] = useState<ReadonlyArray<Word>>(wordsData);


    const [test,setTest]=useState(false)

    const testF=()=>{
        setTest(true)

    }
    return(



        <div className={styles.containerAll}>
            <News  test={test}/>
            <Popover
                isOpen={popover}
                position={'top'}
                content={(
                    <Container amountKeywords={selected} setSelectedAmount={setSelected}/>)}
            >
            <Header popover={popover}
                    setPopover={setPopover}
                    selected={selected}
                    testF={testF}
            />

            </Popover>


                    <Content/>
        </div>

    )
}