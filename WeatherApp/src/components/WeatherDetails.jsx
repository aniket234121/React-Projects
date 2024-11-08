import React from "react";
import image from "../assets/cloudy.png";
import error from "../assets/404.png";
const WeatherDetails = ({ WeatherData }) => {
  console.log(WeatherData);
  return (
    <div
      className="text-[#f3ff14] flex rounded-3xl p-4 h-[80vh]  my-7 capitalize
     shadow-white  shadow-sm w-[70vw] mx-auto bg-gradient-to-br to-[#0396ff25] from-white/20 backdrop-filter"
    >
      {WeatherData ? (
        <div className="bg-gradient-to-br from-white/10 to-white/15   w-[20vw] rounded-3xl p-4 ml-1">
          <img src={image} alt="weather app" className="w-[10vw] mx-auto mt-5" />
          <div className="flex justify-center items-center gap-1 text-xl mt-5 text-justify">
            <h2 className="italic inline-block  mr-1 ">
              {WeatherData.location.name}{" "}
            </h2>
            <span className="uppercase font-bold">
              {WeatherData.location.country}
            </span>
          </div>
          <p className="text-center text-sm uppercase mt-1 ">
            {WeatherData.location.region}
          </p>
          <p className="text-center text-sm uppercase mt-5 text-white">
            {WeatherData.location.localtime}
          </p>
          <div className="grid grid-flow-row grid-cols-2 px-7 text-sm  gap-5 mt-7 items-center justify-center">
            <div className="font-bold">Latitude :</div>
            <div>{WeatherData.location.lat}</div>
            <div className="font-bold">Longtitude :</div>
            <div>{WeatherData.location.lon}</div>
            <div className="font-bold">Time Zone :</div>
            <div>{WeatherData.location.tz_id}</div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-3xl font-bold mx-auto">
            Please enter valid location
          </h1>
          <img className="w-[400px]" src={error} alt="not found error " />
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
