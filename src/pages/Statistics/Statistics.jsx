import "./Statistics.css";

import StatisticsComponent from "../../components/StatisticsPage/StatisticsComponent";
import { Map } from "../../components/StatisticsPage/Map";
import { MapTwo } from "../../components/StatisticsPage/MapTwo";

export default function Statistics() {
  return (
    <>
      <div className="statistics-content">
        <StatisticsComponent />
      </div>
      <div className="gap-8 grid grid-cols-2">
        <Map />
        <MapTwo />
      </div>
    </>
  );
}
