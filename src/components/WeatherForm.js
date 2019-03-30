import React from "react";

const WeatherForm = props => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City Name" />
      <input type="text" name="country" placeholder="Country Name" />
      <button>Get weather</button>
    </form>
  );
};

export default WeatherForm;
