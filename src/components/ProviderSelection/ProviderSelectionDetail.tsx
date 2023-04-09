import React, { useState } from "react";

import { Typography, TextField, Button, Switch, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";

import ProviderDetailCard from "./ProviderDetailCard";
import { darkBlue } from "../../colors";

function ProviderSelectionDetail() {
  const [results] = useState<number>(258);
  const [checkedValuesMap, setCheckedValuesMap] = useState(new Map());

  const onCheckBoxClick = (event: any) => {
    const newCheckedValuesMap = new Map(checkedValuesMap);
    const { checked, value } = event.target;

    if (checked) {
      newCheckedValuesMap.set(value, 1);
    } else if (value) {
      newCheckedValuesMap.set(value, "");
    }

    setCheckedValuesMap(newCheckedValuesMap);
  };

  console.log(checkedValuesMap);

  const mockData = [
    { value: "card1", id: "1" },
    { value: "card2", id: "2" },
    { value: "card3", id: "3" },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Your code to handle the search query
  };

  return (
    <Grid xs={12} sm={9} sx={{ paddingRight: "24px" }}>
      <Typography variant="h4" fontWeight="bold" marginBottom={2}>
        {results} results
      </Typography>
      <Typography variant="subtitle1" marginBottom={2}>
        Only in-network and accepting new patients
      </Typography>
      <Grid container>
        <Grid sx={{ marginBottom: "24px" }} xs={12} md={5}>
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
          md={7}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row-reverse",
          }}
        >
          <Typography
            component="h4"
            sx={{ fontWeight: 700, color: `${darkBlue}` }}
          >
            Group by facility
          </Typography>
          <Switch sx={{ marginLeft: 1 }} />
          <Button
            sx={{ marginRight: "12px" }}
            variant="contained"
            type="submit"
            startIcon={<SendIcon sx={{ tranform: "rotateZ(-45deg" }} />}
          >
            Send
          </Button>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" marginTop={3}>
        Select one or multiple Providers to send to the Customer
      </Typography>
      {mockData.map((data, index) => (
        <ProviderDetailCard
          onCheckBoxClick={onCheckBoxClick}
          value={index}
          name={"Catherine Jones"}
          subtitle1={"Group Practise"}
          subtitle2={"(773)123-4567"}
          facilityName={"Northwestern Hospital"}
          facilityAddress={"Northwestern Hospital Address Long"}
          distance={"0.6miles"}
          smartCompare={true}
          speciality={"Orthopadeic Surgery"}
          subSpeciality={"Knee Surgery"}
        ></ProviderDetailCard>
      ))}
    </Grid>
  );
}

export default ProviderSelectionDetail;
