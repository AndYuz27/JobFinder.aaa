import regIcon from '../../Assets/reg_icon.svg'
import OperatorIcon from '../../Assets/operator.jpg'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getPositions } from '../../api';
import '../../App.css'


export default function Part1(){
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
      }
    const [positions, SetPositions] = useState([])

    useEffect(() => {
    const setNewCards = async () => {
        let res = await getPositions();
        console.log(res);
        // SetPositions(res.slice(0,6));
        SetPositions(shuffle(res).slice(0,6))
    };
    setNewCards();
}, []);
console.log(positions)

    return(
        <div className="PartOne">
            <div className="porgress_simple">
                <div className="prog1">
                    <img className='icon_lend' src={regIcon} alt="" style={{height: "28pt"}}/>            
                    <span>Найди работу</span>
                </div>
                <div className="prog1">
                <img className='icon_lend' src='https://www.svgrepo.com/show/485865/profile1.svg' alt="" style={{height: "28pt"}}/>
                    <span>Откликнись на работу</span>
                </div>
                <div className="prog1">
                <img className='icon_lend' src='https://www.svgrepo.com/show/447544/yes.svg' alt="" style={{height: "28pt"}}/>          
                    <span>PROFIT</span>
                </div>
            </div>
            <div className="category">
                <h2>У нас предоставлены следующие должности для вашей будущей работы</h2>
                <div className="cate_list">
                    {positions.map((e) =>{ return(
                        <div className="card_pos" key={e.id}>
                            <img src={e.img_pos} alt="card" style={{height: "64px"}}/>
                            <div className="ddd">
                                <h4>{e.a_position}</h4>
                                <p>{e.desc_j}</p>
                            </div>
                        </div>
                    )})}


                    {/* <div className="card_pos">
                        <img src="https://cdn4.iconfinder.com/data/icons/real-estate-2-34/66/85-512.png" alt="card" style={{height: "64px"}}/>
                        <div className="ddd">
                        <h4>Риелтор</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum tempus massa ac tincidunt. Sed quis ipsum elementum, hendrerit dui.</p>
                    </div>
                    </div> */}
                    
                </div>
            </div>
            <div className="job_recomend">
                <div className='img_job'>
                <img className="job_recomend-img" src={OperatorIcon} alt=""/>
                Image by <a href="https://www.freepik.com/free-vector/flat-customer-support-illustration_13184991.htm#query=operator&position=4&from_view=search&track=sph">Freepik</a>
                </div>
                <div className="descr">
                    <h2>JobFinder Рекомендует</h2>
                    <h3>Оператор связи</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum tempus massa ac tincidunt. Sed quis ipsum elementum, hendrerit dui.</p>
                    <a href='#'>Узнать Подробнее</a>
                </div>
            </div>
        </div>
    )
}