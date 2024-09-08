import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    const API_KEY="2e4f8117b072689c4d767f913c8f26d6";

    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            let result={
                city:city,
                temp:jsonResponse.main.temp,
                max:jsonResponse.main.temp_max,
                min:jsonResponse.main.temp_min,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        }catch(err){
            throw(err)
        }
    }

    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handlesubmit=async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newinfo=await getWeatherInfo();
            updateInfo(newinfo);
        }catch(err){
            setError("false");
            console.log("No such place exists.");
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handlesubmit}>  
                <TextField id="city" label="city-name" variant="outlined" value={city} onChange={handleChange} required/>
                <br /><br />
                <Button variant="contained" type='submit' >
                    Send
                </Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}