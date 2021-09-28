import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Agregar = (props) => {

    const {cuadrados , setCuadrados} = props;

    const [cuadrado, setCuadrado] = useState({
        color:'',
        alturaAncho:0
    });

    const cambioEstados = (e) => {

        setCuadrado({...cuadrado, [e.target.name]:e.target.value});
        console.log("Formulario" + JSON.stringify(cuadrado));
    }
    const AgregarCuadrado = (e) => {
        e.preventDefault();
        setCuadrados([...cuadrados, cuadrado]);
        setCuadrado({
            color:'',
            alturaAncho:0
        });
        console.log("cuadrados" + JSON.stringify(cuadrados));
    }

    return(
        <Card>
        <Card.Body>
            <Card.Title>Agregar Cuadro</Card.Title>
            <Card.Text>

            <Form onSubmit={AgregarCuadrado}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Color:</Form.Label>
                    <Form.Control type="text" placeholder="ingresa Color en ingles" name="color" value={cuadrado.color} onChange={cambioEstados} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Altura y Ancho:</Form.Label>
                    <Form.Control type="text" placeholder="ingresa número" name="alturaAncho" value={cuadrado.alturaAncho} onChange={cambioEstados} />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            </Card.Text>
        </Card.Body>
        </Card>
    );
}

export default Agregar;