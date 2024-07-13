import React, { useState,useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [input,setInput]=useState("")
  const[weatherData,setweatherData]=useState()
  const[submitted,setSubmitted]=useState(false)
  const api_key = '1cf17e90463ee0d354261bbce15bb67c'
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}`
  
  useEffect(()=>{
    fetchData();
  },[])
  
  const fetchData=async()=>{
    try
    {
      const fetch=await axios.get(url)
      console.log(fetch.data);
      setweatherData(fetch.data);
      setSubmitted(true)
    }
    catch(error)
    { 
      console.log('error in fetching data',error)
    }
  }
  const formatTime=(time)=>{
    const date=new Date(time*1000);
    const options={
      hour:'numeric',
      minute:'numeric'
    };
    return date.toLocaleTimeString([],options)
  }
  
  return (

    <div className="max-w-md mx-auto mt-8 rounded-lg overflow-hidden shadow-lg bg-gray-100">
      {/* Search Box */}
      <div className="flex items-center bg-white border-b border-gray-200 p-2">
        <input
          type="text"
          className="flex-1 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          placeholder="Enter City Name"
          onChange={(e)=>setInput(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"onClick={()=>fetchData()} >
          {/* onClick={()=>fetchData()}  */}
          Submit
        </button>
      </div>

      {/* Weather Details Card */}
      {submitted?weatherData && (
        <div className="p-4">
          <div className="text-gray-800 font-bold text-xl mb-2">Weather Details</div>

          <div className="border border-gray-300 p-4 rounded-lg bg-white">
            <p className="mb-4"><span className="font-bold">Coordinates:</span> Latitude= {weatherData?.coord?.lat}, Longitude= {weatherData?.coord?.lon}</p>
            <p className="mb-2"><span className="font-bold">Temperature:</span> {weatherData?.main?.temp-273} °C</p>
            <p className="mb-2"><span className="font-bold">Pressure:</span> {weatherData?.main?.pressure} Pa</p>
            <p className="mb-2"><span className="font-bold">Humidity:</span> {weatherData?.main?.humidity} g.m-3</p>
            <div className="flex justify-between">
              <p className="mb-2"><span className="font-bold">Wind Speed:</span> {weatherData?.wind?.speed}</p>
              <p className="mb-2"><span className="font-bold">Sunrise:</span> {formatTime(weatherData?.sys?.sunrise)}</p>
              <p className="mb-2"><span className="font-bold">Sunset:</span> {formatTime(weatherData?.sys?.sunset)}</p>
            </div>
          </div>
        </div>
      ):null}
    </div>
  )
}
export default App
//   return (
//     {weatherData&&(
//     <div className="max-w-md mx-auto mt-8 rounded-lg overflow-hidden shadow-lg bg-gray-100">
//       <div className="flex items-center bg-white border-b border-gray-200 p-2">
//         <input type="text"
//         className="flex-1 appearance-none bg-transparent broder-none w-full
//         text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
//         placeholder="Enter City Name" 
//         />
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">Submit</button>
//       </div>
//       <div className='p-4'>
//       <div className="border border-gray-300 p-4 rounded-lg bg-white">
//         <p className="mb-4"><span className="font-bold">Coordinates:</span>Latitude=90,longitude=90</p>
//         <p className="mb-2"><span className="font-bold">Temperature:</span>89</p>
//         <p className="mb-2"><span className="font-bold">Pressure:</span>90</p>
//         <p className="mb-2"><span className="font-bold">Humidity</span>90</p>
//         <div className="flex justify-between">
//           <p className="mb-2"><span className="font-bold">Wind Speed:</span>80</p>
//           <p className="mb-2"><span className="font-bold">Sunrise:</span>90</p>
//           <p className="mb-2"><span className="font-bold">Sunset:</span>99</p>
//           </div>
//         </div>
//       </div>
//     )}
//     </div>
//   )
// }

// export default App;




// import React, { useState } from 'react';

// const App = () => {
//   const apiKey = '1f6d22e919df191aa01e372b68521e64';
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);

//   const fetchWeather = async () => {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
//     const data = await response.json();
//     setWeather(data);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetchWeather();
//   };


//   return (
//     <div className="max-w-md mx-auto mt-8 rounded-lg overflow-hidden shadow-lg bg-gray-100">
//       <div className="flex items-center bg-white border-b border-gray-200 p-2">
//         <input
//           type="text"
//           className="flex-1 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
//           placeholder="Enter city name"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </div>

//       {weather && (
//         <div className="border border-gray-300 font-bold text-xl mb-2 p-4 bg-white rounded-lg">
//           <h2 className="mb-4">Weather Details</h2>
//           <p className="mb-4"><span className="font-bold">Coordinates:</span> Latitude: {weather.coord.lat}, Longitude: {weather.coord.lon}</p>
//           <p className="mb-2"><span className="font-bold">Temperature:</span> {weather.main.temp}</p>
//           <p className="mb-2"><span className="font-bold">Pressure:</span> {weather.main.pressure}</p>
//           <p className="mb-2"><span className="font-bold">Humidity:</span> {weather.main.humidity}</p>
//           <div className="flex justify-between">
//             <p className="mb-2"><span className="font-bold">Windspeed:</span> {weather.wind.speed} </p>
//             <p className="mb-2"><span className="font-bold">Sunrise:</span> {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
//             <p className="mb-2"><span className="font-bold">Sunset:</span> {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
