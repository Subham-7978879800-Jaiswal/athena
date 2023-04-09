import React, { useEffect, useState } from "react";

import {
  Typography,
  TextField,
  Button,
  Switch,
  Grid,
  Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";

import ProviderDetailCard from "./ProviderDetailCard";
import { darkBlue } from "../../colors";
import { useStore } from "../../context/store";
import { getMockData } from "../../MockData";

function ProviderSelectionDetail() {
  const [results] = useState<number>(258);
  const [checkedValuesMap, setCheckedValuesMap] = useState(new Map());
  const { availableProviders, updateAvailableProviders } = useStore();
  const [page, setPage] = useState(1);
  const [groupByFacilityChecked, setGroupByFacilityChecked] = useState(false);
  const rowsPerPage = 8;

  const onCheckBoxClick = (event: any) => {
    const newCheckedValuesMap = new Map(checkedValuesMap);
    const { checked } = event.target;
    const value = event.currentTarget.getAttribute("data-value");

    if (checked) {
      newCheckedValuesMap.set(value, 1);
    } else if (value) {
      newCheckedValuesMap.set(value, 0);
    }

    setCheckedValuesMap(newCheckedValuesMap);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Your code to handle the search query
  };

  const getProviders = (value: number) => {
    if (!availableProviders[value * rowsPerPage]) {
      const newProviderData = getMockData(value);
      updateAvailableProviders(newProviderData);
    }
  };
  const handleChange = (event: any, value: any) => {
    setPage(value);
    getProviders(value);
  };

  const handleSendButtonClick = () => {
    console.log(checkedValuesMap);
  };

  const groupByFacility = (data: any) => {
    if (groupByFacilityChecked) {
      data.sort((a: any, b: any) => {
        if (a.facilityName > b.facilityName) {
          return 1;
        } else if (a.facilityName < b.facilityName) {
          return -1;
        } else {
          return 0;
        }
      });
    }

    return data;
  };

  useEffect(() => {
    getProviders(page);
  });

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
          <Switch
            checked={groupByFacilityChecked}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setGroupByFacilityChecked(event.target.checked);
            }}
            sx={{ marginLeft: 1 }}
          />
          <Button
            onClick={handleSendButtonClick}
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
      {groupByFacility(
        availableProviders.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        )
      ).map((data: Record<string, string>, index: number) => (
        <ProviderDetailCard
          key={(page - 1) * rowsPerPage + index}
          onCheckBoxClick={onCheckBoxClick}
          checkedValuesMap={checkedValuesMap}
          value={(page - 1) * rowsPerPage + index}
          name={data.name}
          subtitle1={data.subtitle1}
          subtitle2={data.subtitle2}
          facilityName={data.facilityName}
          facilityAddress={data.facilityAddress}
          distance={data.distance}
          smartCompare={Boolean(data.smartCompare)}
          speciality={data.speciality}
          subSpeciality={data.subSpeciality}
        ></ProviderDetailCard>
      ))}
      <Pagination
        sx={{ marginTop: "24px", justifyContent: "center", display: "flex" }}
        count={3}
        color="secondary"
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={handleChange}
      />
    </Grid>
  );
}

export default ProviderSelectionDetail;
