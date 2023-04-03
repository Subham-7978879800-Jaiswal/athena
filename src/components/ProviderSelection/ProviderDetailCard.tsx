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
// import TierIcon from "@mui/icons-material/Tier";
import "./ProviderDetailCard.css";
import {
  LocalHospitalOutlined,
  LocalPharmacyOutlined,
} from "@mui/icons-material";

import SocialDistanceIcon from "@mui/icons-material/SocialDistance";

type CardProps = {
  name: string;
  subtitle1: string;
  subtitle2: string;
  facilityName: string;
  isSelected: boolean;
  facilityAddress: string;
  distance: string;
  speciality: string;
  subSpeciality: string;
  onCheckboxChange: () => void;
  onSmartCompareClick: () => void;
  onTierClick: () => void;
};

const ProviderDetailCard: FunctionComponent<CardProps> = ({
  name,
  subtitle1,
  subtitle2,
  onCheckboxChange,
  onSmartCompareClick,
  onTierClick,
  facilityName,
  isSelected,
  facilityAddress,
  distance,
  speciality,
  subSpeciality,
}) => {
  return (
    <MUICard sx={{ marginTop: "16px", padding: "12px" }}>
      <div style={{ justifyContent: "space-between" }} className="d-flex">
        <div className="d-flex">
          <Checkbox sx={{ padding: "0px", marginRight: "12px" }} />
          <div>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body1" color="textSecondary" component="span">
              {subtitle1} |
            </Typography>
            <Typography variant="body1" color="textSecondary" component="span">
              {subtitle2}
            </Typography>
          </div>
        </div>

        <div className="buttons">
          <Button
            sx={{
              backgroundColor: "#0396d0",
              color: "#000000",
              borderRadius: " 30px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            className="provider-smartCompareButton"
            onClick={onSmartCompareClick}
          >
            <PeopleIcon />
            Smart Compare
          </Button>
          <Button
            sx={{
              backgroundColor: "#c5b614c4",
              color: "#000000",
              borderRadius: "30px",
            }}
            className="provider-tierButton"
            onClick={onTierClick}
          >
            {/* <TierIcon /> */}
            Tier
          </Button>
        </div>
      </div>
      <Divider sx={{ marginBottom: "12px" }} />
      <Grid container>
        <Grid item xs={4}>
          <div className="d-flex">
            <LocalHospitalOutlined
              sx={{ padding: "0px", marginRight: "12px" }}
            />
            <div>
              <Typography variant="body1" color="textSecondary" component="div">
                Facility
              </Typography>
              <Typography sx={{ fontWeight: 700 }} component="div">
                {facilityName}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="div">
                {facilityAddress}
              </Typography>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <div className="d-flex">
            <SocialDistanceIcon sx={{ padding: "0px", marginRight: "12px" }} />
            <div>
              <Typography variant="body1" color="textSecondary" component="div">
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
              <Typography variant="body1" color="textSecondary" component="div">
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
              <Typography variant="body1" color="textSecondary" component="div">
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
  );
};

export default ProviderDetailCard;
