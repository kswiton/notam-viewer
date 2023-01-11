import React from "react";
import Card from "@mui/material/Card";
import dayjs from "dayjs";
import classes from "./weatherCard.module.scss";
import CardContent from "@mui/material/CardContent";

interface WeatherCardProps {
  series: any;
  initDate: string;
}
const WeatherCard: React.FC<WeatherCardProps> = (props) => {
  const { series, initDate } = props;
  const customParseFormat = require("dayjs/plugin/customParseFormat");
  dayjs.extend(customParseFormat);
  const now = dayjs(initDate, "YYYYMMDDHH").add(9, "hour");
  return (
    <Card className={classes.weatherCard}>
      <CardContent>
        <h3>{now.add(series.timepoint, "hour").format("DD MMM HH:mm")}</h3>
        <h3>Temp: {series.temp2m}°C</h3>
        <h3>Humid: {series.rh2m}%</h3>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
