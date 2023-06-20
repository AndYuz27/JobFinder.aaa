import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import axios from "axios";

export default function AdminMain(){
    
    const aAuth = localStorage.getItem('isAuthAdm')
    const nm = localStorage.getItem('adm_name')
    const [invites, setInvide] = useState([])
    
    useEffect(() => {

            axios.get(`https://sppjfapi.andrieiiuzlov.repl.co/api/invite`)
                .then(res => {
                    console.log(res.data.rows)
                    setInvide(res.data.rows)
                })
                .catch(err => {
                    console.log(err)
                })
    }, [ ]);

    function DeAuth(){
        localStorage.removeItem('adm_name')
        localStorage.removeItem('test1')
        localStorage.removeItem('isAuthAdm')
        window.location.href=`/`;
    }

    let styles = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"

    }
    let style_cards = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        padding: "20px"

    }

    if(!aAuth){
        window.location.href="/admin/auth"
        return(
            <div>
                <h2>Вы не вошли в систему.</h2>
            </div>
        )
    }else{
        return(
            <div>
                <h2>Hello {nm}</h2>
                <div className="navbar-adm" style={styles}>
                    <Link to="/admin/add-company" style={style_cards}><img src="https://www.svgrepo.com/show/170952/add-button.svg" alt="add btn" style={{width: '256px'}}></img> <p>Добавить компанию</p></Link>
                    <Link to="/admin/delcomp" style={style_cards}><img src="https://www.svgrepo.com/show/21045/delete-button.svg" alt="add btn" style={{width: '256px'}}></img> <p>Удалить компанию</p></Link>
                    <Link to="/admin/add-position" style={style_cards}><img src="https://pic.onlinewebfonts.com/svg/img_161394.png" alt="add btn" style={{width: '256px'}}></img> <p>Добавить/удалить должность</p></Link>
                </div>
                <div className="invites">
                    <h3>Кандидаты на добавлене в JobFinder</h3>
                    <ul>
                    {invites.map((e)=> {
                        return(
                            <li key={e.id}><Link to={`/admin/invite/${e.id}`}>{e.fio} из {e.comapny_name}</Link></li>
                        )
                    })}
                    </ul>
                </div>
                <button onClick={() => DeAuth()}>Выйти из системы</button>
                
            </div>
        )
    }

}