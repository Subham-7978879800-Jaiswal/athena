import { useState } from "react";

import { Box, Button, Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

import DropdownWithClear from "../UI/DropDownWithClear/DropDownWithClear";
import Dropdown from "../UI/DropDown";
import Tag from "../UI/Tag";

import "./providerSearch.css";
import { useStore } from "../../context/store";

const FilterSelector = ({ changeHandler }: any) => {
  const { providerSearchFilter, resetFilters } = useStore();
  return (
    <Grid sx={{ margin: "24px", marginLeft: "0px" }}>
      <div style={{ display: "flex" }}>
        {Object.entries(providerSearchFilter).map(([key, value]) => (
          <Tag tag={value} tagName={key} changeHandler={changeHandler}></Tag>
        ))}

        <Button
          sx={{ height: "40px" }}
          size="small"
          onClick={resetFilters}
          color="secondary"
        >
          <Typography component="span" className="button-text ">
            Clear All Filters
          </Typography>
        </Button>
      </div>
    </Grid>
  );
};

function ProviderSearch() {
  const options = [
    { label: "Amadeus", value: 1984 },
    { label: "Mockingbird", value: 1962 },
    { label: "Toy Story", value: 2010 },
    { label: "Logan", value: 2017 },
    { label: "Full Metal", value: 1987 },
    { label: "Dangal", value: 2016 },
    { label: "The Sting", value: 1973 },
    { label: "2001: A Space", value: 1968 },
    { label: "Singin' in", value: 1952 },
    { label: "Bicycle", value: 1948 },
    { label: "The Kid", value: 1921 },
    { label: "Inglourious", value: 2009 },
    { label: "Snatch", value: 2000 },
    { label: "3 Idiots", value: 2009 },
    { label: "Monty Python", value: 1975 },
  ];
  const dropdownOptions = options;

  const [showMoreFilter, setShowMoreFilter] = useState(false);

  const { updateProviderSearchFilter, providerSearchFilter } = useStore();

  const changeHandler = (data: Object[]) => {
    updateProviderSearchFilter(data);
  };
  return (
    <>
      <h2 className="header-style">Find a Provider</h2>
      <Box className="divider-style">
        <Divider />
      </Box>
      <Box sx={{ marginLeft: "24px" }}>
        <Grid
          container
          sx={{ marginLeft: "0px", width: "unset", marginTop: "0px" }}
          spacing={3}
          columns={12}
        >
          <Grid container sx={{ width: "unset" }} spacing={3} xs={11}>
            <Grid item md={3} xs={6}>
              <DropdownWithClear
                fieldLabel={"Distance From member"}
                dropdownOptions={dropdownOptions}
                changeHandler={changeHandler}
                fieldName={"distanceFromMember"}
                value={providerSearchFilter.distanceFromMember}
              ></DropdownWithClear>
            </Grid>
            <Grid item md={3} xs={6}>
              <DropdownWithClear
                fieldLabel={"Speciality"}
                dropdownOptions={dropdownOptions}
                changeHandler={changeHandler}
                fieldName={"speciality"}
                value={providerSearchFilter.speciality}
              ></DropdownWithClear>
            </Grid>
            <Grid item md={3} xs={6}>
              <Dropdown
                fieldLabel={"Sub-Speciality"}
                options={options}
                changeHandler={changeHandler}
                fieldName={"subSpeciality"}
                value={providerSearchFilter.subSpeciality}
              ></Dropdown>
            </Grid>
            <Grid item md={3} xs={6}>
              <Dropdown
                fieldLabel={"Procedure Category"}
                options={options}
                changeHandler={changeHandler}
                fieldName={"procedureCategory"}
                value={providerSearchFilter.procedureCategory}
              ></Dropdown>
            </Grid>
            {showMoreFilter && (
              <>
                <Grid className="flex-grow-1" item>
                  <DropdownWithClear
                    fieldLabel={"Conditions Addressed"}
                    dropdownOptions={dropdownOptions}
                    changeHandler={changeHandler}
                    fieldName={"conditionsAddressed"}
                    value={providerSearchFilter.conditionsAddressed}
                  ></DropdownWithClear>
                </Grid>
                <Grid className="flex-grow-1" item>
                  <DropdownWithClear
                    fieldLabel={"Facility Type"}
                    dropdownOptions={dropdownOptions}
                    changeHandler={changeHandler}
                    fieldName={"facilityType"}
                    value={providerSearchFilter.facilityType}
                  ></DropdownWithClear>
                </Grid>
                <Grid className="flex-grow-1" item>
                  <Dropdown
                    fieldLabel={"Preferred Gender"}
                    options={options}
                    changeHandler={changeHandler}
                    fieldName={"preferredGender"}
                    value={providerSearchFilter.preferredGender}
                  ></Dropdown>
                </Grid>
                <Grid className="flex-grow-1" item>
                  <Dropdown
                    fieldLabel={"Languages Spoken"}
                    options={options}
                    changeHandler={changeHandler}
                    fieldName={"languagesSpoken"}
                    value={providerSearchFilter.languagesSpoken}
                  ></Dropdown>
                </Grid>
                <Grid className="flex-grow-1" item>
                  <Dropdown
                    fieldLabel={"Provider Type"}
                    options={options}
                    changeHandler={changeHandler}
                    fieldName={"providerType"}
                    value={providerSearchFilter.providerType}
                  ></Dropdown>
                </Grid>
              </>
            )}
          </Grid>
          <Grid item xs={1} className="button-container">
            <Button
              sx={{ height: "40px" }}
              size="small"
              onClick={() => setShowMoreFilter((prev) => !prev)}
              variant="contained"
            >
              <Typography
                variant="button"
                component="span"
                sx={{ textTransform: "capitalize" }}
              >
                Hide Filters
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box className="divider-style">
        <Divider />
      </Box>

      <Box className="margin-left-24">
        <FilterSelector changeHandler={changeHandler}></FilterSelector>
      </Box>
    </>
  );
}

export default ProviderSearch;
