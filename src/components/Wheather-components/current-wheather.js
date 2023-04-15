import "./current-wheather.css";

const CurrentWheather = ({data}) => {

  return (
    <div className="wheather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="wheather-description">{data.weather[0].description}</p>
        </div>
        <img alt="wheather" className="wheather-image" src={`icons/${data.weather[0].icon}.png`}/>
      </div>

      <div className="bottom">
        <p className="tempreture">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{Math.round(data.wind.speed)} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">humadity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">pressure</span>
            <span className="parameter-value">{data.main.humidity} pa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWheather;
