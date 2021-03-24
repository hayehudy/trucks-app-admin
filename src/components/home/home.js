import "./home.css";
import React, { useState } from "react";

function Home() {
  // return <div className="home">

  const [students, setStunents] = useState([
    {
      ID: 1,
      Driver: "Jo",
      Date: "01/01/2021",
      Constractor: "bb",
      Customer: "momo",
      Origin: "aaa",
      Destination: "bbb",
      City: "Jerusalem",
      StartTime: "8:00",
      EndTime: "16:00",
      WorksHours: 8,
      Loads: 7,
      Weight: 100,
      Locations: "444",
    },
    {
      ID: 2,
      Driver: "Mo",
      Date: "02/01/2021",
      Constractor: "aa",
      Customer: "lolo",
      Origin: "bbb",
      Destination: "aaa",
      City: "TelAviv",
      StartTime: "9:00",
      EndTime: "15:00",
      WorksHours: 6,
      Loads: 6,
      Weight: 80,
      Locations: "555",
    },
    {
      ID: 3,
      Driver: "Mo",
      Date: "02/01/2021",
      Constractor: "aa",
      Customer: "lolo",
      Origin: "bbb",
      Destination: "aaa",
      City: "TelAviv",
      StartTime: "9:00",
      EndTime: "15:00",
      WorksHours: 6,
      Loads: 6,
      Weight: 80,
      Locations: "555",
    },
  ]);

  function renderTableHeader() {
    let header = Object.keys(students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  }

  function renderTableData() {
    return students.map((student, index) => {
      const {
        ID,
        Driver,
        Date,
        Constractor,
        Customer,
        Origin,
        Destination,
        City,
        StartTime,
        EndTime,
        WorksHours,
        Loads,
        Weight,
        Locations,
      } = student; //destructuring
      return (
        <tr key={ID}>
          <td>{ID}</td>
          <td>{Driver}</td>
          <td>{Date}</td>
          <td>{Constractor}</td>
          <td>{Customer}</td>
          <td>{Origin}</td>
          <td>{Destination}</td>
          <td>{City}</td>
          <td>{StartTime}</td>
          <td>{EndTime}</td>
          <td>{WorksHours}</td>
          <td>{Loads}</td>
          <td>{Weight}</td>
          <td>{Locations}</td>
        </tr>
      );
    });
  }

  return (
    <div
      className="home"
      style={{ position: "absolute", alignItems: "center" }}
    >
      <h1 id="title" style={{ textAlign: "center" }}>
        Admin Table
      </h1>
      <table
        id="students"
        style={{ textAlign: "center", borderCollapse: "collapse" }}
      >
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
