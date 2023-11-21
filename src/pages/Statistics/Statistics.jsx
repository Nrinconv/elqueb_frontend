import "./Statistics.css";

import { Divider } from "@nextui-org/react";

import StatisticsComponent from "../../components/StatisticsPage/StatisticsComponent";
import { Map } from "../../components/StatisticsPage/Map";

export default function Statistics() {
  return (
    <>
      <div className="statistics-content">
        <StatisticsComponent />
      </div>
      <Divider id="divider-section" />
      <Map />
    </>
  );
}
