import { useEffect, useState, useRef } from "react";

import TextField from "@mui/material/TextField";
import { Typography, Box, InputAdornment, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import Autocomplete from "@mui/material/Autocomplete";

import { useStore } from "../../context/store";

interface DropDownWithClearPropsType {
  dropdownOptions: any[];
  changeHandler: (event: any) => void;
  fieldLabel: string;
  fieldName: string;
  value: string;
  clostButtonReq?: Boolean;
}

function DropDownWithClear(props: DropDownWithClearPropsType) {
  const {
    dropdownOptions,
    fieldLabel,
    changeHandler,
    fieldName,
    value,
    clostButtonReq = false,
  } = props;

  const { providerSearchFilter } = useStore();

  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const autocompleteRef = useRef<any>(null);

  const sb = { label: "Search" };

  let closingTimeout: any = null;

  const handleOptionClick = (event: any) => {
    const value = event.target.value;

    changeHandler({ [fieldName]: value });
  };

  const closeBlurHandler = () => {
    if (closingTimeout) clearTimeout(closingTimeout);
    setFilter("");
    closingTimeout = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  const handleClear = () => {
    const doc: any = document?.getElementById(`${fieldName}`) as any;
    doc.value = "";
  };

  useEffect(() => {
    if (value === "") handleClear();
  });

  const searchClickHandler = () => {
    setOpen(true);
    clearTimeout(closingTimeout);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Typography sx={{ fontSize: "12px" }} align="left">
        {fieldLabel}
      </Typography>

      <Autocomplete
        filterOptions={(options) => options}
        id={fieldName}
        disableClearable={!clostButtonReq ? true : false}
        openOnFocus
        open={open}
        clearOnEscape={true}
        onOpen={() => {
          setOpen(true);
        }}
        onChange={handleOptionClick}
        onClose={closeBlurHandler}
        onBlur={closeBlurHandler}
        disablePortal
        isOptionEqualToValue={() => true}
        options={[
          sb,
          ...dropdownOptions.filter((option) => {
            return option.label.toLowerCase().includes(filter.toLowerCase());
          }),
        ]}
        getOptionLabel={(option: any) => {
          return option.label || "";
        }}
        renderInput={(params) => {
          const InputProps = { ...params.InputProps };

          return (
            <TextField
              value={props.value}
              {...params}
              InputProps={InputProps}
            />
          );
        }}
        renderOption={(props: any, option: any) => {
          if (option?.label === "Search") {
            return (
              <>
                <li style={{ visibility: "hidden" }}>PLACE HODLER</li>
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
        value={filter}
        color="primary"
        sx={{
          display: open ? "block" : "none",
          position: "absolute",
          zIndex: 100000,
          width: "100%",
          backgroundColor: "white",
        }}
        onClick={searchClickHandler}
        onBlur={closeBlurHandler}
        onChange={(event: any) => {
          setFilter(event.target.value);
        }}
        variant="outlined"
        size="small"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={searchClickHandler} color="primary">
                <Search />
              </IconButton>
            </InputAdornment>
          ),
          notched: false,
        }}
      />
    </Box>
  );
}

export default DropDownWithClear;
