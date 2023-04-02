import React, { FunctionComponent } from "react";
import {
  Card as MUICard,
  CardContent,
  Checkbox,
  Typography,
  Button,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
// import TierIcon from "@mui/icons-material/Tier";
import "./ProviderDetailCard.css";

type CardProps = {
  name: string;
  text1: string;
  text2: string;
  isSelected: boolean;
  onCheckboxChange: () => void;
  onSmartCompareClick: () => void;
  onTierClick: () => void;
};

const ProviderDetailCard: FunctionComponent<CardProps> = ({
  name,
  text1,
  text2,
  isSelected,
  onCheckboxChange,
  onSmartCompareClick,
  onTierClick,
}) => {
  return (
    <MUICard className="card">
      <div className="header">
        <div>
          <div className="header">
            <Checkbox checked={isSelected} onChange={onCheckboxChange} />
            <Typography variant="h5">{name}</Typography>
          </div>
          <Typography variant="body1" color="textSecondary" component="span">
            {text1} |
          </Typography>
          <Typography variant="body1" color="textSecondary" component="span">
            {text2}
          </Typography>
        </div>

        <div className="buttons">
          <Button
            variant="contained"
            className="smartCompareButton"
            onClick={onSmartCompareClick}
          >
            <PeopleIcon />
            Smart Compare
          </Button>
          <Button
            variant="contained"
            className="tierButton"
            onClick={onTierClick}
          >
            {/* <TierIcon /> */}
            Tier
          </Button>
        </div>
      </div>
      <CardContent></CardContent>
    </MUICard>
  );
};

export default ProviderDetailCard;
