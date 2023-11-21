import React from 'react';
import { Formik, Field, Form } from 'formik';
import './AddOffer.css';

const AddOffer = () => {
  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <div className="offer-container">
      <h1>CREA UNA OFERTA</h1>
      <Formik
  initialValues={{ title: '', description: '', price: '', region: '', categoria: '' }}
  onSubmit={handleSubmit}
>
  <Form className="offer-form">
    <fieldset>
      <label htmlFor="title">NOMBRE: </label>
      <Field as="input" type="text" id="title" name="title" />
    </fieldset>

    <fieldset>
      <label htmlFor="description">DESCRIPCIÓN:</label>
      <Field as="textarea" id="description" name="description" />
    </fieldset>
    <fieldset>
  <label htmlFor="region">REGIÓN:</label>
  <Field as="select" id="region" name="region">
  <option value="">Select...</option>
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
    <option value="">Select...</option>
    <option value="north">North</option>
    <option value="south">South</option>
    <option value="east">East</option>
    <option value="west">West</option>
    {/* Add more options as needed */}
  </Field>
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