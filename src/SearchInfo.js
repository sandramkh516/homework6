import React from "react";
import "./SearchInfo.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function SearchInfo(props) {
  return (
    <div className="SearchInfo">
      <h1>{props.data.city}</h1>
      <FormattedDate date={props.data.date} />
      <WeatherIcon code={props.data.icon} size={80} />
      <div className="temp">{Math.round(props.data.temperature)}</div>
      <span className="min-temp">{Math.round(props.data.tempMin)}°</span>/{""}
      <span className="max-temp">{Math.round(props.data.tempMax)}°</span>
      <div>{props.data.description}</div>
      <div className="row">
        <div className="col"></div>
      </div>
    </div>
  );
}
