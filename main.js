console.log("test")
const mainz  = "171044"
const timeOneDay = 86400000
const url = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/171044?apikey=UEUHmHQn3uRrNBAqfdPRFQQ8GQ9F4ZAb&language=en-us"
//const weather = data.DailyForecasts[0]
getWeather(mainz)

setInterval(()=>{
    getWeather(mainz)
},5000)

    function getWeather(cityWanted){
        fetch(

 
            `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityWanted}?apikey=UEUHmHQn3uRrNBAqfdPRFQQ8GQ9F4ZAb&language=en-us`
            
             
            )
            
             
            .then(response => 
                {
                   return response.json()
            
                })
        
            
             
            .then(data => {
            
             
            //this.setState({
            
             
            //rngPic: data[0].url
            
             
            //});
            
             console.log(data.DailyForecasts[0])
            });

    }
    let jsondata;    
fetch(url).then(
        function(u){ return u.json();}
      ).then(
        function(json){
          jsondata = json;
        }
      )
