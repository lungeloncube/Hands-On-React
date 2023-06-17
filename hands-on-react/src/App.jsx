import React, {useEffect, useState} from 'react';
import ListCast from './components/ListCast'
import Modals from './components/Modals'
import Nav from './components/Nav'
import '@picocss/pico'


function App() {
  const [cast, setCast]=useState([])
  let [memberInfo, setMemberInfo]=useState(null);

  
  async function fetchcast(){
    const response=await fetch('cast.json');
    setCast(await response.json());//await response and converting it to json

}

useEffect(()=>{
    fetchcast();
});
  return (
    <>
    <Nav cast={cast} onChoice={(info)=>{setMemberInfo(info)}}/>

<div className="App">
        <hgroup>
      <img src="images/group.svg" alt="StarGazers Group"/>
      <h1>Meet the star gazers</h1>
       
        <ListCast cast={cast} onChoice={(info)=>{setMemberInfo(info)}}/>
        {memberInfo && <Modals member={memberInfo} handleChange={(info)=>{setMemberInfo(cast[info])}} handleClose={()=>{setMemberInfo(null)}}/>
       
        }
        </hgroup>
    </div>
    </>
  
  );
}

export default App;