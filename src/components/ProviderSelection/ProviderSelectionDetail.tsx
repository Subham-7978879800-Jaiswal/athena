import React, { useState } from "react";
import { Typography, TextField, Button, Switch, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import ProviderDetailCard from "./ProviderDetailCard";

function ProviderSelectionDetail() {
  const [results, setResults] = useState<number>(258);
  const [groupByFacility, setGroupByFacility] = useState<boolean>(false);

  const handleGroupByFacilityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGroupByFacility(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Your code to handle the search query
  };
  return (
    <Grid xs={9} sx={{ paddingRight: "24px" }}>
      <Typography variant="h4" fontWeight="bold" marginBottom={2}>
        {results} results
      </Typography>
      <Typography variant="subtitle1" marginBottom={2}>
        Only in-network and accepting new patients
      </Typography>
      <Grid container>
        <Grid xs={12} md={4}>
          <form
            style={{ width: "100%", height: "40px" }}
            onSubmit={handleSubmit}
          >
            <TextField
              placeholder="Search by provider name or facility"
              variant="outlined"
              sx={{ flexGrow: 1, width: "100%", height: "40px" }}
              InputProps={{
                startAdornment: <SearchIcon />,
              }}
            />
          </form>
        </Grid>

        <Grid
          xs={12}
          md={8}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row-reverse",
          }}
        >
          <Switch
            checked={groupByFacility}
            onChange={handleGroupByFacilityChange}
            sx={{ marginLeft: 1 }}
          />
          <Typography component="h4" sx={{ fontWeight: 700 }}>
            Group by facility
          </Typography>
          <Button
            sx={{ marginRight: "12px" }}
            variant="contained"
            type="submit"
            startIcon={<SendIcon />}
          >
            Send
          </Button>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" marginTop={3}>
        Select one or multiple Providers to send to the Customer
      </Typography>
      <ProviderDetailCard
        name={"Catherine Jones"}
        text1={"Group Practise"}
        text2={"(773)123-4567"}
        isSelected={false}
        onCheckboxChange={function (): void {
          throw new Error("Function not implemented.");
        }}
        onSmartCompareClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        onTierClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></ProviderDetailCard>
    </Grid>
  );
}

export default ProviderSelectionDetail;
