import { useEffect } from "react";
import { useState } from "react"
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import Card from "./Card";


export default function CompSearch() {
    const [fndcomps, setFndrComp] = useState([])
    const { id_city } = useParams()
    
console.log({id_city})
    useEffect(() => {
        if ( id_city ) {
            axios.get(`https://sppjfapi.andrieiiuzlov.repl.co/api/company/city/${id_city}`)
                .then(res => {
                    console.log(res.data.rows)
                    setFndrComp(res.data.rows)
                    // setIsLoad(true)
                    // setValidOwn(id === res.data.rows[0].nik_name)
                    // console.log(ddd)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ ]);
    console.log( 'srate fnd comps >>\n',fndcomps)

    
    return(
        <div className="CompSearch">
            {fndcomps.map((el, index) => {return <Card key={index} comp={el}/>})}

        </div>
    )
}