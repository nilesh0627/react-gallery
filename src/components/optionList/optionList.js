import React from 'react'
import './optionList.css'
import {optionArray} from '../../unsplashconfig'

function OptionList({onSearchSubmit}){
    return (
        <div className="option__container">
            {optionArray.map((option)=>{
                return (
                    <button key={option} onClick={()=>onSearchSubmit(option)} className="option__btn">{option}</button>
                )
            })}
        </div>
    )
}

export default OptionList