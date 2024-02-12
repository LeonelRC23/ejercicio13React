import React from 'react';
import { Card, CardBody, CardImg, CardText } from 'react-bootstrap';

const Clima = ({ datos }) => {
  console.log(datos);
  return (
    <div className='d-flex justify-content-center'>
      <Card className='w-25'>
        <CardImg
          src={`https://openweathermap.org/img/wn/${datos.weather[0].icon}@4x.png`}
        />
        <CardBody>
          <CardText>
            Clima: {datos.weather[0].main}
            <br />
            Temperatura: {datos.main.temp}
            <br />
            Maxima: {datos.main.temp_max}
            <br />
            Minima: {datos.main.temp_min}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Clima;
