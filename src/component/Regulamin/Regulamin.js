import css from './Regulamin.module.scss'
import { useState } from "react"

function Regulamin () {
    const [isActive, setIsActive] = useState(false);
    return (<>
        <span className={css.button} onClick={() => setIsActive(!isActive)}><span className={css.button_text}>Regulamin gabinetu</span></span>
        
        {isActive&&<div className={css.ragulamin_text}>
            <div className={css.button_close_wrapper} onClick={() => setIsActive(!isActive)}>
                <div className={css.button_close} >
                    <div className={css.button_close_first}></div>
                    <div className={css.button_close_second}></div>
                </div>
            </div>
            
            <p className={css.subtitle}>REGULAMIN ORGANIZACYJNY</p>
            <p className={css.subtitle}>PRAKTYKI ZAWODOWEJ</p>
            <p className={css.subtitle}>„Fizjoterapia Borys Witkiewicz”</p>
            <div className={css.subtitle_wrapper}>
                <p className={css.subtitle}>§1.</p>
                <p className={css.subtitle}>POSTANOWIENIA OGÓLNE</p>
            </div>
            <div className={css.ragulamin_text_inner}>
                <ul className={css.list}>
                    <li><p className={css.text}>Niniejszy regulamin (dalej: <b>„Regulamin”</b>) określa sposób i warunki udzielania świadczeń zdrowotnych przez „Fizjoterapia Borys Witkiewicz” prowadzącą indywidualną praktykę fizjoterapeutyczną (dalej: „Praktyka”).</p></li>
                    <li><p className={css.text}>Rodzaj Praktyki to: <b>98</b> – indywidualna praktyka fizjoterapeutyczna</p></li>
                    <li><p className={css.text}>Praktyka działa na podstawie Regulaminu oraz obowiązującego prawa, a w szczególności:</p>
                        <ul className={css.list_inner}>
                            <li>ustawy z dnia 15 kwietnia 2011 r. o działalności leczniczej;</li>
                            <li>ustawy z dnia 25 września 2015 r. o zawodzie fizjoterapeuty;</li>
                            <li>ustawy z dnia 6 listopada 2008 r. o prawach pacjenta i Rzeczniku Praw Pacjenta;</li>
                            <li>innych przepisów, mających wpływ na działalność podmiotów wykonujących działalność leczniczą, w tym aktów wykonawczych do ustaw wymienionych w punkcie 1) – 3) powyżej</li>
                        </ul>
                    </li>
                    <li><p className={css.text}>Praktyka jest wpisana do rejestru podmiotów wykonujących działalność leczniczą numer księgi rejestrowej: 000000227735, organ rejestrowy: Krajowa Izba Fizjoterapeutów. </p></li>
                </ul>
            </div>
            
            <div className={css.ragulamin_text_inner}>
                <div className={css.subtitle_wrapper}>
                    <p className={css.subtitle}>§2.</p>
                    <p className={css.subtitle}>CELE I ZADANIA PRAKTYKI</p>
                </div>
                <ul className={css.list}>
                    <li><p className={css.text}>Celem Praktyki jest organizowanie i udzielanie ambulatoryjnych świadczeń zdrowotnych z zakresu fizjoterapii, służących ratowaniu, zachowaniu, przywracaniu i poprawie zdrowia. </p></li>
                    <li><p className={css.text}>Do zadań Praktyki należy w szczególności:</p>
                        <ul className={css.list_inner}>
                            <li>udzielanie świadczeń zdrowotnych z zakresu fizjoterapii, w tym udzielanie indywidualnych porad i konsultacji w zakresie fizjoterapii, także w miejscu wezwania;</li>
                            <li>działania edukacyjne na rzecz pacjentów, promocja zdrowia i działania mające na celu fizjoprofilaktykę zdrowia;</li>
                            <li>współdziałanie z innymi podmiotami wykonującymi działalność leczniczą;</li>
                            <li>inne zadanie wynikające z powszechnie obowiązujących przepisów prawa.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className={css.ragulamin_text_inner}>
                <div className={css.subtitle_wrapper}>
                    <p className={css.subtitle}>§3.</p>
                    <p className={css.subtitle}>RODZAJ DZIAŁALNOŚCI LECZNICZEJ I ZAKRES UDZIELANYCH ŚWIADCZEŃ ZDROWOTNYCH</p>
                </div>
                <ul className={css.list}>
                    <li><p className={css.text}>Praktyka prowadzi działalność leczniczą rodzaju ambulatoryjne świadczenia zdrowotne.</p></li>
                    <li><p className={css.text}>Praktyka udziela ambulatoryjnych świadczeń zdrowotnych z zakresu fizjoterapii, polegających na:</p>
                        <ul className={css.list_inner}>
                            <li>diagnostyce funkcjonalnej pacjenta;</li>
                            <li>Diagnostyce ultrasonograficznej pacjenta;</li>
                            <li>Kwalifikowaniu, planowaniu i prowadzeniu terapii manualnej;</li>
                            <li>kwalifikowaniu, planowaniu i prowadzeniu kinezyterapii;</li>
                            <li>kwalifikowaniu, planowaniu i prowadzeniu masażu;</li>
                            <li>kwalifikowaniu i planowaniu fizykoterapii;</li>
                            <li>zlecaniu wyrobów medycznych, zgodnie z przepisami wydanymi na podstawie art. 38 ust. 4 ustawy z dnia 12 maja 2011 r. o refundacji leków, środków spożywczych specjalnego przeznaczenia żywieniowego oraz wyrobów medycznych; </li>
                            <li>dobieraniu do potrzeb pacjenta wyrobów medycznych;</li>
                            <li>nauczaniu pacjentów posługiwania się wyrobami medycznymi;</li>
                            <li>prowadzeniu działalności fizjoprofilaktycznej, polegającej na popularyzowaniu zachowań prozdrowotnych oraz kształtowaniu i podtrzymywaniu sprawności i wydolności osób w różnym wieku w celu zapobiegania niepełnosprawności;</li>
                            <li>wydawaniu opinii i orzeczeń odnośnie do stanu funkcjonalnego osób poddawanych fizjoterapii oraz przebiegu procesu fizjoterapii;</li>
                            <li>nauczaniu pacjentów mechanizmów kompensacyjnych i adaptacji do zmienionego potencjału funkcji ciała i aktywności.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className={css.ragulamin_text_inner}>
                <div className={css.subtitle_wrapper}>
                    <p className={css.subtitle}>§4.</p>
                    <p className={css.subtitle}>MIEJSCE UDZIELANIA ŚWIADCZEŃ ZDROWOTNYCH</p>
                </div>
                <p className={css.text}>Miejscem udzielania świadczeń zdrowotnych jest gabinet, znajdujący się w Krakowie, pod adresem: ul. Rydlówka 9/97 (kod pocztowy: 30-363).</p>
            </div>

            <div className={css.ragulamin_text_inner}>
                <div className={css.subtitle_wrapper}>
                    <p className={css.subtitle}>§5.</p>
                    <p className={css.subtitle}>PRZEBIEG I ORGANIZACJA PROCESU UDZIELANIA ŚWIADCZEŃ ZDROWOTNYCH</p>
                </div>
                <ul className={css.list}>
                    <li><p className={css.text}>Świadczenia zdrowotne są udzielane wyłącznie odpłatnie. Wysokość opłat za udzielone świadczenia zdrowotne określa cennik, stanowiący <b>Załącznik nr 1 do Regulaminu.</b></p></li>
                    <li><p className={css.text}>Świadczenia zdrowotne są udzielane od poniedziałku do piątku w godzinach od 08:00 do 19:00 (z wyłączeniem dni ustawowo wolnych od pracy). W uzasadnionych przypadkach istnieje możliwość udzielenia świadczeń zdrowotnych w innych dniach i godzinach.</p></li>
                    <li><p className={css.text}>Świadczenia zdrowotne są udzielane pacjentom po uprzedniej rejestracji, w terminie ustalonym z pacjentem.</p></li>
                    <li><p className={css.text}>Rejestracja pacjentów odbywa się:</p>
                        <ul className={css.list_inner}>
                            <li>bezpośrednio w gabinecie;</li>
                            <li>telefonicznie pod numerem +48 606776649;</li>
                            <li>za pośrednictwem strony internetowej www.fizjoterapiawitkiewicz.pl</li>
                        </ul>
                    </li>
                    <li><p className={css.text}>Pacjenci mogą rejestrować się osobiście albo za pośrednictwem przedstawiciela ustawowego lub faktycznego.</p></li>
                    <li><p className={css.text}>Płatność za udzielane świadczenia zdrowotne ma miejsce po udzieleniu świadczenia. Dostępne formy płatności to: gotówka, przelew na numer telefonu (BLIK) lub karta podarunkowa.</p></li>
                    <li><p className={css.text}>Przed przystąpieniem do udzielenia świadczenia zdrowotnego pacjent lub jego przedstawiciel ustawowy bądź faktyczny zobowiązany jest:</p>
                        <ul className={css.list_inner}>
                            <li>okazać dokument tożsamości pacjenta oraz podać dane pacjenta niezbędne do prawidłowego uzupełnienia dokumentacji medycznej (a w szczególności: imię i nazwisko, numer PESEL i adres zamieszkania);</li>
                            <li>udzielić wszelkich wymaganych prawem zgód;</li>
                            <li>zaakceptować postanowienia regulaminów oraz klauzuli przetwarzania danych osobowych;</li>
                            <li>udzielić wszelkich informacji niezbędnych do prawidłowego udzielenia świadczenia zdrowotnego;</li>
                            <li>okazać posiadaną dokumentację medyczną oraz wyniki badań; 6) dokonać płatności za udzielenie świadczenia zdrowotnego.</li>
                        </ul>
                    </li>
                    <li><p className={css.text}>Godzina wizyty podana przy rejestracji jest godziną rozpoczęcia udzielania świadczenia zdrowotnego. <b>Pacjent zobowiązany jest do stawienia się w gabinecie  punktualnie na umówioną godzinę wizyty.</b></p></li>
                    <li><p className={css.text}><b>W przypadku spóźnienia się pacjenta na wizytę ulega ona odpowiedniemu skróceniu.</b></p></li>
                    <li><p className={css.text}>Podana godzina rozpoczęcia wizyty jest godziną orientacyjną i może ulec przesunięciu ze względu na specyfikę pracy fizjoterapeuty. W przypadku opóźnienia wynikającego z przesunięcia z winy fizjoterapeuty zabieg zostanie wykonany w pełnym wymiarze czasu.</p></li>
                    <li><p className={css.text}><b>Pacjent może odwołać wizytę (zmienić jej termin) najpóźniej na 24 godziny przed umówioną godziną wizyty.</b> W przypadku odwołania (zmiany terminu) wizyty po tym terminie, Praktyka jest uprawniona do dochodzenia od pacjenta <b>odszkodowania w wysokości równowartości wizyty odwołanej</b> (zmienionej) po terminie. Każdy przypadek będzie rozpatrywany indywidualnie. </p></li>
                    <li><p className={css.text}>Dzień przed zaplanowaną wizytą Pacjent otrzymuje <b>wiadomość przypominającą o wizycie</b> w formie wiadomości SMS lub wiadomości E-mail wraz z linkiem do potwierdzenia wizyty w systemie rezerwacyjnym. <b>Brak potwierdzenia do godziny 15:00 dnia poprzedzającego wizytę skutkować będzie jej automatycznym odwołaniem i zwolnieniem terminu.</b></p></li>
                    <li><p className={css.text}>W przypadku, gdy w trakcie udzielenia świadczenia zdrowotnego nastąpi konieczność udzielenia dodatkowych świadczeń ich koszt jest ustalany indywidualnie z pacjentem, a płatność za udzielone świadczenie zdrowotne odbywa się niezwłocznie po jego udzieleniu.</p></li>
                    <li><p className={css.text}>W związku z zapłatą za udzielone świadczenia zdrowotne, wystawiana jest faktura, zgodnie z obowiązującymi przepisami w tym zakresie.</p></li>
                </ul>
            </div>

            <div className={css.ragulamin_text_inner}>
                <div className={css.subtitle_wrapper}>
                    <p className={css.subtitle}>§6.</p>
                    <p className={css.subtitle}>UDOSTĘPNIANIE DOKUMENTACJI MEDYCZNEJ</p>
                </div>
                <ul className={css.list}>
                    <li><p className={css.text}>Praktyka prowadzi, przechowuje i udostępnia dokumentację medyczną osób korzystających ze świadczeń zdrowotnych, zgodnie z zasadami określonymi w przepisach prawa, a w szczególności w ustawie z dnia 6 listopada 2008 r. o prawach pacjenta i Rzeczniku Praw Pacjenta oraz przepisach wykonawczych do tej ustawy.</p></li>
                    <li><p className={css.text}>Praktyka zapewnia ochronę danych zawartych w dokumentacji medycznej.</p></li>
                    <li><p className={css.text}>Dokumentacja medyczna jest udostępniana pacjentowi oraz innym podmiotom i osobom wskazanym w ustawie z dnia 6 listopada 2008 r. o prawach pacjenta i Rzeczniku praw Pacjenta.</p></li>
                    <li><p className={css.text}>Dokumentacja medyczna jest przechowywana przez okres przewidziany w przepisach prawa.</p></li>
                    <li><p className={css.text}>Wysokość opłat za udostępnienie dokumentacji medycznej określa <b>Załącznik nr 2 do Regulaminu.</b></p></li>
                </ul>
            </div>

            <div className={css.ragulamin_text_inner}>
                <div className={css.subtitle_wrapper}>
                    <p className={css.subtitle}>§7.</p>
                    <p className={css.subtitle}>POSTANOWIENIA KOŃCOWE</p>
                </div>
                <ul className={css.list}>
                    <li><p className={css.text}>Integralną część Regulaminu stanowią wymienione w nim następujące załączniki:</p>
                        <ul className={css.list_inner}>
                            <li>Załącznik nr 1 – CENNIK OPŁAT ZA ŚWIADCZENIA ZDROWOTNE;</li>
                            <li>Załącznik nr 2 – CENNIK OPŁAT ZA UDOSTĘPNIENIE DOKUMENTACJI MEDYCZNEJ.</li>
                        </ul>
                    </li>
                    <li><p className={css.text}>Wszyscy pracownicy Praktyki, pacjenci Praktyki, osoby odwiedzające oraz inne osoby przebywające w miejscu udzielania świadczeń zdrowotnych, o którym mowa w § 4 Regulaminu, w związku z procesem udzielania świadczeń zdrowotnych, są zobowiązani do przestrzegania Regulaminu.</p></li>
                    <li><p className={css.text}>W sprawach nieuregulowanych w Regulaminie zastosowanie mają przepisy powszechnie obowiązującego prawa, a w szczególności ustawy z dnia 15 kwietnia 2011 r. o działalności leczniczej, ustawy z dnia 25 września 2015 r. o zawodzie fizjoterapeuty, ustawy z dnia 6 listopada 2008 roku o prawach pacjenta i Rzeczniku Praw Pacjenta, akty wykonawcze do tych ustaw oraz inne przepisy prawa powszechnie obowiązującego.</p></li>
                    <li><p className={css.text}>Regulamin wchodzi w życie z dniem 29.10.2019.</p></li>
                </ul>
            </div>

            <div className={css.attechment}>
                <div className={css.subtitle_wrapper}>
                    <p className={css.subtitle_right}>Załącznik nr 1 do REGULAMINU PRAKTYKI</p>
                    <p className={css.subtitle}>CENNIK OPŁAT ZA ŚWIADCZENIA ZDROWOTNE</p>
                    <p className={css.text}>udzielane przez „ Fizjoterapia Borys Witkiewicz”</p>
                </div>
                <table>
                    <tr><th></th><th colspan="2">KONSULTACJE FIZJOTERAPEUTYCZNE</th></tr>
                    <tr>
                        <td></td>
                        <td>Konsultacja fizjoterapeutyczna (dorośli)</td>
                        <td>150,00 zł</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Terapia indywidualna – dorośli (45 minut)</td>
                        <td>150,00 zł</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Kinesiotaping – jeśli wykonywany poza wizytą</td>
                        <td>40-60 zł</td>
                    </tr>
                </table>
            </div>

            <div className={css.attechment}>
                <div className={css.subtitle_wrapper}>
                    <p className={css.subtitle_right}>Załącznik nr 2 do REGULAMINU PRAKTYKI</p>
                    <p className={css.subtitle}>CENNIK OPŁAT ZA UDOSTĘPNIENIE DOKUMENTACJI MEDYCZNEJ</p>
                    <p className={css.text_borys}>udzielane przez „Fizjoterapia Borys Witkiewicz”</p>
                </div>
                <table>
                    <tr>
                        <th></th>
                        <th>SPOSÓB UDOSTĘPNIENIA</th>
                        <th>OPŁATA ZA UDOSTĘPNIENIE</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Kopia dokumentacji medycznej</td>
                        <td>0,50 zł za stronę</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Wydruk dokumentacji medycznej</td>
                        <td>0,50 zł za stronę</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Odpis dokumentacji medycznej</td>
                        <td>15,00 zł za stronę</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Wyciąg dokumentacji medyczne</td>
                        <td>15,00 zł za stronę</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Na informatycznym nośniku danych (pen drive)</td>
                        <td>10 zł</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Pierwsze udostępnienie dokumentacji medycznej w postaci kopii, wydruku, odpisu lub wyciągu lub na informatycznym nośniku danych</td>
                        <td>bezpłatnie</td>
                    </tr>
                </table>
            </div>
        </div>}


    </>)
}

export default Regulamin