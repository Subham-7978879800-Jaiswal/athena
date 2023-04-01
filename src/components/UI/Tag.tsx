import { Chip } from "@mui/material";
const Tag = ({ tag, changeHandler, tagName }: any) => {
  return tag ? (
    <Chip
      sx={{ margin: "6px", marginLeft: "0px" }}
      label={tag}
      onDelete={() => {
        changeHandler({ [tagName]: "" });
      }}
    />
  ) : null;
};

export default Tag;
