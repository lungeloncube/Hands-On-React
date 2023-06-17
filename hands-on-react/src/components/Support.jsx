import {useState, useEffect} from 'react';
const pageTitle= document.title;


export default ()=>{
    // create a variable in memory and allow us to modify the sane vaiable
    //calling set state below allows aus to initialise that variable witha value

    const [count, setCount]= useState(0)

    // useEffect(()=>{
    //     if(count>0){
    //         document.title=`${pageTitle}--${count}`
    //     }
    // })

    useEffect(()=>{
      count && (document.title=`${pageTitle}-${count}`)
    })
    return (
        <button className="outline" onClick={()=>setCount(count+1)}> 
    
        {count===0?"Click to support":`Supported ${count} times`}
        </button>
    )
}