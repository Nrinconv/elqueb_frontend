// Filename - components/Footer.js

import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

import { Image } from "@nextui-org/react";

import img1 from "../../assets/partners/findeter_blanco.png";
import img2 from "../../assets/partners/unal_blancopng.png";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "#fff",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Prototipo final regionathón
      </h1>
      <p
        style={{
          color: "#C7D31E",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        La hackathon para apoyar la economia popular
      </p>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>Secciones</Heading>
            <FooterLink href="home">Inicio</FooterLink>
            <FooterLink href="home">Ofertas</FooterLink>
            <FooterLink href="about-us">Sobre nosotros</FooterLink>
            <FooterLink href="home">Novedades</FooterLink>
          </Column>
          <Column>
            <Heading>Equipo</Heading>
            <FooterLink>Nicolás David Galindo Carvajal</FooterLink>
            <FooterLink>Julián David Rincón Orjuela</FooterLink>
            <FooterLink>Nicolás Mauricio Rincón Vija</FooterLink>
          </Column>
          <Column>
            <Heading>Apoya</Heading>
            <FooterLink>
              <Image width={150} alt="NextUI hero Image" src={img1} />

              <Image
                width={150}
                alt="NextUI hero Image"
                src={img2}
                style={{ filter: "invert(100%)" }}
              />
            </FooterLink>
          </Column>
        </Row>
        <p
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: "8px",
          }}
        >
          La información y recursos de Findeter utilizados en este proyecto son
          exclusivamente para el diseño del prototipo. Queda estrictamente
          prohibido su uso para plagio u otros fines indebidos. Todos los
          derechos de propiedad intelectual de las imágenes pertenecen a
          Findeter.
        </p>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
