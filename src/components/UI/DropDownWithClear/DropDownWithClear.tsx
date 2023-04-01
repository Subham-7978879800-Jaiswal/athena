import { useState } from "react";

import TextField from "@mui/material/TextField";
import { Typography, Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

import "./DropDownWithClear.css";

interface DropDownWithClearPropsType {
  dropdownOptions: any[];
  changeHandler: (event: any) => void;
  fieldLabel: string;
  fieldName: string;
  value: string;
}

function DropDownWithClear(props: DropDownWithClearPropsType) {
  const {
    dropdownOptions,
    fieldLabel,
    changeHandler,
    fieldName,
    value = "",
  } = props;

  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const sb = { label: "Search" };

  let closingTimeout: any = null;

  const handleOptionClick = (event: any) => {
    const value = event.target.value;
    changeHandler({ [fieldName]: value });
  };

  const closeBlurHandler = () => {
    if (closingTimeout) clearTimeout(closingTimeout);
    closingTimeout = setTimeout(() => {
      setFilter("");
      setOpen(false);
    }, 100);
  };

  return (
    <Box sx={{ display: "relative" }}>
      <Typography sx={{ fontSize: "12px" }} align="left">
        {fieldLabel}
      </Typography>
      <Autocomplete
        id={fieldName}
        open={true}
        onOpen={() => {
          setOpen(true);
        }}
        onChange={handleOptionClick}
        onClose={closeBlurHandler}
        onBlur={closeBlurHandler}
        disablePortal
        options={[
          sb,
          ...dropdownOptions.filter((option) => {
            return option.label.toLowerCase().includes(filter.toLowerCase());
          }),
        ]}
        getOptionLabel={(option) => {
          return option.label || "";
        }}
        renderInput={(params) => <TextField value={value} {...params} />}
        renderOption={(props, option: any) => {
          if (option?.label === "Search") {
            return (
              <>
                <li style={{ visibility: "hidden" }}>PLACE HODLER</li>
              </>
            );
          }

          return (
            <li key={option.value} value={option.value} {...props}>
              {option.label}
            </li>
          );
        }}
      />
      <TextField
        sx={{
          display: true ? "block" : "none",
          position: "absolute",
          zIndex: 100000,
          width: "264px",
          backgroundColor: "white",
        }}
        onClick={() => {
          setOpen(true);
          clearTimeout(closingTimeout);
        }}
        onBlur={closeBlurHandler}
        onChange={(event: any) => {
          setFilter(event.target.value);
        }}
        label="Search"
        variant="outlined"
        size="small"
        fullWidth
      />
    </Box>
  );
}

export default DropDownWithClear;
