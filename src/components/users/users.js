import React, { useEffect, useState } from "react";
import "./users.css";
import Checkbox from "@material-ui/core/Checkbox";
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
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { AccountCircle } from "@material-ui/icons/";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import LooksOneIcon from "@material-ui/icons/LooksOne";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const Users = () => {
  const [UserNames, setUserNames] = useState([
    { id: "1", name: "Jo", numuser: "111", password: "111" },
    { id: "2", name: "Bob", numuser: "222", password: "222" },
    { id: "3", name: "Dan", numuser: "333", password: "333" },
    { id: "4", name: "Ann", numuser: "444", password: "444" },
  ]);
  const [remove, setRemove] = useState({});
  const [toAdd, setToAdd] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    container: {
      maxHeight: 600,
    },
    margin: {
      margin: theme.spacing(1),
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
        // closeAfterTransition
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
            <Button
              variant="contained"
              onClick={() => {
                setUserNames(UserNames.filter((e) => remove.id !== e.id));
                handleClose();
              }}
            >
              Yes{" "}
            </Button>
            <Button variant="contained" onClick={handleClose}>
              cancel{" "}
            </Button>
          </div>
        </Fade>
      </Modal>
    );
  };
  function RenderTableData(props) {
    const { user } = props;
    const classes = useRowStyles();
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
          <TableCell align="center">{user.password}</TableCell>
        </StyledTableRow>
      </React.Fragment>
    );
  }

  function AddUser(props) {
    let usernames = UserNames;
    const [inputValue, setInputValue] = useState({
      id: "",
      name: "",
      numuser: "",
      password: "",
    });

    const adduser = async () => {
      usernames.push({ ...inputValue, id: (UserNames.length + 1).toString() });
      await setUserNames(usernames);
      console.log(UserNames);
    };

    return (
      <div className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Name</InputLabel>
        <Input
          name="name"
          id="outlined-basic"
          onChange={(e) =>
            setInputValue({
              ...inputValue,
              // id: (UserNames.length + 1).toString(),
              [e.target.name]: e.target.value,
            })
          }
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        <InputLabel htmlFor="input-with-icon-adornment">User number</InputLabel>
        <Input
          name="numuser"
          onChange={(e) =>
            setInputValue({ ...inputValue, [e.target.name]: e.target.value })
          }
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <LooksOneIcon />
            </InputAdornment>
          }
        />
        <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
        <Input
          id="input-with-icon-adornment"
          name="password"
          onChange={(e) =>
            setInputValue({ ...inputValue, [e.target.name]: e.target.value })
          }
          startAdornment={
            <InputAdornment position="start">
              <VpnKeyIcon />
            </InputAdornment>
          }
        />
        <Button variant="contained" onClick={adduser}>
          Add User
        </Button>
      </div>
    );
  }

  return (
    <div className="users">
      <h1>Users</h1>
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
      <AddUser />
      <Themodal />
    </div>
  );
};

export default Users;
