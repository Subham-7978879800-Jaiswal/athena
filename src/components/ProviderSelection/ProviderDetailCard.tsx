import React, { FunctionComponent } from "react";
import {
  Card as MUICard,
  Checkbox,
  Typography,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import "./ProviderDetailCard.css";
import {
  LocalHospitalOutlined,
  LocalPharmacyOutlined,
} from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group";

import SocialDistanceIcon from "@mui/icons-material/SocialDistance";
import { black, lightBlue, white, yellow } from "../../colors";

type CardProps = {
  value: number;
  name: string;
  subtitle1: string;
  subtitle2: string;
  facilityName: string;
  smartCompare: boolean;
  facilityAddress: string;
  distance: string;
  speciality: string;
  subSpeciality: string;
  checkedValuesMap: Map<number, number>;
  onCheckBoxClick: (event: any) => void;
};

const ProviderDetailCard: FunctionComponent<CardProps> = ({
  value,
  name,
  subtitle1,
  subtitle2,
  facilityName,
  smartCompare,
  facilityAddress,
  distance,
  speciality,
  subSpeciality,
  onCheckBoxClick,
  checkedValuesMap,
}) => {
  return (
    <>
      <MUICard
        sx={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          marginTop: "16px",
          padding: "12px",
        }}
      >
        <Grid
          container
          style={{ justifyContent: "space-between" }}
          className="d-flex"
        >
          <Grid xs={12} sm={6} item className="d-flex">
            <div onClick={onCheckBoxClick} data-value={value}>
              <Checkbox sx={{ padding: "0px", marginRight: "12px" }} />
            </div>

            <Grid>
              <Typography variant="h5">{name}</Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
              >
                {subtitle1} |
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
              >
                {subtitle2}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            sx={{ justifyContent: "flex-end" }}
            xs={12}
            md={6}
            item
            className="buttons"
          >
            {smartCompare && (
              <Button
                sx={{
                  "&:hover": { backgroundColor: `${lightBlue}` },
                  backgroundColor: `${lightBlue}`,
                  color: `${white}`,
                  borderRadius: " 30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textTransform: "none",
                }}
                className="provider-smartCompareButton"
              >
                <PeopleIcon />
                Smart Compare
              </Button>
            )}
            <Button
              sx={{
                "&:hover": { backgroundColor: `${yellow}` },
                backgroundColor: `${yellow}`,
                color: `${black}`,
                borderRadius: "30px",
                textTransform: "none",
                gap: "8px",
              }}
              className="provider-tierButton"
            >
              <GroupIcon />
              Tier
            </Button>
          </Grid>
        </Grid>
        <Divider sx={{ marginBottom: "12px" }} />
        <Grid container>
          <Grid item xs={12} sm={4}>
            <div className="d-flex">
              <LocalHospitalOutlined
                sx={{ padding: "0px", marginRight: "12px" }}
              />
              <div>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="div"
                >
                  Facility
                </Typography>
                <Typography sx={{ fontWeight: 700 }} component="div">
                  {facilityName}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="div"
                >
                  {facilityAddress}
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={2}>
            <div className="d-flex">
              <SocialDistanceIcon
                sx={{ padding: "0px", marginRight: "12px" }}
              />
              <div>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="div"
                >
                  Distance
                </Typography>
                <Typography sx={{ fontWeight: 700 }} component="div">
                  {distance}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className="d-flex">
              <LocalHospitalOutlined
                sx={{ padding: "0px", marginRight: "12px" }}
              />
              <div>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="div"
                >
                  Speciality
                </Typography>
                <Typography sx={{ fontWeight: 700 }} component="div">
                  {speciality}
                </Typography>
              </div>
            </div>
            <div className="d-flex">
              <LocalPharmacyOutlined
                sx={{ padding: "0px", marginRight: "12px" }}
              />
              <div>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="div"
                >
                  Sub Speciality
                </Typography>
                <Typography sx={{ fontWeight: 700 }} component="div">
                  {subSpeciality}
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </MUICard>
    </>
  );
};

export default ProviderDetailCard;
