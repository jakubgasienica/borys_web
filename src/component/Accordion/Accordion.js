import React from "react"
import css from "./Accordion.module.scss"
import { useState } from "react"

function Accordion ({title, content, background}) {
    const [isActive, setIsActive] = useState(false);

    let accordionContent = ''
    let button = ''
    if(isActive&&background) {
        accordionContent = "accordion_with_background_active"
        button = "button_active_with_background"
    } else if (isActive && !background) {
        button = 'button_active_with_no_background'
        accordionContent = 'accordion_no_background'
    } else if (background) {
        accordionContent = 'accordion_with_background'
        button = "button_with_background"
    } else if (!background) {
        accordionContent = 'accordion_no_background'
        button = "button_no_with_background"
    } 
    return (

        <div className={css[accordionContent]}>
                <button className={css[button]} onClick={() => setIsActive(!isActive)}></button>
                
            <div className={css.accordion_title_with_content}> 
                <h4 onClick={() => setIsActive(!isActive)} className={css.accordion_title}>{title}</h4>
                {isActive && <p className={css.accordion_content}>{content}</p>}
            </div>
        </div> 

    )

        

    
}

export default Accordion