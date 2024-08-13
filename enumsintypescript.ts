//enums are used for named constants that i can use in throughout the code
enum WeatherCondition{
    Sunny,
    Cloudy,
    Rainy
}
console.log(WeatherCondition.Sunny)
console.log(WeatherCondition.Rainy) // by deafult it return an index if i dont specify any value
//Declaring values
enum WeatherConditions{
    Sunny = "sunny",
    Cloudy = "cloudy",
    Rainy = "rainy"
}
console.log(WeatherConditions.Rainy)
