import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
        city:"Wonderland",
        temp:25.5,
        max:25.5,
        min:25.5,
        humidity:79,
        feelsLike:33.62,
        weather:"cloudy"
    });

    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }

    return (
        <div>
            <h2 style={{textAlign:"center"}}>Weather app by : Barsha</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}