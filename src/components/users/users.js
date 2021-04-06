import {useEffect, useState} from "react";
import "./users.css";
import Selected from "../select/Selected";

const Users = () => {
  const [UserNames, setUserNames] =useState([{name:"Jo", Email:"a@a"}, {name:"Bob", Email:"b@b"}, {name:"Dan",Email:"c@c"}, {name:"Ann", Email:"d@d"}]);
  const [toAdd,setToAdd]=useState(false);
  const [addName,setAddName]=useState();
  const [addMail,setAddMail]=useState();

    
  const add=()=>{
    let theOptions=UserNames;
    let itemObject={name:addName,Email:addMail};
    theOptions.push(itemObject);
    setUserNames(theOptions);
    console.log(UserNames);
    setToAdd(false)
  }
 

  return (
  // <div className="details" style={{display:"inline-block",width:"100%"}}>
  <div className="users">
    <Selected  options={UserNames} setOptions={setUserNames} title="Users"/>
    {!toAdd&&<div><button onClick={()=>setToAdd(true)} style={{color:"green"}}>add item</button></div>}
    {toAdd&&
        <div>
        <input onChange={e=>setAddName(e.target.value)} style={{borderTop:"none", borderRight:"none", borderLeft:"none", borderWidth:"0.5px", height:"20px", width:"100px"}} placeholder="Name"></input>
        <input onChange={e=>setAddMail(e.target.value)} style={{borderTop:"none", borderRight:"none", borderLeft:"none", borderWidth:"0.5px", height:"20px", width:"100px"}} placeholder="Email"></input>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <button style={{borderRadius:"20%", margin:"2%"}} onClick={add}>add</button>
        <button style={{borderRadius:"20%", margin:"2%"}} onClick={()=>setToAdd(false)}>cancel</button>
        </div>
        </div>}
  </div>
  )};

export default Users;

