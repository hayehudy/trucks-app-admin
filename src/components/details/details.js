import { useState } from "react";
import "./details.css";
import Selected from "../select/Selected";

const Details = () => {
  const [TrucksTypes, setTrucksTypes] = useState([
    "Citroen",
    "Fiat",
    "Ferrari",
    "Dodge",
  ]);
  const [Contractors, setConstractors] = useState(["A", "B", "C", "D"]);
  const [Customers, setCustomers] = useState([
    "avraham",
    "ytzchak",
    "yaakov",
    "yosef",
  ]);
  const [Origins, setOrigin] = useState(["#", "$", "%", "&"]);
  const [Destinations, setDestinations] = useState(["#", "$", "%", "&"]);
  const [Cities, setCities] = useState([
    "Jerusalem",
    "TelAviv",
    "Hayfa",
    "Ashdod",
  ]);

  return (
    <div className="details" style={{ display: "inline-block" }}>
      <Selected
        style={{ display: "inline-block", width: "15%" }}
        options={TrucksTypes}
        setOptions={setTrucksTypes}
      />
      <Selected
        style={{ display: "inline-block", width: "15%" }}
        options={Contractors}
        setOptions={setConstractors}
      />
      <Selected
        style={{ display: "inline-block", width: "15%" }}
        options={Customers}
        setOptions={setCustomers}
      />
      <Selected
        style={{ display: "inline-block", width: "15%" }}
        options={Origins}
        setOptions={setOrigin}
      />
      <Selected
        style={{ display: "inline-block", width: "15%" }}
        options={Destinations}
        setOptions={setDestinations}
      />
      <Selected
        style={{ display: "inline-block", width: "15%" }}
        options={Cities}
        setOptions={setCities}
      />
    </div>
  );
};

export default Details;

//
