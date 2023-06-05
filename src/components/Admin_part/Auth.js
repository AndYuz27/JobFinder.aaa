import { useState } from "react";
export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();

        var base ={
            'andy' : '2020'
            }

            if(base[email]==password){
                let token = Math.floor(Math.random() * (1000000 - 1) + 1);
                console.log(token)
                console.log('pass')
                localStorage.setItem('test', token);
                localStorage.setItem('adm_name', email);
                localStorage.setItem('isAuthAdm', true)
                window.location.href='/admin/';
                console.log('reboot is compl')
              }else{
                console.log('fuck you')
            }

      console.log(email, password);
    };
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button>пизда</button>
      </form>
    );
  }