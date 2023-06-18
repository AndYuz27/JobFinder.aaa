import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { getCompany } from "../api.js";
import axios from "axios";
import Card from "./Card.js";
import '../styles/Companies.css'
import ReactStars from "react-rating-stars-component";



export default function CompanyInfo(){

    // localStorage.setItem('own_name', 'strom-trakt')
    const own_name = localStorage.getItem('cmp_name')

    const [tour, setTour] = useState([])
    const [vacs, setVacs] = useState([])
    const [isLoad, setIsLoad] = useState(false)
    const [validOwn, setValidOwn] = useState('')
    const { id } = useParams();
    // console.log(id)
    useEffect(() => {
        if ( id ) {
            axios.get(`https://sppjfapi.andrieiiuzlov.repl.co/api/company/name/${id}`)
                .then(res => {
                    console.log(res.data.rows)
                    setTour(res.data.rows)
                    setIsLoad(true)
                    setValidOwn(own_name === res.data.rows[0].nik_name)
                    console.log(ddd)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id ]);
    
console.log(validOwn)
    let id_comp = tour.map((el) => {return el.id})[0]
    console.log(id_comp)
    useEffect(() => {
        if ( id_comp ) {
            
            console.log(id_comp)
            axios.get(`https://sppjfapi.andrieiiuzlov.repl.co/api/vacancy/${id_comp}`)
                .then(res => {
                    console.log(res.data.rows)
                    setVacs(res.data.rows)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id_comp ]);

    
if(!isLoad) {
    return (
        <div className='comp_page'>
        <h2>Загрузка данных</h2>
        <div className='load_page' style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <img src='https://flottgroup.com/upload/blog/2022-06-30/zagruzka.gif' alt='LOADING' style={{width: "128px"}}/>
        </div>
    </div>
    )
}else{
if(validOwn) {
    return(
        <div className="company_info">
                        {tour.map((el) => {return <div className="info_company" key={el.id}>
                        <h2>Информация о компании/ИП</h2>

            <div className="company_info__img">
            <div className="img_comp"  style={{backgroundImage: `url(${el.image_company})`, borderRadius: "15px"}}></div>
            </div>
            <div className="company_info__description">
                <p>Название компании: <b> {el.company_name}</b></p>

                <h3>Контакты:</h3>
                <p>{el.contacts__comp}</p>
                <p>Адрес: {el.adress_comp} <a href={`http://maps.yandex.ru/?text=${el.adress_comp}`}>Найти в Яндекс Карты</a></p>
                <ReactStars
                edit={false}
                isHalf={false}
                
    count={5}
    value={el.rathing}
    size={48}
    activeColor="#ffd700"
  />

        <a href={`/companies/edit/${el.nik_name}`}>Редактировать страницу</a>
            </div>
                        </div>})}
                        <div className="vcs_comps">
                        {tour.map((el) => {return <div key={el.id}>
                                <h3>Описание</h3>
                                <p>{el.company_info}</p>
</div>})}
                            <h2>Вакансии компании</h2>
                            <div className="vcs_grid">

                        
                        {vacs.map((e)=> {
                            return <div className="vacancy" key={e.id}>
                                <h3><a href={`/vakansii/${e.id}`}>{e.name_vacancy}</a></h3>
                                <p>Заработная плата: {e.salary} руб.</p>
                                <p>Режим работы {e.shedule_vacancy}</p>
                                <p>Тип работы {e.type_work}</p>

                            </div>
                            
                        })}</div>
                        </div>
                        
        </div>
    )
}else{
    return(
        <div className="company_info">
                        {tour.map((el) => {return <div className="info_company" key={el.id}>
                        <h2>Информация о компании/ИП</h2>

            <div className="company_info__img">
            <div className="img_comp"  style={{backgroundImage: `url(${el.image_company})`, borderRadius: "15px"}}></div>
            </div>
            <div className="company_info__description">
                <p>Название компании: <b> {el.company_name}</b></p>

                <h3>Контакты:</h3>
                <p>{el.contacts__comp}</p>
                <p>Адрес: {el.adress_comp} <a href={`http://maps.yandex.ru/?text=${el.adress_comp}`}>Найти в Яндекс Карты</a></p>
                <ReactStars
                edit={false}
                isHalf={false}
                
    count={5}
    value={el.rathing}
    size={48}
    activeColor="#ffd700"
  />

            </div>
                        </div>})}
                        <div className="vcs_comps">
                        {tour.map((el) => {return <div key={el.id}>
                                <h3>Описание</h3>
                                <p>{el.company_info}</p>
</div>})}
                            <h2>Вакансии компании</h2>
                            <div className="vcs_grid">

                        
                        {vacs.map((e)=> {
                            return <div className="vacancy" key={e.id}>
                                <h3>{e.name_vacancy}</h3>
                                <p>Заработная плата: {e.salary} руб.</p>
                                <p>Режим работы {e.shedule_vacancy}</p>
                                <p>Тип работы {e.type_work}</p>
                            </div>
                        })}</div>
                        </div>
                        
        </div>
    )
}
        

}




}

function Vacancy(){

}


