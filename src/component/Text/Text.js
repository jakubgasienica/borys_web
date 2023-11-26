import css from "./Text.module.scss"

function Text ({text, type}) {
    let typeClass = ''
    if (type==='description') {
        typeClass = 'description'
    } else if (type==='contactSubtitle') {
        typeClass = 'contact_subtitle'
    } else if (type==='contactValue') {
        typeClass = 'contact_value'
    } else if (type === 'center'){
        typeClass = 'center'
    } else if (type === 'accordionDescription'){
        typeClass = 'accordion_description'
    } else if (type === 'opinionDescription') {
        typeClass = 'opinion_description'
    } else if (type === 'opinionName') {
        typeClass = 'opinion_name'
    } else if (type === 'priceFirstDescription') {
        typeClass = 'price_first_description'
    } else if (type === 'priceSecondDescription') {
        typeClass = 'price_second_description'
    } else if (type === 'about_me_job') {
        typeClass = 'about_me_job'
    }

    return (<p className={css[typeClass]}>{text}</p>)
}

export default Text