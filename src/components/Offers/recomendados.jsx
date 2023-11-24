import "./OffersComponent.css";

import imageOne from "../../assets/offersImages/one.jpg";
import imageTwo from "../../assets/offersImages/two.jpg";
import imageThree from "../../assets/offersImages/three.jpg";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { recommendedInfo } from "../../services/general";

function asignarImagen(numero) {
  if (numero >= 0 && numero <= 100) {
    // Utiliza el operador de módulo para asignar un número único a 1, 2 o 3
    return (numero % 3) + 1;
  } else {
    return null; // Manejar el caso cuando el número está fuera del rango
  }
}

const relation = {
  1: imageOne,
  2: imageTwo,
  3: imageThree,
};

const dataOffers = [
  {
    ofertaid: 1,
    title: "Descuento en maquinaria agrícola",
    description:
      "Oferta especial para agricultores. Obtén un 15% de descuento en la compra de maquinaria agrícola. ¡Moderniza tu granja con nosotros!",
    ofertante: "AgroInnova",
    imagen: 1,
  },
  {
    ofertaid: 2,
    title: "Curso gratuito de marketing digital",
    description:
      "Aprende las últimas estrategias de marketing digital. Curso intensivo gratuito con certificación al finalizar. ¡Potencia tu negocio online!",
    ofertante: "Digital Academy",
    imagen: 3,
  },
  {
    ofertaid: 3,
    title: "Kit de herramientas para emprendedores",
    description:
      "Empieza tu propio negocio con nuestro kit de herramientas esenciales. Incluye todo lo que necesitas para comenzar tu aventura emprendedora.",
    ofertante: "EmprendeKit",
    imagen: 2,
  },
  {
    ofertaid: 4,
    title: "Descuento en equipo de cocina profesional",
    description:
      "Para restaurantes y chefs. Obtén un 20% de descuento en la compra de equipos de cocina profesional. ¡Mejora la eficiencia de tu cocina!",
    ofertante: "Gastronova",
    imagen: 3,
  },
];

export default function Recomendados() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [infoModal, setInfoModal] = useState({});
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchDataAsync(bsq) {
    setInfo(await recommendedInfo(bsq));
    setLoading(false);
  }

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      fetchDataAsync(2);
    } else {
      setInfo(dataOffers);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <></>;
  } else {
    return (
      <>
        <div className="gap-8 grid grid-cols-2 sm:grid-cols-4">
          {info.map((data) => (
            <Card
              className="py-4"
              key={data.ofertaid}
              isPressable
              onPress={onOpen}
              onClick={() => {
                setInfoModal(data);
              }}
              id="card-offer"
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">
                  Oferta: {data.ofertante}
                </p>
                <h4 className="font-bold text-large" id="title-cards-offer">
                  {data.title}
                </h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2" id="img-offer">
                <Image
                  isZoomed
                  alt={data.title}
                  className="object-cover rounded-xl"
                  src={relation[asignarImagen(data.ofertaid)]}
                  width={300}
                  shadow="none"
                />
              </CardBody>
            </Card>
          ))}
        </div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {infoModal.title}
                </ModalHeader>
                <ModalBody>
                  <h3>{infoModal.ofertante}</h3>
                  <p>{infoModal.description}</p>
                  <div id="img-offer">
                    <Image
                      alt={infoModal.title}
                      className="object-cover rounded-xl"
                      src={relation[asignarImagen(infoModal.ofertaid)]}
                      width={300}
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="warning" onPress={onClose}>
                    Aplicar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }
}
