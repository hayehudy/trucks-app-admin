import { useEffect, useState } from "react";
import "./users.css";
import Selected from "../select/Selected";

const Users = () => {
  const [UserNames, setUserNames] = useState([
    { name: "Jo", Email: "a@a" },
    { name: "Bob", Email: "b@b" },
    { name: "Dan", Email: "c@c" },
    { name: "Ann", Email: "d@d" },
  ]);
  const [options, setOptions] = useState([]);
  const [toAdd, setToAdd] = useState(false);

  useEffect(() => {
    let theOptions = UserNames.map(
      (user) => "name: " + user.name + ", Email: " + user.Email
    );
    setOptions(theOptions);
  }, [UserNames]);

  const remove = () => {};

  return (
    // <div className="details" style={{display:"inline-block",width:"100%"}}>
    <div
      className="users"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Selected
        options={options}
        setOptions={setOptions}
        title="Users"
        UserNames={UserNames}
        setUserNames={setUserNames}
      />
      {/* {!toAdd&&(<div>
      <button onClick={()=>setToAdd(true)} style={{color:"green"}}>add item</button>
      <button onClick={remove} style={{color:"green"}}>remove</button> 
    </div>)} */}
    </div>
  );
};

export default Users;
