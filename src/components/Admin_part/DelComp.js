import { useState, useEffect } from "react";
import axios from 'axios';
import { getComps } from "../../api";
import { useParams } from "react-router-dom";


export default function DelComp(){
    const [cmp_list, setList] = useState([])
    const {id} = useParams()
    useEffect(() => {
        const setNewCards = async () => {
            let res = await getComps();
            console.log(res);
            setList(res);
        };
        setNewCards();
    }, []);
    function delCmp(e) {

        if (confirm("Вы хотите удалить Компанию? Учтите, что вакансии НУЖНО УДАЛИТЬ ОТДЕЛЬНО, потому, что удаление данных не произойдет") == true) {
            fetch(`https://sppjfapi.andrieiiuzlov.repl.co/api/company/${e}`,{
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
    return(
        <div className="del_comps">
            <ul>
            {cmp_list.map((e)=> {
                return <li key={e.id}>{e.id} {e.company_name} <button onClick={() => delCmp(e.id)}>Снести комппанию</button></li>
            })}</ul>
        </div>
    )
}
