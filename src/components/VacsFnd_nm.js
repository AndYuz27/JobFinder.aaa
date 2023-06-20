import { useEffect } from "react";
import { useState } from "react"
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import Card from "./Card";


export default function VacsFnd_nm() {
    const [fndvacs, setFndVacs] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        if ( id ) {
            axios.get(`https://sppjfapi.andrieiiuzlov.repl.co/api/vacancy/name/${id}`)
                .then(res => {
                    console.log(res.data.rows)
                    setFndVacs(res.data.rows)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ ]);

    
    return(
        <div className="CompSearch">
            {fndvacs.map((e) => {return (
            <div className="vacancy_ppp" key={e.id}> {/*карточка товара */}
            <h3><a href={`/vakansii/${e.id}`}>{e.name_vacancy}</a></h3>
            <p>Заработная плата: {e.salary} руб.</p>
            <p>Режим работы {e.shedule_vacancy}</p>
            <p>Тип работы {e.type_work}</p>
            <hr></hr>
        </div>)
            })}

        </div>
    )
}