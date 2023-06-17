import {useState, useEffect} from 'react';


export default()=>{

    const [cast, setCast]=useState([]);

    async function fetchcast(){
        const response=await fetch('cast.json');
        setCast(await response.json());//await response and converting it to json

    }

    useEffect(()=>{
        fetchcast();
    });
    return (
        <div style={{display:"grid",
    gridTemplateColumns:`repeat(auto-fit, minmax(90px, 1fr))`,
gap:`1rem`,
marginBottom:'1rem'}}>

{cast.map(member=>(
    <a key={member.id} data-tooltip={member.name} href="">
    <img src={`images/${member.slug}_tn.svg`} alt={member.name}/>
    </a>
))}
        </div>
    )
}