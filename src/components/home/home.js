import "./home.css";
import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/sidebar";
import Loads from "../loads/loads";
import Location from "../location/location";
import axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function Home(props) {
  const loadsStudents = props.students;
  const loads = props.loads;
  const [drivers, setDrivers] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [students, setStudents] = useState(loadsStudents);

  console.log(selectedDate);

  useEffect(async () => {
    var dates = selectedDate;
    const month = dates.getMonth() + 1;
    const date = dates.getDate();
    const year = dates.getFullYear().toString();

    var filterDate =
      (month < 10 ? "0" + month : month) +
      "/" +
      (date < 10 ? "0" + date : date) +
      "/" +
      year;
    console.log(dates);
    console.log(filterDate);
    setStudents(
      loadsStudents.filter((product) => product.Date.includes(filterDate))
    );
  }, [selectedDate]);

  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/details/").then((res) => {
  //     console.log(res.data);
  //      setStunents(res.data);
  //     setHeader(Object.keys(res.data[0]));
  //   });
  // }, []);

  function renderTableHeader() {
    let header = Object.keys(loadsStudents[0]);
    return header.map((key, index) => {
      return (
        <th id="stylthheader" key={index}>
          {key}
        </th>
      );
    });
  }

  const useRowStyles = makeStyles({
    root: {
      "& > *": {
        borderBottom: "unset",
      },
    },
  });

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: "#e6e6e6",
      },
    },
  }))(TableRow);

  const StyledTableHeader = withStyles((theme) => ({
    head: {
      backgroundColor: "#404040",
      color: theme.palette.common.white,
      height: 70,
    },
    body: {
      fontSize: 14,
    },
  }))(TableRow);

  useEffect(() => {
    setStudents(
      loadsStudents.filter((driver) =>
        driver.Driver.toLowerCase().includes(drivers.toLowerCase())
      )
    );
  }, [drivers]);

  function RenderTableData(props) {
    const { row } = props;
    const [openlocation, setOpenlocation] = useState(false);
    const [openload, setOpenload] = useState(false);
    const classes = useRowStyles();

    return (
      <React.Fragment>
        <StyledTableRow className={classes.root} component="th" scope="row">
          <TableCell component="th" scope="row" align="center">
            {row.ID}
          </TableCell>
          <TableCell align="center">{row.Driver}</TableCell>
          <TableCell align="center">{row.Date}</TableCell>
          <TableCell align="center">{row.Constractor}</TableCell>
          <TableCell align="center">{row.Customer}</TableCell>
          <TableCell align="center">{row.Origin}</TableCell>
          <TableCell align="center">{row.Destination}</TableCell>
          <TableCell align="center">{row.City}</TableCell>
          <TableCell align="center">{row.StartTime}</TableCell>
          <TableCell align="center">{row.EndTime}</TableCell>
          <TableCell align="center">{row.WorksHours}</TableCell>
          <TableCell align="center">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpenload(!openload)}
            >
              {openload ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>{" "}
            {"    "}
            {row.Loads}
          </TableCell>
          <TableCell align="center">{row.Weight}</TableCell>

          <TableCell align="center">
            {" "}
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => {
                setOpenlocation(!openlocation);
              }}
            >
              {openlocation ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </IconButton>{" "}
            {"    "}
            {row.Locations}
          </TableCell>
        </StyledTableRow>

        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={openload} timeout="auto" unmountOnExit>
            <Box margin={2}>
              <Typography gutterBottom component="div">
                <h2>LOADS</h2>
                <Loads loads={loads} />
              </Typography>
            </Box>
          </Collapse>
        </TableCell>

        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={openlocation} timeout="auto" unmountOnExit>
            <Box margin={0}>
              <Typography gutterBottom component="div">
                <Location />
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </React.Fragment>
    );
  }

  return (
    <div className="home">
      <Sidebar
        drivers={drivers}
        setDrivers={setDrivers}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />
      <h1>Admin Table</h1>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <StyledTableHeader>{renderTableHeader()}</StyledTableHeader>
          </TableHead>

          <TableBody>
            {students.map((row) => (
              <RenderTableData key={row.ID} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Home;
