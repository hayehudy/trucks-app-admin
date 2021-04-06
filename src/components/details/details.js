import {useState} from "react";
import "./details.css";
import Selected from "../select/Selected";

const Details = () => {
  const [TrucksTypes, setTrucksTypes] =useState(["Citroen", "Fiat", "Ferrari", "Dodge"]);
  const [Contractors, setConstractors]= useState(["A", "B", "C", "D"]);
  const [Customers, setCustomers]= useState(["avraham", "ytzchak", "yaakov", "yosef"]);
  const [Origins,setOrigin]=useState(["#", "$", "%", "&"]);
  const [Destinations,setDestinations]=useState(["#", "$", "%", "&"]);
  const [Cities,setCities]=useState(["Jerusalem", "TelAviv", "Hayfa", "Ashdod"]);
  
  return (
  // <div className="details" style={{display:"inline-block",width:"100%"}}>
  <div className="details" style={{display:"flex",flexDirection:"row", justifyContent:"space-between", alignItems:"center",width:"100%"}}>
    <Selected  options={TrucksTypes} setOptions={setTrucksTypes} title="TrucksTypes"/>
    <Selected  options={Contractors} setOptions={setConstractors} title="Contractors"/>
    <Selected  options={Customers} setOptions={setCustomers} title="Customers"/>
    <Selected  options={Origins} setOptions={setOrigin} title="Origins"/>
    <Selected  options={Destinations} setOptions={setDestinations} title="Destinations"/>
    <Selected  options={Cities} setOptions={setCities} title="Cities"/>
  </div>);
};

export default Details;

//
