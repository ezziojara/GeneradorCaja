import logo from './logo.svg';
import './App.css';
import Agregar from './views/Agregar';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Cuadrado from './component/Cuadrado';

function App() {

  const [cuadrados, setCuadrados] = useState([]);

  return (
    <Container>
      <Agregar cuadrados={cuadrados} setCuadrados={setCuadrados}/>
      <div className="contenedor">
      {
        cuadrados.length > 0 && cuadrados.map((box) => (
          <Cuadrado box={box}/>
      ))
      }
      </div>
    </Container>
  );
}

export default App;
