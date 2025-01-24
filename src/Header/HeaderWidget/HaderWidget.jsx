import React, {useState, useEffect} from "react";

const HeaderWidget = () => {

    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/3.0/onecall?q={Moscow,Russia}&appid=fd3cd64065352bc728d0ef1001952e4e').then((data) => {
        console.log(data)})
    }, [])
    return(
        <div></div>
    )
}

export default HeaderWidget;