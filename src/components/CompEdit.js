import Axios from 'axios'
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';



export default function CompEdit(){
    const [tour, setTour] = useState([])
    const [name, setName] = useState('')
    const [vacs, setVacs] = useState([])
    const [vvac, setVvac] = useState('none')
    const cmp_st = localStorage.getItem('cmp_name')
    const [validcmp, setvalidcmp] = useState(false)
    const [id_comp, setIdComp] = useState('')
    const [addr_c, setAddr] = useState('')
    const [id_vacs, setId] = useState([])
    const [data, setData] = useState({
        nm:  '',
        salary:  '',
        shdl:  '',
        twrk:  '',
        stovc:  '',
        pos_id:  '',
        comp_id:  '',
        addr:  '',
    });
    const { id } = useParams();

    useEffect(() => {
        if ( id ) {
            Axios.get(`https://sppjfapi.andrieiiuzlov.repl.co/api/company/name/${id}`)
                .then(res => {
                    console.log(res.data.rows)
                    setTour(res.data.rows)
                    setName(res.data.rows[0].company_name)
                    setIdComp(res.data.rows[0].id)
                    setAddr(res.data.rows[0].adress_comp)
                    setvalidcmp(res.data.rows[0].nik_name === cmp_st)
                    console.log(res.data.rows[0].id)
                    console.log(res.data.rows[0].company_name)
                    setIsLoad(true)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id ]);

console.log(validcmp)

    
    useEffect(() => {

        
        if ( id_comp ) {
            console.log(id)
            Axios.get(`https://sppjfapi.andrieiiuzlov.repl.co/api/vacancy/${id_comp}`)
                .then(res => {
                    console.log(res.data.rows)
                    setVacs(res.data.rows)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id_comp ]);
    console.log(addr_c)
    

    function submitVac(e) {
        e.preventDefault();
        console.log(data)
        Axios.post('https://sppjfapi.andrieiiuzlov.repl.co/api/vacancy', {
            nm: data.nm,
            salary: data.salary,
            shdl: data.shdl,
            twrk: data.twrk,
            stovc: data.stovc,
            pos_id: data.pos_id,
            comp_id: id_comp,
            addr: addr_c,

        }).then(res => {
            console.log('data is added')
            console.log(res.data)
            alert('Вакансия Добавлена')
        })
    }
    function handleVac(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    function delVac(e) {
    fetch(`https://sppjfapi.andrieiiuzlov.repl.co/api/vacancy/${e}`,{
        method: 'DELETE'
    }).then((result) => {
        result.json().then((res) =>{
            console.log(res)
        })
    })
}
    
if(!cmp_st){
    window.location.href="/admin/auth"
    return(
        <div>
            <h2>Вы не вошли в систему. Редактирование невозможно</h2>
        </div>
    )
}else{
    return(
        <div className="CompEdit">
            <h2>Редактирование страницы компании {name}</h2>
            <button onClick={() => setVvac('block')}>Добавить вакансию</button>
        <div className='vacs-edit' style={{display: vvac}}>
        <h2>Добавление Вакансии</h2>

                    <form className='form-company' onSubmit={(e) => submitVac(e)}>
                <input onChange={(e)=>handleVac(e)} value={data.nm} placeholder='название вакансии' type="text" name='nm' id='nm'></input>
                <input onChange={(e)=>handleVac(e)} value={data.salary} placeholder='ЗП' type="number" name='salary' id='salary'></input>
                <input onChange={(e)=>handleVac(e)} value={data.shdl} placeholder='график работы' type="text" name='shdl' id='shdl'></input>
                <input onChange={(e)=>handleVac(e)} value={data.twrk} placeholder='тип работы' type="text" name='twrk' id='twrk'></input>
                <input onChange={(e)=>handleVac(e)} value={data.stovc}  placeholder='состояние вакансии' type="text" name='stovc' id='stovc'></input>
                <input onChange={(e)=>handleVac(e)} value={data.pos_id} placeholder='ИД должности' type="text" name='pos_id' id='pos_id'></input>

                <button>Submit</button>
            </form>
        </div>
        {vacs.map((e)=> {
                            return <div className="vacancy" key={e.id}>
                                <h3>{e.name_vacancy}</h3>
                                <button onClick={() => delVac(e.id)}>delete</button>
                                <p>Заработная плата: {e.salary} руб.</p>
                                <p>Режим работы {e.shedule_vacancy}</p>
                                <p>Тип работы {e.type_work}</p>
                            </div>
                        })}
    
        </div>
    )
}
}