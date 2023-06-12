import {useState, useEffect} from 'react'
import { getComps } from "../api"
import Card from './Card'
import '../App.css'





export default function Companies(){

    const [comps, setProds] = useState([]);
    let [isLoadd, setIsLoadd] = useState(false);
    useEffect(() => {
        const setNewCards = async () => {
            let res = await getComps();
            setIsLoadd(true)
            console.log(res);
            setProds(res);
        };
        setNewCards();
    }, []);

    if(!isLoadd){
        return(
            <div className='comp_page'>
                <h2>Загрузка данных</h2>
                <div className='load_page' style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <img src='https://flottgroup.com/upload/blog/2022-06-30/zagruzka.gif' alt='LOADING' style={{width: "128px"}}/>
                </div>
            </div>
        )
    }else{
    return(
        <div className='comp_page'>
            <div className='jjhh'>Вот что найдено</div>
            <div className='hhj'>
            {comps.map((el, index) => {return <Card key={index} comp={el}/>})}

            </div>
        </div>
    )
}
}