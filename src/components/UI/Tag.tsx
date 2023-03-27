import { Box } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useStore } from "../../context/store";
const Tag = ({ tag, changeHandler, tagName, cancelAllFilter = false }: any) => {
  const { resetFilters } = useStore();
  return tag ? (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#d3d3d3",
        marginRight: "5px",
        padding: "8px",
        borderRadius: "12px",
        fontSize: "12px",
      }}
    >
      <p style={{ marginRight: "8px" }}>{tag}</p>
      <CancelOutlinedIcon
        sx={{ height: "12px", width: "12px" }}
        onClick={() => {
          if (cancelAllFilter) {
            resetFilters();
          }
          changeHandler({ [tagName]: "" });
        }}
      ></CancelOutlinedIcon>
    </Box>
  ) : null;
};

export default Tag;
