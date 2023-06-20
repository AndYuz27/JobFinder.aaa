import {useState, useEffect} from 'react'
import Axios from 'axios'
import '../styles/Admin.css'

export default function IntoCompany(){
    const aAuth = localStorage.getItem('isAuthAdm')

    const url='https://sppjfapi.andrieiiuzlov.repl.co/api/invite'
    const [data, setData] = useState({
        nm:  '',
        fio:  '',
        docs:  '',
        email:  ''
        
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            nm: data.nm,
            fio: data.fio,
            docs: data.docs,
            email: data.email
        }).then(res => {
            console.log(res.data)
        })
        alert("Ваша компания была добавлена в список кандидатов. Ждите ответа от Администрации сайта")

    }
    function handle(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }
let styles_form = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}
        return(
        <div className='AddCompany'>
            <h2>Для добавления компании пожалуйста введите данные</h2>
            <p>Укажите название компании, ваше ФИО, ссылку на документы (желательно в ZIP-архиве и PDF либо ссылкой на онлайн документ (Google Docs или Яндекс 360)) и вашу электронную почту</p>
            <form className='form-company' onSubmit={(e) => submit(e)} style={styles_form}>
                <input onChange={(e)=>handle(e)} value={data.nm} placeholder='имя компании' type="text" name='nm' id='nm'></input>
                <input onChange={(e)=>handle(e)} value={data.fio} placeholder='ФИО' type="text" name='fio' id='fio'></input>
                <input onChange={(e)=>handle(e)} value={data.docs} placeholder='ссылка на документы' type="text" name='docs' id='docs'></input>
                <input onChange={(e)=>handle(e)} value={data.email} placeholder='ОГРН' type="email" name='email' id='email'></input>
                <button>Отпрваить</button>
            </form>
        </div>
    )
        }
