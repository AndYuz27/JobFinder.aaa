import { Link } from "react-router-dom"
import '../../styles/footer.css'
export default function Footer() {
    return(
        <div className="footer">
            <div className="legal_info">
                <div className="logo"><Link to="/">JobFinder</Link></div>
                <div className="legal">JobFinder &copy; 2023. <br/> Created by <a href="https://github.com/AndYuz27">AndYuz27</a><br/>for educational purposes</div>
            </div>
        <div className="socnetworks">
            <a href="https://t.me/">Telegram</a>
            <a href="https://vk.com/">VK</a>
            <a href="https://habr.com/">Хабр</a>
        </div>
            
        </div>
    )
}