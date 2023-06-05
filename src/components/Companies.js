import {useState, useEffect} from 'react'

import { getComps } from "../api"
import Card from './Card'
import '../App.css'





export default function Companies(){

    const [comps, setProds] = useState([]);
    useEffect(() => {
        const setNewCards = async () => {
            let res = await getComps();
            console.log(res);
            setProds(res);
        };
        setNewCards();
    }, []);
    return(
        <div className='comp_page'>
            <div className='jjhh'>Вот что найдено</div>
            <div className='hhj'>
            {comps.map((el, index) => {return <Card key={index} comp={el}/>})}

            </div>
        </div>
    )
}