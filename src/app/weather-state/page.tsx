"use client";

import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "./loading";

import Setttings from "./Settings";
import WeatherFirstSection from "./WeatherFirstSection";
import WeatherSecondSection from "./WeatherSecondSection";
export default function WeatherState({}) {
  const [city, setCity] = useState("Muscat");
  const obj = useFetch<WeatherData>("/api/weather?city=" + city);
  function handleCityChange(theCity: string) {
    setCity(theCity);
  }

  // If the City name wrong
  if (obj.data?.error) {
    return <FaildFetching string={'Please Enter a Correct City Name'} />;
  }
  // If the Fetch is failed
  if (obj.isError) {
    console.log(obj.data);
    return <FaildFetching string={'Failed to Fetch Data'} />;
  }
  if (obj.isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Setttings handleCityChange={handleCityChange} />
      <div className="flex flex-col justify-between items-center h-svh text-white ">
        {/* The Upper Section in the page */}
        <WeatherFirstSection weatherObject={obj} />
        {/* The Lower Section in the page */}
        <WeatherSecondSection weatherObject={obj} />
        <div className="h-[55px]"></div>
      </div>
    </>
  );
}


function FaildFetching({string}:{string:string}){
  return (
    <div className="h-svh w-full flex justify-center items-center flex-col">
      <h1 className="text-white font-semibold text-2xl mb-4">{string}</h1>
      <button className="bg-red-600 p-3 rounded-xl text-white" onClick={()=>{
        window.location.reload();
      }}>Try Again</button>
    </div>
  )
}