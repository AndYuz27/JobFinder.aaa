import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import '../Company/Companies.css'



export default function Invite(){

    // localStorage.setItem('own_name', 'strom-trakt')
    const own_name = localStorage.getItem('cmp_name')

    const [tour, setTour] = useState([])
    const [isLoad, setIsLoad] = useState(false)
    const { id } = useParams();
    // console.log(id)
    useEffect(() => {
        if ( id ) {
            axios.get(`https://sppjfapi.andrieiiuzlov.repl.co/api/invite/${id}`)
                .then(res => {
                    console.log(res.data.rows)
                    setTour(res.data.rows)
                    setIsLoad(true)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id ]);
    

    function delInv(e) {

        if (confirm("Вы хотите удалить сообщение об приглашении? ") == true) {
            fetch(`https://sppjfapi.andrieiiuzlov.repl.co/api/invite/${e}`,{
                method: 'DELETE'
            }).then((result) => {
                result.json().then((res) =>{
                    console.log(res)
                })
            })
            alert('Удаление завершено')
        } else {
                alert('Удаление отмененно пользователем')
        }
    
    
    }
    
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

    let style_card = {
        backgroundColor: "lightblue",
        boxShadow: "1px 3px 1px #9E9E9E",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px"
    }
    return(
        <div className="invite_card">
            <h2>Данные об кандидате</h2>
                        {tour.map((el) => {return <div className="info_invite" key={el.id} style={style_card}>
                                <h3>{el.comapny_name}</h3>
                                <p>{el.fio}</p>
                                <a href={`mailto:${el.email}`}>{el.email}</a>
                                <a href={el.docs}>Ссылка на документы</a>
                                <button onClick={() => delInv(el.id)}>Удалить сообщение о приглашении</button>
                        </div>})}
                       
                        </div>
                        
    )

        

}




}

function Vacancy(){

}


