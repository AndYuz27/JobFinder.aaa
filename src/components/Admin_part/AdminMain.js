import {Link} from "react-router-dom"

export default function AdminMain(){
    
    const aAuth = localStorage.getItem('isAuthAdm')
    const nm = localStorage.getItem('adm_name')
    

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
                <div className="navbar">
                    <Link to="/admin/add-company">Добавить компанию</Link>
                    <Link to="/admin/add-company">Изменить компанию</Link>
                    <Link to="/admin/add-company">Удалить компанию</Link>
                </div>
            </div>
        )
    }

}