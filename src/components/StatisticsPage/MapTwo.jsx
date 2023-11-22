import "./StatisticsComponent.css";

import { MapContainer, GeoJSON } from "react-leaflet";

import mapData from "../../mocks/datos_modificados.json";

const mapInfo = [
  { CAUCA: 14 },
  { PUTUMAYO: 2 },
  { SANTANDER: 13 },
  { "LA GUAJIRA": 4 },
  { CAQUETÁ: 14 },
  { CUNDINAMARCA: 13 },
  { "VALLE DEL CAUCA": 9 },
  { MAGDALENA: 13 },
  { "NORTE DE SANTANDER": 14 },
  { "ARCHIPIÉLAGO DE SAN ANDRÉS, PROVIDENCIA Y SANTA CATALINA": 8 },
  { META: 7 },
  { CÓRDOBA: 11 },
  { VAUPÉS: 6 },
  { ARAUCA: 3 },
  { BOGOTÁ: 3 },
  { CALDAS: 4 },
  { CHOCÓ: 15 },
  { BOYACÁ: 0 },
  { GUAINÍA: 2 },
  { ATLÁNTICO: 4 },
  { RISARALDA: 14 },
  { TOLIMA: 6 },
  { ANTIOQUIA: 3 },
  { SUCRE: 2 },
  { HUILA: 4 },
  { CESAR: 4 },
  { QUINDIO: 5 },
  { AMAZONAS: 12 },
  { BOLÍVAR: 15 },
  { GUAVIARE: 14 },
  { NARIÑO: 4 },
  { VICHADA: 13 },
  { CASANARE: 8 },
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
        "</strong> <br> Número de ofertas:&nbsp;" +
        value
    );
  };
}

export function MapTwo() {
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
          fillColor: "#009EE2",
          color: "black",
          weight: 1,
          fillOpacity: 1,
        };
      } else if (tasa >= 9) {
        return {
          fillColor: "#2787B0",
          color: "black",
          weight: 1,
          fillOpacity: 1,
        };
      } else if (tasa >= 6) {
        return {
          fillColor: "#38C1FC",
          color: "black",
          weight: 1,
          fillOpacity: 1,
        };
      } else if (tasa >= 3) {
        return {
          fillColor: "#1E6887",
          color: "black",
          weight: 1,
          fillOpacity: 1,
        };
      } else if (tasa > 0) {
        return {
          fillColor: "#15485E",
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
        Ofertas publicadas
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
