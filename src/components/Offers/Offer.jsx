import "./OffersComponent.css";

import imageOne from "../../assets/offersImages/iconOne.webp";
import imageTwo from "../../assets/offersImages/iconTwo.png";
import imageThree from "../../assets/offersImages/iconThree.png";

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

const relation = {
  1: imageOne,
  2: imageTwo,
  3: imageThree,
};

export default function Offer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
        {dataOffers.map((data) => (
          <Card className="py-4" key={data.id} isPressable onPress={onOpen}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">
                Oferta: {data.ofertante}
              </p>
              <h4 className="font-bold text-large" id="title-cards-offer">
                {data.titulo}
              </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                isBlurred
                isZoomed
                alt={data.titulo}
                className="object-cover rounded-xl"
                src={relation[data.imagen]}
                width={300}
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
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
