// import {useRef, useState} from "react";

// const Selected=({options, setOptions,title})=>{
//     let rafi=useRef();
//     const [inputValue,setInputValue]=useState("");
    
//     const remove=()=>{
//         let theOptions=options.filter((op)=>op!==rafi.current.value);
//         setOptions(theOptions);
//         console.log(options)
//     }
    
//     const addItem=()=>{
//         let theOptions=options;
//         let test=theOptions.find((e)=>e===inputValue);
//         if (!test){
//         theOptions.push(inputValue);
//         setOptions([...options,theOptions);
//         console.log(options)
//     }
//     }

//     return(
//         // <div style={{width:"15%",marginRight:"0.8%",marginLeft:"0.8%", display:"inline-block"}}>
//         <div style={{flex:1}}>
//             <div style={{color:"red"}}>{title}</div>
//             <select className="input" ref={rafi} size="3" multiple style={{direction:"ltr",width:"100%"}}>
//                 {options.map((option) => (
//                 <option value={option}>{option}</option>
//                 ))}
//             </select>
//             <button onClick={remove}>remove</button>
//             <div style={{color:"green"}}>add item</div>
//             <input onChange={e=>setInputValue(e.target.value)} style={{width:"90%"}}></input>
//             <button onClick={addItem}>add</button>
//         </div>)}

// export default Selected;


import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Selected=(props)=>{
  const {options, setOptions,title}=props;
  const classes = useStyles();
  const theme = useTheme();
  const UserNames=props.UserNames||null;
  const setUserNames=props.setUserNames||null;
  const [personName, setPersonName] = useState([]);
  const [inputValue,setInputValue]=useState("");
  const [updateName,setUpdateName]=useState("");
  const [updateMail,setUpdateMail]=useState("");
  const [toAdd,setToAdd]=useState(false);
  const [toUpdate,setToUpdate]=useState(false);
  const [removed,setRemoved]=useState(false);
  const [noChoose,setNoChoose]=useState(false);
  const [noItems,setNoItems]=useState(false);

  const handleChange = (event) => {
    setNoChoose(false)
    setPersonName(event.target.value);
    setRemoved(false)
  };

  const add=()=>{
      let theOptions=options;
      let test=theOptions.find((e)=>e===inputValue);
      if (!test){
        theOptions.push(inputValue);
        setOptions(theOptions)} 
      setToAdd(false);
      setNoItems(false)
    }

  const remove=()=>{
      if (personName.length<1){setNoChoose(true)}
      if (options.length<1){setNoItems(true)}
      else{
      let theOptions=options.filter((e)=>!personName.includes(e));
      setOptions(theOptions);
      setPersonName([]);
      setRemoved(true)}
    }
  

  const update=()=>{
      let theOptions=options;
      let index=theOptions.indexOf(personName[0]);
      theOptions[index].name=updateName;    
      theOptions[index].Email=updateMail;
      setOptions(theOptions);   
      setToUpdate(false);
      setPersonName([]); 
  }
  
  return (
    <div style={{flex:1}}>      
      <FormControl className={classes.formControl}>
        <InputLabel id="mutiple-checkbox-label">{title}</InputLabel>
        <Select
          labelId="mutiple-checkbox-label"
          id="mutiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected=!removed?(personName.length+" items selected"):[]}
          MenuProps={MenuProps}
        >
          {options.map((name,index) => (
            <MenuItem key={index} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={title!=="Users"?name:"name: "+name.name+", Email: "+name.Email} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div style={{marginRight:"10%"}}>
      {!toAdd&&<div><button onClick={remove} style={{color:"green"}}>remove</button></div>}
      {!toAdd&&title!=="Users"&&
      (<div>
      <button onClick={()=>{setToAdd(true); setNoItems(false); setNoChoose(false);setPersonName([])}} style={{color:"green"}}>add item</button></div>)}      
      {noChoose&&!noItems&&<div style={{color:"red"}}>Choose an item</div>}
      {noItems&&<div style={{color:"red"}}>No items</div>}
      {title==="Users"&&(<div><button onClick={()=>setToUpdate(true)} style={{color:"green"}}>update</button></div>)}
      {toAdd&&
        <div>
        <input onChange={e=>setInputValue(e.target.value)} style={{borderTop:"none", borderRight:"none", borderLeft:"none", borderWidth:"0.5px", height:"20px", width:"100px"}}></input>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <button style={{borderRadius:"20%", margin:"2%"}} onClick={add}>add</button>
        <button style={{borderRadius:"20%", margin:"2%"}} onClick={()=>setToAdd(false)}>cancel</button>
        </div>
        </div>}
        {toUpdate&&
        (personName.length>1?<div style={{color:"red"}}>choose only one item</div>:
        noItems?<div style={{color:"red"}}>No items</div>:
        personName.length<1?<div style={{color:"red"}}>choose an item</div>:        
        <div>
        <input onChange={e=>setUpdateName(e.target.value)} style={{borderTop:"none", borderRight:"none", borderLeft:"none", borderWidth:"0.5px", height:"20px", width:"100px"}} placeholder={personName[0].name}></input>
        <input onChange={e=>setUpdateMail(e.target.value)} style={{borderTop:"none", borderRight:"none", borderLeft:"none", borderWidth:"0.5px", height:"20px", width:"100px"}} placeholder={personName[0].Email}></input>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <button style={{borderRadius:"20%", margin:"2%"}} onClick={update}>update</button>
        <button style={{borderRadius:"20%", margin:"2%"}} onClick={()=>setToUpdate(false)}>cancel</button>
        </div>
        </div>)
        }
      </div>
    </div>
  );
}

export default Selected;

{/* <button onClick={remove}>remove</button>
const remove=()=>{return <div>choose an item</div>} */}
