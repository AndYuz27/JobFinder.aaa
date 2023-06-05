import { useState, useEffect } from "react";
import { getVacs } from "../api"
import '../styles/Main.css'

export default function Vakansii() {


    const [vacs, setVacs] = useState([]);
    useEffect(() => {
        const setNewCards = async () => {
            let res = await getVacs();
            console.log(res);
            setVacs(res);
        };
        setNewCards();
    }, []);

    return(
        <div className="main_page">
            {vacs.map((e) => {return <div className="vacancy_ppp" key={e.id}>
                                <h3>{e.name_vacancy}</h3>
                                <p>Заработная плата: {e.salary} руб.</p>
                                <p>Режим работы {e.shedule_vacancy}</p>
                                <p>Тип работы {e.type_work}</p>
                            </div>})}

        </div>
    )
}