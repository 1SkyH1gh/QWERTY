import * as React from 'react'
import {FunctionComponent, useState} from 'react'
import {AllKeywords} from "./AllKeywords";
import _selected from '../RenoJson.json'
import {Selected} from "./Selected";
import styles from './SearchStyles.module.scss'
import krestik from '../krestik.png'

export interface Word {


    id: number

    keyword: string

}

export const wordsData: Word[] = _selected;



export interface ContainerProps {
amountKeywords:any,
    setSelectedAmount:any
}


export const Container: FunctionComponent<ContainerProps> = (props) => {
    const {amountKeywords}=props
    const {setSelectedAmount}=props



    const [words] = useState(wordsData);

    const handleSubmit = () => {
        for (let i = 0; i < words.length; i++) {

        }
    }



    return (

     <div className={styles.searchContainer}>
             <div className={styles.preContainer} >

             <div className={styles.foundedAmount}>
                <h2 className={styles.foundedAmountText}>founded :<span >{amountKeywords.length}/{wordsData.length}</span> words</h2>
            </div>
                 <div className={styles.deleteAll}><h2  className={styles.deleteButton} onClick={() => setSelectedAmount([])}>
                     Delete All
                 </h2></div>





            {/*<MapSelected del={()=>delElem(SelectedElem.splice(,1))}/>*/}
           <div className={styles.selected}>{
                amountKeywords.map((word: Word) =>
                    <Selected
                        key={word.id}
                        Selectword={word}

                        del={() => {
                            const index = amountKeywords.findIndex((x: { id: number; }) => x.id === word.id);
                            if (index >= 0) {
                                setSelectedAmount((amountKeywords: any) => {
                                    const buffer = [...amountKeywords];
                                    buffer.splice(index, 1);
                                    return buffer;

                                })
                            }
                        }}/>
                )

            }
           </div>


            <div className={styles.formBlock}>
                <form onSubmit={handleSubmit} className={styles.formWidth}>
                    <input placeholder="search" className={styles.inputWidth}/>
                </form>
            </div>
             </div>

            {/*<MapAllKeyword addToSelected={() => PushElem(elem.splice(elem.length - 1, 0, elem.word))*/}
            {/*}/>*/}

          <div className={styles.allKeywords}>  {
                words.map(word =>
                    <AllKeywords
                        key={word.id}
                        word={word}
                        addToSelected={() => setSelectedAmount((amountSelected: any) => ([...amountSelected, word]))}/>
                )
            }
          </div>
            <div className={styles.footer}>


                <h2 className={styles.button}>Cancel</h2>
                <h2  className={styles.button}>Accept</h2>
            </div>
        </div>
    )
}