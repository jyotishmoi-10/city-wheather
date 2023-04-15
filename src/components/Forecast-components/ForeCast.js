/* Accordion is use to make a slid type expand element and all
      allowZeroExpanded means all below slid are not initially expand if we
      click then it expand */

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./ForeCast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ForeCast = ({ data }) => {
  const Today = new Date().getDay();
  const foreCastDays = WEEK_DAYS.slice(Today, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, Today)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => {
          return (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      alt="wheather"
                      className="icon-image"
                      src={`icons/${item.weather[0].icon}.png`}
                    />
                    <label className="day">{foreCastDays[idx]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp_min)}°C /{" "}
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-items">
                    <label>Pressure</label>
                    <label>{item.main.pressure} pa</label>
                  </div>
                  <div className="daily-details-grid-items">
                    <label>Humidity</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="daily-details-grid-items">
                    <label>Wind Speed</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="daily-details-grid-items">
                    <label>Sea_level</label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                  <div className="daily-details-grid-items">
                    <label>Clouds</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="daily-details-grid-items">
                    <label>Flees_like</label>
                    <label>{Math.round(item.main.feels_like)}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default ForeCast;
