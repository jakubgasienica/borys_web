import css from './Hamburger.module.scss'
import { useState } from "react"

function Hamburger ({news, firstTime, methods, contact, office, price, opinion, aboutMe}) {
    const [isActive, setIsActive] = useState(false);

    let hamburgerFirst='';
    let hamburgerSecond='';
    if (isActive) {
        hamburgerFirst = 'hamburger_first_active';
        hamburgerSecond = 'hamburger_second_active';
    } else {
        hamburgerFirst = 'hamburger_first';
        hamburgerSecond = 'hamburger_second';
    }
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop-50,
            behavior: "smooth",
        });
    }   

    return (
    <>
        <div className={css.hamburger_wrapper} onClick={() => setIsActive(!isActive)}>
            <div className={css[hamburgerFirst]}></div>
            <div className={css[hamburgerSecond]}></div>
        </div>

        {isActive && <div className={css.hamburger_list_wrapper}>
            <ul className={css.list}>
                <li onClick={()=>{scrollToSection(news);
                    setIsActive(!isActive)}} className={css.item} >Aktualności</li>
                <li onClick={()=>{scrollToSection(firstTime);
                    setIsActive(!isActive)}} className={css.item} >Pierwsza wizyta</li>
                <li onClick={()=>{scrollToSection(methods);
                    setIsActive(!isActive)}} className={css.item} >Stosowane metody leczenia</li>
                <li onClick={()=>{scrollToSection(contact);
                    setIsActive(!isActive)}} className={css.item} >Kontakt</li>
                <li onClick={()=>{scrollToSection(office);
                    setIsActive(!isActive)}} className={css.item}>Gabinet - gdzie mnie znajdziesz?</li>
                <li onClick={()=>{scrollToSection(price);
                    setIsActive(!isActive)}} className={css.item}>Cennik</li>
                <li onClick={()=>{scrollToSection(opinion);
                    setIsActive(!isActive)}} className={css.item} >Co o mnie mówią? - opinie</li>
                <li onClick={()=>{scrollToSection(aboutMe);
                    setIsActive(!isActive)}} className={css.item} >O mnie </li>
            </ul>
        </div>}
    </>
    )
}

export default Hamburger