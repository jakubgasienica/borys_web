import Accordion from "../../component/Accordion/Accordion";
import Regulamin from "../../component/Regulamin/Regulamin";
import Button from "../../component/Button/Button"
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import Text from "../../component/Text/Text";
import { useHome, handleCheckSection} from "./useHome";
import { useRef } from "react";
import css from './Home.module.scss'
import Hamburger from "../../component/Hamburger/Hamburger";
import img from "./logo_borys.png"
import profil from "./profilowe.jpg"

function Home () {
    const { home } = useHome()
    
    const accordionWithBackgound = handleCheckSection(home, 'fizjo')
    const accordionWithoutBackgound = handleCheckSection(home, 'accordioNoBackground')
    const imgOffice = handleCheckSection(home, 'imgOffice')
    const opinionRes = handleCheckSection(home, 'opinion')

    const firstTime = useRef(null);
    const methods = useRef(null);
    const contact = useRef(null);
    const office = useRef(null);
    const price = useRef(null);
    const opinion = useRef(null);
    const aboutMe = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop-50,
            behavior: "smooth",
        });
    };

    return (
    <div className={css.home}>
        <section className={css.header_wrapper}>
            <Hamburger className={css.hamburger} firstTime={firstTime} methods={methods} contact={contact} office={office} price={price} opinion={opinion} aboutMe={aboutMe}></Hamburger>
            <a href="https://zarejestrowani.pl/w/A1u2sRPkvIssJMkd0sIibw/?fbclid=IwAR3ciGKq1X7VXpySF75i8F5S6Q433oMlZ5f0wA1uQD4zXaSnHIcidnq4D7k"><button className={css.reservation}>umów wizytę</button></a>
        
            <img src={img} className="logo"></img>

            <h2 className={css.page_sentence}>Całościowe spojrzenie na pacjenta to to, czym charakteryzuje się moje podejście w fizjoterapii do twoich dolegliwości.</h2>
            <a href="https://zarejestrowani.pl/w/A1u2sRPkvIssJMkd0sIibw/?fbclid=IwAR3ciGKq1X7VXpySF75i8F5S6Q433oMlZ5f0wA1uQD4zXaSnHIcidnq4D7k"><Button type='primary' text='umów wizytę'></Button></a>        
            <a href="#methods"><Button type='secondary' text='dowiedz się więcej'></Button></a>        
        </section>

        <section id='first_time' className={css.first_time} ref={firstTime}>
            <div className={css.first_time_wrapper}><SectionTitle text='Pierwsza wizyta' type='dark'></SectionTitle>
                <div className={css.first_time_content_wrapper}>
                    
                    <Text text='Podczas pierwszej wizyty ocenię twoją postawę, zbadam miejsca które sprawiają dolegliwości, a także te, które mogą być z nimi powiązane. Zbiorę wszystkie informacje, które mogą mieć wpływ na twoje dolegliwości - aktualne oraz przeszłe. Zapytam Cię o urazy, zabiegi operacyjne, przebyte choroby.' type='accordionDescription'></Text>
                    <div>
                    {accordionWithBackgound?.map((fields)=>(
                    <Accordion key={fields.fields.accordionSectionSubTitle} title={fields.fields.accordionSectionSubTitle} content={fields.fields.accordionText} background={true}></Accordion>
                ))} </div>
                </div>
            </div>
       </section>

        <section id='methods' className={css.methods} ref={methods}>
            <SectionTitle text='Stosowane metody' type='light'></SectionTitle>
            <div className={css.methods_wrapper}>
                <div className={css.methods_right}>
                    {accordionWithoutBackgound?.map((fields)=>(
                        <Accordion key={fields.fields.accordionSectionSubTitle} title={fields.fields.accordionSectionSubTitle} content={fields.fields.accordionText} background={false}></Accordion>
                    ))}
                </div>
                <div className={css.methods_left}>
                    <Text type='center' text='Nie rozumiesz niektórych nazw stosowanych metod? Nie szkodzi, podczas pierwszej wizyty wszystko wyjaśnię i dobierzemy odpowiednią dla Ciebie.'></Text>
                    <div className={css.methods_button_wrapper}>
                    <a href="https://zarejestrowani.pl/w/A1u2sRPkvIssJMkd0sIibw/?fbclid=IwAR3ciGKq1X7VXpySF75i8F5S6Q433oMlZ5f0wA1uQD4zXaSnHIcidnq4D7k"><Button text="sprawdź wolne terminy" type="primary_light_hover"></Button></a>
                    </div>
                </div>
            </div>
        </section>
    
        <section id='contact' className={css.contact} ref={contact}>
            <SectionTitle text='Kontakt' type='blue'></SectionTitle>
            
            <div className={css.contact_items}>
                <Text type='contactSubtitle' text='Fizjoterapeuta'></Text>
                <Text type='contactValue' text='Mgr Borys Witkiewicz, specjalista fizjoterapii'></Text>
            </div>
            
            <div className={css.contact_items}>
                <Text type='contactSubtitle' text='telefon'></Text>
                <Text type='contactValue' text='+48606776649'></Text>
            </div>
            
            <div className={css.contact_items}>
                <Text type='contactSubtitle' text='mail'></Text>
                <Text type='contactValue' text='borys.witkiewicz@gmail.com'></Text>
            </div>
        </section>
       
        <section id='office' className={css.office} ref={office}>
            <div className={css.office_text_wrapper}>
                <SectionTitle type='blue' text='Gabinet'></SectionTitle>
            
                <div className={css.office_item}>
                    <Text type='contactSubtitle' text='adres'></Text>
                    <Text type='contactValue' text='ul. Rydlówka 9/97 Kraków, osiedle ZAM w budynku A'></Text>
                </div>
            
        
                <p className={css.office_text}><b>Wejście do gabinetu</b> Przy bramce wejściowej wybieramy numer 97, następnie przechodzimy przez dziedziniec i podążając na wprost kierujemy się do <b>klatki A</b> po prawej stronie. Na domofonie wybieramy numer 97.  </p>
                <p className={css.office_text}><b>Parking dla pacjentów</b> znajduje się przy ulicy na wprost budynku i leż yw podstrefie C </p>

                <div className={css.office_button}>
                    <a href="https://www.google.com/maps?sca_esv=580203348&rlz=1C5CHFA_enPL925PL925&biw=1405&bih=1244&output=search&q=Witkiewicz+Fizjoterapia+i+Osteopatia&source=lnms&entry=mc&sa=X&ved=2ahUKEwie-oKd0bKCAxXJIxAIHcE2CXsQ0pQJegQIBhAB"><Button text='nawiguj do gabinetu' type='secondary'></Button></a>
                </div>
            </div>
            <div className={css.office_img_wrapper}>
                {imgOffice?.map((fields)=>(
                <img className={css.office_img} key={fields.fields.imgOffice.fields.file.url} src={fields.fields.imgOffice.fields.file.url} alt="Borys Witkiewicz fizjoterapia. Fizjoterapeuta Kraków, gabinet znajduje się przy ulicy Rydlówka 9/97 w Krakowie. 

                Terapia powięziowa, osteopatia, kinesiology taping, terapia manualna."></img> ))}
            </div>
        </section>
        
        <section id='price' className={css.price} ref={price}>
            <SectionTitle type='light' text='Cennik'></SectionTitle>
            <Text type='priceFirstDescription' text='1 Wizyta - 150 zł'></Text>
            <Text type='priceSecondDescription' text='(diagnostyka funkcjonalna, terapia, ćwiczenia, zalecenia)'></Text>
        </section>

        <section id='opinion' className={css.opinion} ref={opinion}>
            <SectionTitle type='blue' text='Zobacz co o mnie mówią'></SectionTitle>
                {opinionRes?.map((field)=>(
                    <div className={css.opinion_item}>
                        <div className={css.opinion_item_text}>
                        <Text key={field?.fields.opinionName} type='opinionName' text={field.fields.opinionName}></Text>
                        <Text key={field?.fields.opinionText} type='opinionDescription' text={field.fields.opinionText}></Text>
                        </div>
                    </div>
                ))}
        </section>

        <section className={css.about_me} id='about_me' ref={aboutMe}>
            <img src={profil} className={css.profil}></img>
            
            <div className={css.about_me_text}>
                <SectionTitle type='light' text='O mnie'></SectionTitle>
                <Text type='about_me_job' text='FIZJOTERAPEUTA' className={css.about_me_name}></Text>
                
                <p className={css.about_me_descprition}>Jestem absolwentem Collegium Medicum Uniwersytetu Jagiellońskiego, rocznik 2007. W 2018 roku uzyskałem tytuł specjalisty fizjoterapii. Jestem również certyfikowanym instruktorem terapii Fasciq, z której prowadzę szkolenia dla fizjoterapeutów. Odpowiadam również za kształcenie przyszłych specjalistów fizjoterapii. Tłumaczę zajęcia z osteopatii na WOMA (Warsaw Osteopatic Medicine Academy). W 2023 roku rozpocząłem 4,5 letnie kształcenie w dziedzinie osteopatii.</p>
                    
            <div className={css.about_me_button}>
                <a href="https://www.instagram.com/fizjobike/"><Button text='@fizjobike prywatnie' type='secondary'></Button></a></div>
            </div>
        </section>

        <footer className={css.footer} id='footer'>
            <div className={css.top}>
                <img src={img} className={css.footer_logo}></img>
                <div className={css.footer_contact}>
                    <div className={css.contact_items}>
                        <Text type='contactSubtitle' text='telefon'></Text>
                        <Text type='contactValue' text='+48606776649'></Text>
                    </div>
                    
                    <div className={css.contact_items}>
                        <Text type='contactSubtitle' text='mail'></Text>
                        <Text type='contactValue' text='borys.witkiewicz@gmail.com'></Text>
                    </div>
                    
                    <div className={css.contact_items}>
                        <Text type='contactSubtitle' text='adres'></Text>
                        <Text type='contactValue' text='ul. Rydlówka 9/97 Kraków, osiedle ZAM w budynku A'></Text>
                    </div>
                </div>
                <ul className={css.list}>
                    <li onClick={()=> {scrollToSection(firstTime)}}><span className={css.item}>Pierwsza wizyta</span></li>
                    <li onClick={()=> {scrollToSection(methods)}}><span className={css.item}>Stosowane metody leczenia</span></li>
                    <li onClick={()=> {scrollToSection(contact)}} ><span className={css.item}>Kontakt</span></li>
                    <li onClick={()=> {scrollToSection(office)}} ><span className={css.item}>Gabinet - gdzie mnie znajdziesz?</span></li>
                    <li onClick={()=> {scrollToSection(price)}} ><span className={css.item}>Cennik</span></li>
                    <li onClick={()=> {scrollToSection(opinion)}} ><span className={css.item}>Co o mnie mówią? - opinie</span></li>
                    <li onClick={()=> {scrollToSection(aboutMe)}} ><span className={css.item}>O mnie</span></li>
                </ul>
            </div>

            <div className={css.bottom}>
                <Regulamin></Regulamin>
                <p className={css.item_politic}>2023 © witkiewiczfizjoterapia.pl</p>
            </div>
        </footer>
    </div>
    )
}

export default Home 