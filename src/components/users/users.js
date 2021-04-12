import React, { useEffect, useState } from "react";
import "./users.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { AccountCircle } from "@material-ui/icons/";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import LooksOneIcon from "@material-ui/icons/LooksOne";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";

const Users = () => {
  const [UserNames, setUserNames] = useState([
    { id: "1", name: "Jo", numuser: "111", password: "a12" },
    { id: "2", name: "Bob", numuser: "222", password: "b12" },
    { id: "3", name: "Dan", numuser: "333", password: "c12" },
    { id: "4", name: "Ann", numuser: "444", password: "d12" },
  ]);
  const [remove, setRemove] = useState({});
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    container: {
      maxHeight: 360,
    },
    margin: {
      margin: theme.spacing(5),
      // width: "100%",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    btn: {
      width: "30%",
      margin: theme.spacing(2),
      marginLeft: 30,
    },
  }));

  const classes = useStyles();

  let header = ["", "Name", "User number", "Password"];

  function renderTableHeader() {
    return header.map((key, index) => (
      <TableCell component="th" key={index}>
        {key}
      </TableCell>
    ));
  }

  const useRowStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        borderBottom: "unset",
      },
    },
  }));

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: "#e6e6e6",
      },
      modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
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

  const Themodal = () => {
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">warning</h2>
            <p id="transition-modal-description">
              Are you sure you want to delete the user {remove.name}?
            </p>
            <div className="btnmodal">
              <Button
                className={classes.btn}
                variant="contained"
                onClick={() => {
                  setUserNames(UserNames.filter((e) => remove.id !== e.id));
                  handleClose();
                }}
              >
                Yes{" "}
              </Button>
              <Button
                variant="contained"
                className={classes.btn}
                onClick={handleClose}
              >
                cancel{" "}
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    );
  };
  function RenderTableData(props) {
    const { user } = props;
    const classes = useRowStyles();
    const [typepassword, setTypepassword] = useState([{ type: "password" }]);

    return (
      <React.Fragment>
        <StyledTableRow className={classes.root} component="table" scope="row">
          <TableCell component="table" scope="row" align="center">
            <DeleteIcon
              onClick={() => {
                setOpen(true);
                setRemove(user);
              }}
            />
          </TableCell>
          <TableCell align="center">{user.name}</TableCell>
          <TableCell align="center">{user.numuser}</TableCell>
          <TableCell align="center">
            <input
              className="inputpassword"
              disabled
              type={typepassword.map((type) => type.type)}
              value={user.password}
            />
            {[
              typepassword[0].type === "password" ? (
                <VisibilityIcon
                  onClick={() => {
                    setTypepassword([{ type: "text" }]);
                  }}
                />
              ) : (
                <VisibilityOffIcon
                  onClick={() => {
                    setTypepassword([{ type: "password" }]);
                  }}
                />
              ),
            ]}
          </TableCell>
        </StyledTableRow>
      </React.Fragment>
    );
  }

  function AddUser(props) {
    // let usernames = UserNames;
    const [inputValue, setInputValue] = useState({
      id: "",
      name: "",
      numuser: "",
      password: "",
    });

    const adduser = () => {
      for (var i = 0; i < UserNames.length; i++) {
        var max = Math.max(UserNames[i].id);
      }
      // usernames.push({ ...inputValue, id: (max + 1).toString() });
      setUserNames((userNames) => [
        ...userNames,
        { ...inputValue, id: (max + 1).toString() },
      ]);
      console.log(UserNames);
    };

    return (
      <div className={classes.margin}>
        <div className="divadduser">
          <div className="divinput">
            <InputLabel htmlFor="input-with-icon-adornment">Name</InputLabel>
            <Input
              name="name"
              id="input-with-icon-adornment"
              onChange={(e) =>
                setInputValue({
                  ...inputValue,
                  [e.target.name]: e.target.value,
                })
              }
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </div>
          <div className="divinput">
            <InputLabel htmlFor="input-with-icon-adornment">
              User number
            </InputLabel>
            <Input
              name="numuser"
              onChange={(e) =>
                setInputValue({
                  ...inputValue,
                  [e.target.name]: e.target.value,
                })
              }
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <LooksOneIcon />
                </InputAdornment>
              }
            />
          </div>
          <div className="divinput">
            <InputLabel htmlFor="input-with-icon-adornment">
              Password
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              name="password"
              onChange={(e) =>
                setInputValue({
                  ...inputValue,
                  [e.target.name]: e.target.value,
                })
              }
              startAdornment={
                <InputAdornment position="start">
                  <VpnKeyIcon />
                </InputAdornment>
              }
            />
          </div>
          <Button className="btnadduser" variant="contained" onClick={adduser}>
            Add User
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="users">
      <h1>Users</h1>
      <div className="divtable">
        <TableContainer component={Paper} className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <StyledTableHeader>{renderTableHeader()}</StyledTableHeader>
            </TableHead>

            <TableBody>
              {UserNames.map((user) => (
                <RenderTableData key={user.id} user={user}></RenderTableData>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="divsidebar">
        <AddUser />
      </div>
      <Themodal />
    </div>
  );
};

export default Users;
