import React from "react";
import { Formik, Field, Form } from "formik";
import "./addOffer.css";

const AddOffer = () => {
  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  return (
    <div className="offer-container">
      <h1>CREA UNA OFERTA</h1>
      <Formik
        initialValues={{
          title: "",
          description: "",
          price: "",
          region: "",
          categoria: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className="offer-form">
          <fieldset>
            <label htmlFor="title">NOMBRE: </label>
            <Field as="input" type="text" id="title" name="title" />
          </fieldset>

          <fieldset>
            <label htmlFor="region">REGIÓN:</label>
            <Field as="select" id="general-form input" name="region">
              <option value="">Selecciona</option>
              <option value="amazonas">Andina</option>
              <option value="antioquia">Caribe</option>
              <option value="atlantico">Pacífico</option>
              <option value="bolivar">Orinoquía</option>
              <option value="boyaca">Amazonía</option>
              <option value="caldas">Insular</option>
            </Field>
          </fieldset>
          <fieldset>
            <label htmlFor="categoria">CATEGORIA:</label>
            <Field as="select" id="categoria" name="categoria">
              <option value="">Selecciona</option>
              <option value="alimentacion">Alimentacion</option>
              <option value="productos-personales">Productos Personales</option>
              <option value="ropa-calzado">Ropa y Calzado</option>
              <option value="productos-limpieza">Productos de Limpieza</option>
              <option value="cuidado-infantil">Cuidado Infantil</option>
              <option value="medicamentos">Medicamentos</option>
              <option value="tecnologia">Tecnologia</option>
              <option value="servicios-basicos">Servicios Basicos</option>
              <option value="transporte">Transporte</option>
              <option value="inmobiliario">Inmobiliario</option>
              <option value="otros">Otros</option>
              {/* Add more options as needed */}
            </Field>
          </fieldset>
          <fieldset>
            <label htmlFor="description">DESCRIPCIÓN:</label>
            <Field as="textarea" id="description" name="description" />
          </fieldset>

          <fieldset className="submit-fieldset">
            <button type="submit">Submit</button>
          </fieldset>
        </Form>
      </Formik>
    </div>
  );
};

export default AddOffer;
