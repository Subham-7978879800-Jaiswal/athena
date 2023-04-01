import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

interface DropDownPropsType {
  options: any[];
  changeHandler: (event: any) => void;
  fieldLabel: string;
  fieldName: string;
  value: string;
}

export default function DropDown(props: DropDownPropsType) {
  const { options, fieldLabel, changeHandler, fieldName, value } = props;

  const handleChange = (event: any) => {
    const { value } = event.target;
    changeHandler({ [fieldName]: value });
  };

  return (
    <Box>
      <Typography sx={{ fontSize: "12px" }} align="left">
        {fieldLabel}
      </Typography>
      <FormControl fullWidth>
        <Select
          sx={{ height: "40px" }}
          id="simple-select"
          onChange={handleChange}
          value={value}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
