import { useState, useEffect } from "react";
import { getVacs } from "../api"
import '../styles/Main.css'

export default function Vakansii() {


    const [vacs, setVacs] = useState([]);
    let [isLoadd, setIsLoadd] = useState(false);

    useEffect(() => {
        const setNewCards = async () => {
            let res = await getVacs();
            setIsLoadd(true)
            console.log(res);
            setVacs(res);
        };
        setNewCards();
    }, []);

    if(!isLoadd){
        return(
            <div className='comp_page'> {/*окно загрузки*/}
                <h2>Загрузка данных</h2>
                <div className='load_page' style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <img src='https://flottgroup.com/upload/blog/2022-06-30/zagruzka.gif' alt='LOADING' style={{width: "128px"}}/>
                </div>
            </div>
        )
    }else{

    return(
        <div className="main_page">
            {vacs.map((e) => {return <div className="vacancy_ppp" key={e.id}> {/*карточка товара */}
                                <h3>{e.name_vacancy}</h3>
                                <p>Заработная плата: {e.salary} руб.</p>
                                <p>Режим работы {e.shedule_vacancy}</p>
                                <p>Тип работы {e.type_work}</p>
                                <hr></hr>
                            </div>})}

        </div>
    )
    }
}