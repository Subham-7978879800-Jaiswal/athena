import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Typography } from "@mui/material";

interface DropDownWithClearPropsType {
  options: any[];
  changeHandler: (event: any) => void;
  fieldLabel: string;
  fieldName: string;
}

export default function DropDownWithClear(props: DropDownWithClearPropsType) {
  const { options, fieldLabel, changeHandler, fieldName } = props;

  const handleChange = (event: any) => {
    const value = event.target.textContent;
    changeHandler({ [fieldName]: value });
  };

  return (
    <>
      <Typography sx={{ fontSize: "12px" }} align="left">
        {fieldLabel}
      </Typography>
      <Autocomplete
        onChange={handleChange}
        disablePortal
        id="combo-box"
        options={options}
        getOptionLabel={(option) => {
          return option.label || "";
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </>
  );
}
