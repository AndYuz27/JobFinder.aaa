import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function FeedbackInfo(){

    const [fdbk, setFdbk] = useState([])
    const [cmp, setCmp] = useState([])
    const [cmpid, setIdCmp] = useState('')
    const {id} = useParams()
    useEffect(() => {
        if ( id ) {
            axios.get(`https://sppjfapi.andrieiiuzlov.repl.co/api/feedback/${id}`)
                .then(res => {
                    console.log(res.data.rows)
                    setFdbk(res.data.rows)
                    setIdCmp(res.data.rows[0].comp_id)
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
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ cmpid ]);


   return(
    <div className="FeedbackInfo">
        <div className="fdbk-inf">
            {fdbk.map((e) =>{
                return(
                    <div className="vacancy_ppp" key={e.id}> {/*карточка товара */}
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