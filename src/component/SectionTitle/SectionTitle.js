import css from './SectionTitle.module.scss'

function SectionTitle ({text, type}){
    let typeClass = ''
    if (type === 'light') {
        typeClass = 'light'
    } else if (type==='dark') {
        typeClass = 'dark'
    }  else if (type==='blue') {
        typeClass = 'blue'
    }

    return (
        <h2 className={css[typeClass]}>{text}</h2>
    )
}

export default SectionTitle