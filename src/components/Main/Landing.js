import '../../styles/Main.css'
import {Link} from 'react-router-dom'
import art_job from '../../Assets/landing.jpg'

export default function Landing() {

    const b_data = [
        {'picture': 'https://img.freepik.com/free-photo/young-pretty-woman-with-dark-short-hair-in-shirt-and-eyeglasses-holding-folder-in-hand-while-dreamily-looking-aside-over-blue-background_574295-822.jpg?w=1380&t=st=1684090119~exp=1684090719~hmac=e5a76c25e7692852065f90641dc9e535f503ab7b4dfbe5cd2cd5ca18128b8b41',
        'text': 'lorem ipusm dolor sit amet....',
        'bg_color': 'asure'
    },
    {'picture': 'https://img.freepik.com/free-photo/handsome-male-employee-holding-notebooks-looking-confident-standing_1258-26589.jpg?w=1380&t=st=1684090286~exp=1684090886~hmac=1c64ce4163f00162113a72c9027d99a12bfea8c4beacb35349d18a43e3d6d1c7',
    'text': 'lorem ipusm dolor sit amet....',
    'bg_color': 'asure'
},
    ]

    return(
        <div className="Landing">
            <div className="lnd_img" style={{backgroundImage: `url(${art_job})`}}><p style={{fontSize: "8pt"}}><a href="https://www.freepik.com/free-vector/good-team-concept-illustration_11119934.htm#query=job&position=31&from_view=search&track=sph">Image by storyset</a> on Freepik</p></div>
            <div className="lnd_info">
                <div className="ctr_text">
            <h2>Начните ваш день с JobFinder</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis neque autem explicabo fugit, tempora harum molestiae soluta dolorem enim tenetur obcaecati consectetur et facilis eaque repellendus accusantium sequi asperiores provident.</p>
                <Link className='hdr_button' to="/companies" style={{fontSize: "16pt"}}>Найти работу</Link>
</div>
            </div>
        </div>
    )
}