import "./StatisticsComponent.css";

import findeter from "../../assets/partners/findeter.png";
import { FaHandshake, FaUserEdit, FaBoxes } from "react-icons/fa";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const data = [
  {
    id: 1,
    title: "Número de ofertas lanzadas",
    icon: <FaBoxes />,
    value: 78,
  },
  {
    id: 2,
    title: "Empresas apoyadas",
    icon: <FaHandshake />,
    value: 31,
  },
  {
    id: 3,
    title: "Número de ofertas disponibles",
    icon: <FaUserEdit />,
    value: 15,
  },
];

export default function StatisticsComponent() {
  return (
    <>
      <div className="text-center" id="title-statistics-general">
        <h1>Estadísticas generales</h1>
      </div>
      <div className="gap-20 grid grid-cols-2 sm:grid-cols-4">
        {data.map((data) => (
          <Card className="py-4" key={data.id} id="card-statistics">
            <CardHeader
              className="pb-0 pt-2 px-4 flex-col items-center"
              id="text-header-statistics"
            >
              <h4 id="title-cards-offer">{data.title}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2" id="img-offer">
              <div id="icon-card-statistic">{data.icon}</div>
              <p id="value-card-statistic">{data.value}</p>
            </CardBody>
          </Card>
        ))}
        <Card className="py-4" key={data.id} id="card-statistics">
          <CardHeader
            className="pb-0 pt-2 px-4 flex-col items-start"
            id="text-header-statistics"
          >
            <h4 id="title-cards-offer">Ofertante que más empresas apoya</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2" id="img-offer">
            <Image
              alt={data.titulo}
              src={findeter}
              width={250}
              shadow="none"
              radius="none"
            />
          </CardBody>
        </Card>
      </div>
    </>
  );
}
