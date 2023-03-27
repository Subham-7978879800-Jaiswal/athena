import { Box, Button, Grid } from "@mui/material";
import DropdownWithClear from "../UI/DropDownWithClear";
import Dropdown from "../UI/DropDown";
import { useStore } from "../../context/store";
import { useState } from "react";
import Tag from "../UI/Tag";

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
    { label: "Toy Story", value: 1995 },
    { label: "Bicycle", value: 1948 },
    { label: "The Kid", value: 1921 },
    { label: "Inglourious", value: 2009 },
    { label: "Snatch", value: 2000 },
    { label: "3 Idiots", value: 2009 },
    { label: "Monty Python", value: 1975 },
  ];

  const [showMoreFilter, setShowMoreFilter] = useState(false);

  const { updateProviderSearchFilter, providerSearchFilter, resetFilters } =
    useStore();

  const changeHandler = (data: Object[]) => {
    updateProviderSearchFilter(data);
  };
  return (
    <>
      <h2 style={{ marginLeft: "24px", marginBottom: "48px" }}>
        Find a Provider
      </h2>
      <Box sx={{ margin: "24px" }}>
        <Grid container sx={{ marginLeft: "0px" }} spacing={3} columns={12}>
          <Grid container spacing={3} xs={10}>
            <Grid item md={3} xs={6}>
              <DropdownWithClear
                fieldLabel={"Distance From member"}
                options={options}
                changeHandler={changeHandler}
                fieldName={"distanceFromMember"}
              ></DropdownWithClear>
            </Grid>
            <Grid item md={3} xs={6}>
              <DropdownWithClear
                fieldLabel={"Speciality"}
                options={options}
                changeHandler={changeHandler}
                fieldName={"speciality"}
              ></DropdownWithClear>
            </Grid>
            <Grid item md={3} xs={6}>
              <Dropdown
                fieldLabel={"Sub-Speciality"}
                options={options}
                changeHandler={changeHandler}
                fieldName={"subSpeciality"}
              ></Dropdown>
            </Grid>
            <Grid item md={3} xs={6}>
              <Dropdown
                fieldLabel={"Procedure Category"}
                options={options}
                changeHandler={changeHandler}
                fieldName={"procedureCategory"}
              ></Dropdown>
            </Grid>
            {showMoreFilter && (
              <>
                <Grid sx={{ flexGrow: 1 }} item>
                  <DropdownWithClear
                    fieldLabel={"Conditions Addressed"}
                    options={options}
                    changeHandler={changeHandler}
                    fieldName={"conditionsAddressed"}
                  ></DropdownWithClear>
                </Grid>
                <Grid sx={{ flexGrow: 1 }} item>
                  <DropdownWithClear
                    fieldLabel={"Facility Type"}
                    options={options}
                    changeHandler={changeHandler}
                    fieldName={"facilityType"}
                  ></DropdownWithClear>
                </Grid>
                <Grid sx={{ flexGrow: 1 }} item>
                  <Dropdown
                    fieldLabel={"Preferred Gender"}
                    options={options}
                    changeHandler={changeHandler}
                    fieldName={"preferredGender"}
                  ></Dropdown>
                </Grid>
                <Grid sx={{ flexGrow: 1 }} item>
                  <Dropdown
                    fieldLabel={"Languages Spoken"}
                    options={options}
                    changeHandler={changeHandler}
                    fieldName={"languagesSpoken"}
                  ></Dropdown>
                </Grid>
                <Grid sx={{ flexGrow: 1 }} item>
                  <Dropdown
                    fieldLabel={"Provider Type"}
                    options={options}
                    changeHandler={changeHandler}
                    fieldName={"providerType"}
                  ></Dropdown>
                </Grid>
              </>
            )}
          </Grid>
          <Grid item xs={2}>
            <Button
              onClick={() => setShowMoreFilter((prev) => !prev)}
              variant="contained"
            >
              Hide Filters
            </Button>
          </Grid>
        </Grid>
        <Grid sx={{ margin: "24px", marginLeft: "0px" }}>
          <div style={{ display: "flex" }}>
            {Object.entries(providerSearchFilter).map(([key, value]) => (
              <Tag
                tag={value}
                tagName={key}
                changeHandler={changeHandler}
              ></Tag>
            ))}
            <Tag
              tag={"Cancel All Filters"}
              tagName={""}
              changeHandler={changeHandler}
              cancelAllFilter={true}
            ></Tag>
          </div>
        </Grid>
      </Box>
    </>
  );
}

export default ProviderSearch;
