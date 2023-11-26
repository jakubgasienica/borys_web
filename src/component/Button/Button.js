import css from './Button.module.scss'


function Button ({text, type}) {
    let versionButton = ''
    if(type==='primary') {
        versionButton = 'primary'
    } else if (type==='primary_light_hover') {
        versionButton = 'primary_light_hover'
    } else {
        versionButton = 'secondary'
    }

    return (
    <div>
        <button className={css[versionButton]}>{text}</button>
    </div>)
}

export default Button;