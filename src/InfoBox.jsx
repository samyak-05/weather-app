import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
    let snow_URL = "https://images.unsplash.com/photo-1701523615665-fa548e52490a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNub3dmYWxsfGVufDB8fDB8fHww";
    let rain_URL = "https://plus.unsplash.com/premium_photo-1671229652411-4468b946b787?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    let sun_URL = "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3Vubnl8ZW58MHx8MHx8fDA%3D";
    let cold_URL = "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    return (
        <div className="info-box">
            <h3>Weather Information</h3>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.temperature <= 0
                            ? snow_URL
                            : info.humidity > 75
                                ? rain_URL
                                : info.temperature <= 20
                                    ? cold_URL
                                    : sun_URL
                    }
                    title=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                        {info.city}{info.temperature < 20 ? <AcUnitIcon sx={{ color: 'blue', marginLeft: '10px' }} /> : info.humidity >75 ? <ThunderstormIcon sx={{ color: 'gray', marginLeft: '10px' }} /> : <SunnyIcon sx={{ color: 'orange', marginLeft: '10px' }} />}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <div>Temperature : {info.temperature}&deg;C </div>
                        <div>Max Temperature : {info.tempMax}&deg;C </div>
                        <div>Min Temperature : {info.tempMin}&deg;C </div>
                        <div>Humidity : {info.humidity} </div>
                        <div>The weather can be described as <i>{info.weatherType}</i> and it feels like {info.feelsLike}&deg;C</div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}