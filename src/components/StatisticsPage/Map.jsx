import "./StatisticsComponent.css";

import { MapContainer, GeoJSON } from "react-leaflet";

import mapData from "../../mocks/datos_modificados.json";

const mapInfo = [
  { SANTANDER: 15 },
  { RISARALDA: 12 },
  { "LA GUAJIRA": 1 },
  { CHOCÓ: 2 },
  { CÓRDOBA: 12 },
  { VAUPÉS: 4 },
  { CALDAS: 8 },
  { CESAR: 10 },
  { META: 2 },
  { ARAUCA: 9 },
  { QUINDIO: 14 },
  { CUNDINAMARCA: 9 },
  { BOGOTÁ: 11 },
  { TOLIMA: 8 },
  { BOYACÁ: 9 },
  { HUILA: 13 },
  { CAQUETÁ: 9 },
  { VICHADA: 14 },
  { GUAINÍA: 15 },
  { ATLÁNTICO: 5 },
  { "VALLE DEL CAUCA": 3 },
  { "ARCHIPIÉLAGO DE SAN ANDRÉS, PROVIDENCIA Y SANTA CATALINA": 15 },
  { BOLÍVAR: 0 },
  { "NORTE DE SANTANDER": 1 },
  { CASANARE: 6 },
  { NARIÑO: 6 },
  { GUAVIARE: 11 },
  { MAGDALENA: 15 },
  { CAUCA: 4 },
  { AMAZONAS: 15 },
  { SUCRE: 6 },
  { PUTUMAYO: 10 },
  { ANTIOQUIA: 6 },
  { "BOGOTÁ, D.C.": 22 },
];

function findValueByKey(arr, key) {
  for (const item of arr) {
    if (key in item) {
      return item[key];
    }
  }
  return null; // Return null if the key is not found
}

function onEachFeatureWrapper(mapInfo) {
  return function onEachDepartment(feature, layer) {
    const DPTO_CNMBR = feature.properties.DPTO_CNMBR;
    const value = findValueByKey(mapInfo, DPTO_CNMBR);
    layer.bindPopup(
      "<strong>" +
        DPTO_CNMBR +
        "</strong> <br> Número de alertas:&nbsp;" +
        value
    );
  };
}

export function Map() {
  const stylingFunction = (feature) => {
    const DPTO_CNMBR = feature.properties.DPTO_CNMBR;
    const tasa = findValueByKey(mapInfo, DPTO_CNMBR);

    if (tasa) {
      if (tasa == 0) {
        return {
          fillColor: "#7d8fa96c",
          color: "black",
          weight: 1,
          fillOpacity: 1,
        };
      } else if (tasa >= 12) {
        return {
          fillColor: "#005CA8",
          color: "black",
          weight: 1,
          fillOpacity: 1,
        };
      } else if (tasa >= 9) {
        return {
          fillColor: "#3C6B91",
          color: "black",
          weight: 1,
          fillOpacity: 1,
        };
      } else if (tasa >= 6) {
        return {
          fillColor: "#5BA3DE",
          color: "black",
          weight: 1,
          fillOpacity: 1,
        };
      } else if (tasa >= 3) {
        return {
          fillColor: "#2B4D69",
          color: "black",
          weight: 1,
          fillOpacity: 1,
        };
      } else if (tasa > 0) {
        return {
          fillColor: "#457CA8",
          color: "black",
          weight: 1,
          fillOpacity: 1,
        };
      }
    } else {
      return {
        fillColor: "#7d8fa96c",
        color: "black",
        weight: 1,
        fillOpacity: 1,
      };
    }
  };

  const customOnEachDepartment = onEachFeatureWrapper(mapInfo);

  return (
    <div>
      <h1 className="text-center" id="title-map">
        MAPA
      </h1>
      <MapContainer
        className="map"
        center={[5, -74.2973]}
        zoom={6}
        dragging={true}
        doubleClickZoom={true}
        scrollWheelZoom={false}
        attributionControl={false}
        zoomControl={true}
      >
        <GeoJSON
          data={mapData.features}
          style={stylingFunction}
          onEachFeature={customOnEachDepartment}
        />
      </MapContainer>
    </div>
  );
}
