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
import { useState } from "react";

const relation = {
  1: imageOne,
  2: imageTwo,
  3: imageThree,
};

export default function PendingOffers() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [infoModal, setInfoModal] = useState({});

  return (
    <>
      <div className="gap-8 grid grid-cols-2 sm:grid-cols-4">
        {dataOffers.map((data) => (
          <Card
            className="py-4"
            key={data.id}
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
                {data.titulo}
              </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2" id="img-offer">
              <Image
                isZoomed
                alt={data.titulo}
                className="object-cover rounded-xl"
                src={relation[data.imagen]}
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
                {infoModal.titulo}
              </ModalHeader>
              <ModalBody>
                <h3>{infoModal.ofertante}</h3>
                <p>{infoModal.descripcion}</p>
                <div id="img-offer">
                  <Image
                    alt={infoModal.titulo}
                    className="object-cover rounded-xl"
                    src={relation[infoModal.imagen]}
                    width={300}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Rechazar
                </Button>
                <Button
                  color="success"
                  onPress={onClose}
                  style={{ color: "#ffffff", fontWeight: "bold" }}
                >
                  Aceptar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
