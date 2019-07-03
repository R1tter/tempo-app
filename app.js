const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const adress = process.argv[2]

if(!adress){
    console.log('Por favor digite o nome de sua cidade.')
}else{
    geocode(adress, (error, data)=>{
        if (error) {
            return console.log(error)
        }
    
        forecast(data.latitude, data.longitude, (error, forecastData)=>{
            if (error) {
                return console.log(error)
            }
    
            console.log(data.location)
            console.log(forecastData)
        })
    })

}

