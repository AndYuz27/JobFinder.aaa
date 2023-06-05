import {useState, useEffect} from 'react'
import Axios from 'axios'
import '../../styles/Admin.css'

export default function AddCompany(){

    const url='https://sppjfapi.andrieiiuzlov.repl.co/api/company'
    const [data, setData] = useState({
        nm:  '',
        nick:  '',
        pwd:  '',
        ogrn:  '',
        adrs:  '',
        tcomp:  '',
        sdey:  '',
        sdey:  '',
        vacs:  '',
        cnts:  '',
        info:  '',
        rtg:  '',
        img:  ''
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            nm: data.nm,
            nick: data.nick,
            pwd: data.pwd,
            ogrn: data.ogrn,
            adrs: data.adrs,
            tcomp: data.tcomp,
            sdey: data.sdey,
            vacs: data.vacs,
            cnts: data.cnts,
            info: data.info,
            rtg: data.rtg,
            img: data.img
        }).then(res => {
            console.log(res.data)
        })

    }
    function handle(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }

    return(
        <div className='AddCompany'>
            <h2>Добавление компании</h2>
            <form className='form-company' onSubmit={(e) => submit(e)}>
                <input onChange={(e)=>handle(e)} value={data.nm} placeholder='имя компании' type="text" name='nm' id='nm'></input>
                <input onChange={(e)=>handle(e)} value={data.nick} placeholder='никнейм компании' type="text" name='nick' id='nick'></input>
                <input onChange={(e)=>handle(e)} value={data.pwd} placeholder='пароль' type="password" name='pwd' id='pwd'></input>
                <input onChange={(e)=>handle(e)} value={data.ogrn} placeholder='ОГРН' type="number" name='ogrn' id='ogrn'></input>
                <input onChange={(e)=>handle(e)} value={data.adrs}  placeholder='адрес компании' type="text" name='adrs' id='adrs'></input>
                <input onChange={(e)=>handle(e)} value={data.tcomp} placeholder='тип компании (ООО, ИП, ЗАО и т.д.)' type="text" name='tcomp' id='tcomp'></input>
                <input onChange={(e)=>handle(e)}  value={data.sdey} placeholder='Сфера деятельности' type="text" name='sdey' id='sdey'></input>
                <input onChange={(e)=>handle(e)} value={data.vacs} placeholder='Вакансии' type="text" name='vacs' id='vacs'></input>
                <input onChange={(e)=>handle(e)} value={data.cnts} placeholder='Контакты' type="text" name='cnts' id='cnts'></input>
                <input onChange={(e)=>handle(e)} value={data.info} placeholder='информация' type="text" name='info' id='info'></input>
                <input onChange={(e)=>handle(e)} value={data.rtg} placeholder='рейтинг' type="number"  min="1" max="10" name='rtg' id='rtg'></input>
                <input onChange={(e)=>handle(e)} value={data.img} placeholder='фото' type="text"  min="1" max="10" name='img' id='img'></input>
                <button>Submit</button>
            </form>
        </div>
    )
}