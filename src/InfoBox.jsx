import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){

    let init="https://images.unsplash.com/photo-1498085245356-7c3cda3b412f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdWR5fGVufDB8fDB8fHww";

    let Hot_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
    let COLD_URL="https://images.unsplash.com/photo-1542267207-f8127b454605?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL="https://plus.unsplash.com/premium_photo-1676212747574-c401d596e853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbnl8ZW58MHx8MHx8fDA%3D";

    return (
        <div className='InfoBox'>
            <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        sx={{ height: 140 }}
                        image={info.humidity>80 
                            ? RAIN_URL
                            : info.temp>25 
                            ?Hot_URL 
                            : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city} {info.humidity>80 
                            ? <ThunderstormIcon />
                            : info.temp>25 
                            ? <LightModeIcon />
                            : <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="span">
                            <p>Temperature= {info.temp}&deg;C</p>
                            <p>Humidity= {info.humidity}</p>
                            <p>Min Temp= {info.min}&deg;C</p>
                            <p>Max Temp= {info.max}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
            
        </div>
    )
}