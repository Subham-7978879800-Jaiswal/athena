import React from "react";
import { Grid } from "@mui/material";

import ProviderSelectionDetail from "./ProviderSelectionDetail";
import ProviderMap from "./ProviderMap";

const ProviderSelection = () => {
  return (
    <Grid sx={{ paddingLeft: "24px" }} container columns={12}>
      <ProviderSelectionDetail />
      <ProviderMap></ProviderMap>
    </Grid>
  );
};

export default ProviderSelection;
