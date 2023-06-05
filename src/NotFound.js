import './styles/NotFound.css'
import './styles/Mobile_adapt/err404.css'
export default function NotFound(){
    const err_notFound = 404
    const title_err = "Кажется ты попал не на ту страницу!!!"

    return(
        <div className="Not_Found" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            {/* <h2 style={{textAlign: "center"}}>{err_notFound}</h2>
            <h4 style={{textAlign: "center"}}>Страница не найдена / Page not found</h4>
            <img src={`https://http.cat/${err_notFound}`}></img> */}

            <div className='bg_ee'>

            </div>

            <div className='ttt'>
                <h2 className="err_code jj">{err_notFound}</h2>
                <p className='jj'>{title_err}</p>
                <div className='ddfg'>
                <p className='jj'>Если данная ссылка работала ранее, то скорее всего она удалена либо пермещена в другое место.</p>
                <p className='jj'>тех поддержка: <a  href="mailto:yuzlov2003@gmail.com">yuzlov2003@gmail.com</a> </p>
                </div>
            </div>    
            <div className='link_pic'>
            <a href="https://ru.freepik.com/free-photo/man-looking-through-magnifying-glass-with-serious-and-thoughtful-look-searching-or-investigating-standing-over-yellow-background_18236847.htm#query=not%20found&position=6&from_view=search&track=ais">Изображение от benzoix</a> на Freepik            </div>

        </div>
    )
}