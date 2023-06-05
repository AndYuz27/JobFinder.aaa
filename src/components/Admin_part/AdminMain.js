export default function AdminMain(){
    
    const aAuth = localStorage.getItem('isAuthAdm')
    

    if(!aAuth){
        window.location.href="/admin/auth"
        return(
            <div>
                <h2>Вы не вошли в систему</h2>
            </div>
        )
    }else{
        return(
            <div>
                <h2>Вы вошли в систему</h2>
            </div>
        )
    }

}