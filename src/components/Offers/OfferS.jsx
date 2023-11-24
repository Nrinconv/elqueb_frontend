import "./OffersComponent.css";

import imageOne from "../../assets/offersImages/one.jpg";
import imageTwo from "../../assets/offersImages/two.jpg";
import imageThree from "../../assets/offersImages/three.jpg";

import dataOffers from "../../mocks/Offers.json";

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
import { busquedaInfo } from "../../services/general";

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

export default function OfferS({ dataInfo }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [infoModal, setInfoModal] = useState({});
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchDataAsync(bsq) {
    setInfo(await busquedaInfo(bsq));
    setLoading(false);
  }

  useEffect(() => {
    fetchDataAsync(dataInfo);
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
