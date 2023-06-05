import "../App.css"
import '../styles/Main.css'
import Landing from './Main/Landing'
import Part1 from "./Main/Part1"
export default function MainPage() {
    return(
        <div className="main_page">
            {/* <div className="hdr_landing">
                <h2>Начните ваш день с JobFinder</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis neque autem explicabo fugit, tempora harum molestiae soluta dolorem enim tenetur obcaecati consectetur et facilis eaque repellendus accusantium sequi asperiores provident.</p>
                <div className="collect_picks3">
                   <img src="https://media.baamboozle.com/uploads/images/259486/1611782525_53196" alt="" style={{width: "320px"}}></img> 
                   <img src="https://cdn.dribbble.com/users/2317423/screenshots/14574446/job_seeker_by_robikucluk_4x.jpg" alt="" style={{width: "320px"}}></img> 
                </div>
            </div> */}
            <Landing/>
            <Part1/>
        </div>
    )
}
