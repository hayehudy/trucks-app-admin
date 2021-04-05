import "./sidebar.css";
import "date-fns";
import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const Sidebar = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const [drivers, setDrivers] = props;
  const { drivers, setDrivers } = props;

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (event) => {
    setDrivers(event.target.value);
  };

  return (
    <div className="sidebar">
      <div className="datepicker">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Select a show date"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </div>

      <div className="selectdrivers">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Drivers</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="select"
            value={drivers}
            onChange={handleChange}
          >
            <MenuItem value={"Josef"}>Josef</MenuItem>
            <MenuItem value={"Moshe"}>Moshe</MenuItem>
            <MenuItem value={"Avi"}>Avi</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Sidebar;
