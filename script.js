const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3038c5d672msh0a4e694493f7ec2p1c4254jsn1c20a43b3019',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
    cityName.innerHTML = city
    fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city , options)
	.then(response => response.json())
	.then(response => { 

        CO.innerHTML = response.CO.concentration 
        NO2.innerHTML = response.NO2.concentration 
        O3.innerHTML = response.O3.concentration
        SO2.innerHTML = response.SO2.concentration
        //PM2.innerHTML = response.PM2.concentration
        overall_aqi.innerHTML = response.overall_aqi 
        PM10.innerHTML = response.PM10.concentration 
        console.log(response)})
    
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")