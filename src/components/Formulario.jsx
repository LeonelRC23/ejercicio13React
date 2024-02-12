import React from 'react';
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
} from 'react-bootstrap';
import { ARRAY_PAISES } from '../constantes';

const Formulario = ({ ubicacion, pais, obtenerDatos }) => {
  return (
    <div className='py-5'>
      <Form onSubmit={(event) => obtenerDatos(event)}>
        <FormGroup>
          <FormLabel>Ingrese una ubicacion</FormLabel>
          <FormControl type='text' defaultValue={ubicacion} />
        </FormGroup>
        <FormGroup>
          <FormLabel>Ingrese el país</FormLabel>
          <FormSelect defaultValue={pais}>
            {ARRAY_PAISES.map((pais) => (
              <option value={pais} key={pais}>
                {pais}
              </option>
            ))}
          </FormSelect>
        </FormGroup>
        <Button type='submit'>Consultar</Button>
      </Form>
    </div>
  );
};

export default Formulario;
