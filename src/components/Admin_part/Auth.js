import {useState, useEffect} from 'react'
import { getAdmins } from "../../api";
export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSub = (e) => {
      e.preventDefault();
      
        const fetcher = async (lgn, pass) => {
        const response1 = await fetch("https://sppjfapi.andrieiiuzlov.repl.co/api/user/admin");
        const data1 = await response1.json();
        const data2 = data1.rows
        console.log(data2)
        const result = data2.find(({ name_admin }) => name_admin === lgn);
        console.log(result)
    try{
        if(lgn == result.name_admin && pass == result.password){
            console.log('pass')
                let token = Math.floor(Math.random() * (1000000 - 1) + 1);
              console.log(token)
              console.log('pass')
              localStorage.setItem('test', token);
              localStorage.setItem('cmp_name', email);
              localStorage.setItem('isAuthCmp', true)
              window.location.href='/admin/';
              console.log('reboot is compl')
        }else{
            console.log('fail')
            alert('Ошибка авторизации')
        }
    }catch(err){
      console.log('Ошибка авторизации \n error info: ', err)
      alert('Ошибка авторизации пожалуйста, обратитесь в тех поддержку: admin@jobfinder.ru')
    }
    }  
    
    fetcher(email, password)

  };



    return (
      <form onSubmit={handleSub}>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button>Войти</button>
      </form>
    );
  }