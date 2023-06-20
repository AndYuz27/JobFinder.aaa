import { useState, useEffect } from "react";
import { getPositions } from "../../api";
import Axios from "axios";

export default function AddPosition() {
    const aAuth = localStorage.getItem('isAuthAdm')

    const [positions, SetPositions] = useState([])
    const [data, setData] = useState({
        nm:  '',
        imgp:  '',
        desc:  ''
    })
    const url = 'https://sppjfapi.andrieiiuzlov.repl.co/api/position/'

    useEffect(() => {
        const setNewCards = async () => {
            let res = await getPositions();
            console.log(res);
            SetPositions(res);
        };
        setNewCards();
    }, []);

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            nm: data.nm,
            imgp: data.imgp,
            desc: data.desc
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
    function delPos(e) {
        fetch(`https://sppjfapi.andrieiiuzlov.repl.co/api/positions/${e}`,{
            method: 'DELETE'
        }).then((result) => {
            result.json().then((res) =>{
                console.log(res)
                window.location.reload()
            })
        })
    }

    if(!aAuth){
        window.location.href="/admin/auth"
        return(
            <div>
                <h2>Вы не вошли в систему. Редактирование невозможно</h2>
            </div>
        )
    }else{
    return(
       <div>
        <ul>
           {positions.map((e) => {
            return(
                <li>
                <b>{e.id}</b>: {e.a_position} <button style={{background: "none", border:'none'}} onClick={()=>delPos(e.id)}>X</button>
                </li>
            )
        })} 
        </ul>
        <form className='form-company' onSubmit={(e) => submit(e)}>
        <input onChange={(e)=>handle(e)} value={data.nm} placeholder='имя должности' type="text" name='nm' id='nm'></input>
        <input onChange={(e)=>handle(e)} value={data.imgp} placeholder='Изображение должности' type="text" name='imgp' id='imgp'></input>
        <input onChange={(e)=>handle(e)} value={data.desc} placeholder='Описание должности' type="text" name='desc' id='desc'></input>
        <button>Добавить</button>

        </form>
        
       </div> 
    )
}
    }