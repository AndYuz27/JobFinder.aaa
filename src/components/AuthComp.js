import { useState, useEffect } from "react";


export default function AuthComp(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
// const aComp = localStorage.getItem('isAuthCmp')

const handleSubComp = (e) => {
    e.preventDefault();

    console.log(email, password);    
    
    
    const fetcher = async (lgn, pass) => {
      const response1 = await fetch("https://sppjfapi.andrieiiuzlov.repl.co/api/company");
      const data1 = await response1.json();
      const data2 = data1.rows
      console.log(data2)
      const result = data2.find(({ nik_name }) => nik_name === lgn);
      console.log(result)
  try{
      if(lgn == result.nik_name && pass == result.pwd){
          console.log('pass')
              let token = Math.floor(Math.random() * (1000000 - 1) + 1);
            console.log(token)
            console.log('pass')
            localStorage.setItem('test', token);
            localStorage.setItem('cmp_name', email);
            localStorage.setItem('isAuthCmp', true)
            window.location.href=`/companies/edit/${email}`;
            console.log('reboot is compl')
      }else{
          console.log('fail')
          alert('неверное имя или пароль')
      }
  }catch(err){
      console.log('Ошибка авторизации \n error info: ', err)
      alert('Ошибка авторизации пожалуйста, обратитесь в тех поддержку: admin@jobfinder.ru')
  }
  
  }    
  fetcher(email, password)

};
return(
<div>
    <h2>авторизация для компаний</h2>
    <form onSubmit={handleSubComp}>
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
</div>    
)

}