import './App.css';
import Search  from './components/search';
import CurrentWheather from "./components/Wheather-components/current-wheather"
import { WHEATHER_URL, WHEATHER_KEY } from './API';
import ForeCast from './components/Forecast-components/ForeCast';
import { useState } from 'react';

function App() {
      
      const [currentWheather, setCurrentWheather]=useState(null);
      const [foreCast, setForeCast]=useState(null);

  const handleOnSearchChange=(searchData)=>{

      const [lat,lon]=searchData.value.split("");
        
       const currentWheatherFetch=fetch(`${WHEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${WHEATHER_KEY}&units=metric`);
       const wheatherForecastFetch=fetch(`${WHEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WHEATHER_KEY}&units=metric`);

       Promise.all([currentWheatherFetch , wheatherForecastFetch])
          .then(async(response)=>{
               const wheatherResponse=await response[0].json();
               const foreCastResponse=await response[1].json();

               setCurrentWheather({city: searchData.label , ...wheatherResponse});
               setForeCast({city: searchData.label , ...foreCastResponse});
          })
          .catch((err)=>console.log(err));

  }

  return (
      <div className="container">
         <Search  onSearchChange={handleOnSearchChange} />
        { currentWheather && <CurrentWheather data={currentWheather}/> }
        {foreCast && <ForeCast data={foreCast}/>}
      </div>
  );
}

export default App;
