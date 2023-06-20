import {Link, Route, Routes} from "react-router-dom"
import './App.css';
import MainPage from "./components/MainPage"
import Vakansii from './components/Vakansii';
import Companies from "./components/Companies";
import NotFound from "./NotFound";
import AdminMain from "./components/Admin_part/AdminMain";
import CompanyInfo from "./components/CompanyInfo";
import {useEffect ,useState} from 'react'
import AddCompany from './components/Admin_part/AddCompany'
import axios from "axios";
import './styles/Mobile_adapt/header.css'
import Auth from "./components/Admin_part/Auth";
import Footer from "./components/Footer";
import CompEdit from "./components/CompEdit";
import AddPosition from "./components/Admin_part/AddPosition";
import AuthComp from "./components/AuthComp";
import CompSearch from "./components/CompSerarch";
import VacInfo from "./components/VacInfo";
import DelComp from "./components/Admin_part/DelComp";
import VacsFnd from "./components/VacsFnd";
import VacsFnd_nm from "./components/VacsFnd_nm";
import IntoCompany from "./components/IntoComapny";
import Invite from "./components/Admin_part/Invite";


function App() {

  const [ipDetails, setIpDetails] = useState([]);
  const [CountryCode, setCountryCode] = useState([]);
  const [srch, setSrch] = useState('');


  // const adm_tkn = localStorage.getItem('test')
  const cmp_st = localStorage.getItem('cmp_name')
  const adm_st = localStorage.getItem('adm_name')
  console.log('from App.js >> ' ,cmp_st)

  


 
  // Fetching the API once when the
  // component is mounted
  useEffect(() => {
    axios.get('https://ipapi.co/json/').then((res) => {
      setIpDetails(res.data);
    });
  }, [])

  const handleSubComp = (e) => {
    e.preventDefault();

    console.log(srch);
    window.location.href=`/vakansii/name/${srch}`;    
}
  // if(ipDetails.country === 'RU'){
return (



    <div className="App">

<header className="hdr_main">
  <div className="logo"><Link to="/">JobFinder</Link></div>
  <div className='comp-search'>
                <form onSubmit={handleSubComp} className="fhdr">
          <input className="srch_hdr" type='text' id='search' placeholder='Найти вакансию' value={srch} onChange={(e) => setSrch(e.target.value)} />
        <button>найти</button>
      </form>
                </div>
  <nav className="navbar_aaa">
    <Link to="/vakansii">Вакансии</Link>
    <Link to="/companies">Компании</Link>
    {!cmp_st && <Link to="/auth/company">Войти</Link>}
    {cmp_st && <Link to={`/companies/edit/${cmp_st}`} className="header__btn" >Профиль компании</Link>}
    {adm_st && <Link to={`/admin`} className="header__btn" >Профиль Администрации</Link>}

  </nav>
</header>
<main>
  <div className="aa">
          <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/vakansii" element={<Vakansii />} />
        <Route path="/vakansii/:id" element={<VacInfo />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/admin/add-company" element={<AddCompany />} />
        <Route path="/admin/auth" element={<Auth />} />
        <Route path="/admin/" element={<AdminMain />} />
        <Route path="/invite_to_jf/" element={<IntoCompany />} />
        <Route path="/admin/invite/:id" element={<Invite />} />
        <Route path="/admin/delcomp" element={<DelComp />} />
        <Route path="/admin/add-position" element={<AddPosition />} />

        {/* <Route path="/admin" element={<AdminMain />} /> */}
        <Route path="/companies/:id" element={<CompanyInfo />} />
        <Route path="/companies/edit/:id" element={<CompEdit/>} />
        <Route path="/vakansii/city/:id" element={<VacsFnd/>} />
        <Route path="/vakansii/name/:id" element={<VacsFnd_nm/>} />
        <Route path="/companies/city/:id_city" element={<CompSearch/>} />
        <Route path="/auth/company" element={<AuthComp/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </div>

  <Footer/>

</main>


    </div>
  );
//   }else{
//     return(
//       <div>
//         <h1>This service in unavable in your country / Данный сервис недоступен в вашей стране</h1>
//         <img src="https://http.cat/451"></img>
//       </div>
//     )
//   }
  
}

export default App;
