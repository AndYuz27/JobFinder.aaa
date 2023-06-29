import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function FeedbackInfo(){

    const [fdbk, setFdbk] = useState([])
    const [cmp, setCmp] = useState([])
    const [vc, setVac] = useState([])
    const [cmpid, setIdCmp] = useState('')
    const [vcid, setIdVac] = useState('')
    const [nname, setNikName] = useState('')
    const {id} = useParams()
    useEffect(() => {
        if ( id ) {
            axios.get(`https://sppjfapi.andrieiiuzlov.repl.co/api/feedback/${id}`)
                .then(res => {
                    console.log(res.data.rows)
                    setFdbk(res.data.rows)
                    setIdCmp(res.data.rows[0].comp_id)
                    setIdVac(res.data.rows[0].id_vac)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id ]);
    useEffect(() => {
        if ( cmpid ) {
            axios.get(`https://sppjfapi.andrieiiuzlov.repl.co/api/company/${cmpid}`)
                .then(res => {
                    console.log(res.data.rows)
                    setCmp(res.data.rows)
                    setNikName(res.data.rows[0].nik_name)

                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ cmpid ]);
    useEffect(() => {
        if ( vcid ) {
            axios.get(`https://sppjfapi.andrieiiuzlov.repl.co/api/vacancy/i/${vcid}`)
                .then(res => {
                    console.log(res.data.rows)
                    setVac(res.data.rows)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ vcid ]);

    function delVac(e) {

        if (confirm("Вы хотите запись об отклике?") == true) {
            fetch(`https://sppjfapi.andrieiiuzlov.repl.co/api/feedback/${e}`,{
                method: 'DELETE'
            }).then((result) => {
                result.json().then((res) =>{
                    console.log(res)
                })
            })
            window.location.href=`/companies/edit/${nname}`
        } else {
                alert('Удаление отмененно пользователем')
        }
    
    
    }
if(!cmpid){
    return(
        <div className="3sfdgfhj">
            <h2>Данные об отклике не обнаружено, возможно инфа была удалена</h2>
        </div>
    )
}else{
   return(
    <div className="FeedbackInfo">
        <div className="fdbk-inf">
            {fdbk.map((e) =>{
                return(
                    <div className="vacancy_ppp" key={e.id}>
                    <button onClick={() => delVac(e.id)}>Удалить запись об отклике</button>
                    <h3>{e.fio}</h3>
                    <p>Город: {e.city }</p>
                    <p>E-mail <a href={`mailto:${e.email}`}>{e.email}</a></p>
                    <p>Телефон {e.phone}</p>
                    <a href={e.cv_link}>ссылка на резюме</a>
                </div>
                )
            })}
        </div>
        <div className="cmp-inf">
        <h2>Откликается на вакансию:</h2>
        {vc.map((e) => {return <div className="vacancy_ppp" key={e.id}> {/*карточка товара */}
                                <h3>{e.name_vacancy}</h3>
                                <p>Заработная плата: {e.salary} руб.</p>
                                <p>Режим работы {e.shedule_vacancy}</p>
                                <p>Тип работы {e.type_work}</p>
                            </div>})}
            {cmp.map((e) => {
                return(
                    <div>
                    <h2>Вакансия от <a href={`/companies/${e.nik_name}`}>{e.company_name}</a></h2>
                    </div>
                    )
            })}
        </div>
    </div>
   )
        }
}