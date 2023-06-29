import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function VacInfo(){
    const [vac, setVac] = useState([])
    const [vacId, setVacId] = useState('')
    const [vacIdCmp, setVacIdCmp] = useState('')
    const [cmp, setCmp] = useState([])
    const [fbck, setfbck] = useState([])
    const cmp_st = localStorage.getItem('cmp_name')
    const [validcmp, setvalidcmp] = useState(false)
    const [data, setData] = useState({
        nm:  '',
        ct: '',
        milo: '',
        phn: '',
        cmt: '',
        cv: '',
        idvac: '',
        vacIdCmp: ''
    })
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        if ( id ) {
            axios.get(`https://sppjfapi.andrieiiuzlov.repl.co/api/vacancy/i/${id}`)
                .then(res => {
                    console.log(res.data.rows)
                    setVac(res.data.rows)
                    setVacId(res.data.rows[0].id)
                    setVacIdCmp(res.data.rows[0].comp_id)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id ]);
console.log(vacIdCmp)
    useEffect(() => {
        if ( vacIdCmp ) {
            axios.get(`https://sppjfapi.andrieiiuzlov.repl.co/api/company/${vacIdCmp}`)
                .then(res => {
                    console.log(res.data.rows)
                    setCmp(res.data.rows)
                    // setCmp(res.data.rows[0].nik_name)
                    setvalidcmp(res.data.rows[0].nik_name === cmp_st)

                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ vacIdCmp ]);
    useEffect(() => {
        if ( vacIdCmp ) {
            axios.get(`https://sppjfapi.andrieiiuzlov.repl.co/api/feedback_cmp/${vacId}`)
                .then(res => {
                    console.log(res.data.rows)
                    setfbck(res.data.rows)


                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ vacIdCmp ]);


    function submit(e) {
        e.preventDefault();
        axios.post(`https://sppjfapi.andrieiiuzlov.repl.co/api/feedback`, {
            nm: data.nm,
            ct: data.ct,
            milo: data.milo,
            phn: data.phn,
            cmt: data.cmt,
            cv: data.cv,
            idvac: vacId,
            comp_id: vacIdCmp
        }).then(res => {
            console.log(res.data)
            window.location.reload()

        })
    }


    function handle(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

if(!validcmp){
    return(
        <div>
                        {vac.map((e) => {return <div className="vacancy_ppp" key={e.id}> {/*карточка товара */}
                                <h3>{e.name_vacancy}</h3>
                                <p>Заработная плата: {e.salary} руб.</p>
                                <p>Режим работы {e.shedule_vacancy}</p>
                                <p>Тип работы {e.type_work}</p>
                            </div>})}
                            {cmp.map((e) => {return <div className="vacancy_ppp" key={e.id}> {/*карточка товара */}
                            <p>Вакансия от  <a href={`/companies/${e.nik_name}`}></a>{e.company_name}</p>
                            <p>{e.adress_comp}</p>
                                <hr></hr>
                            </div>})}
                            <h3>На работу откликаются из следующих городов:</h3>
                            <ul>
                                                            {fbck.map((e) => {return <li key={e.id}>{e.city }</li> 
                                
})}
                            </ul>

                            <h3>Откликнуться на вакансию</h3>
                            <form className='form-company' onSubmit={(e) => submit(e)}>
        <input onChange={(e)=>handle(e)} value={data.nm} placeholder='Ф.И.О' type="text" name='nm' id='nm'></input>
        <input onChange={(e)=>handle(e)} value={data.ct} placeholder='Город' type="text" name='ct' id='ct'></input>
        <input onChange={(e)=>handle(e)} value={data.milo} placeholder='E-Mail' type="email" name='milo' id='milo'></input>
        <input onChange={(e)=>handle(e)} value={data.phn} placeholder='Телефон' type="number" name='phn' id='phn'></input>
        <input onChange={(e)=>handle(e)} value={data.cmt} placeholder='коментарий' type="text" name='cmt' id='cmt'></input>
        <input onChange={(e)=>handle(e)} value={data.cv} placeholder='ссылка на резюме' type="text" name='cv' id='cv'></input>
        <button>Добавить</button>

        </form>
        </div>
    )
}else{
    return(
        <div>
        {vac.map((e) => {return <div className="vacancy_ppp" key={e.id}> {/*карточка товара */}
                <h3>{e.name_vacancy}</h3>
                <p>Заработная плата: {e.salary} руб.</p>
                <p>Режим работы {e.shedule_vacancy}</p>
                <p>Тип работы {e.type_work}</p>
            </div>})}
            {cmp.map((e) => {return <div className="vacancy_ppp" key={e.id}> {/*карточка товара */}
            <p>Вакансия от  <a href={`/companies/${e.nik_name}`}></a>{e.company_name}</p>
            <p>{e.adress_comp}</p>
                <hr></hr>
            </div>})}
            <h3>Отклики на вакансию</h3>
            {fbck.map((e) => {return <div className="vacancy_ppp" key={e.id}> {/*карточка товара */}
                                <h3>{e.fio}</h3>
                                <p>Город: {e.city }</p>
                                <p>E-mail <a href={`mailto:${e.email}`}>{e.email}</a></p>
                                <p>Телефон {e.phone}</p>
                                <a href={e.cv_link}>ссылка на резюме</a>
                            </div>})}

</div>
    )
}
    

}