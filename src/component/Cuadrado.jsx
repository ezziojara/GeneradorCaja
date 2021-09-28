import React from 'react';

const Cuadrado = (props) => {

    const {box} = props

    return(
        <div className="cuadrado" style={{backgroundColor: box.color,
            height:box.alturaAncho + 'px',
            width:box.alturaAncho+ 'px'
        }}>

        </div>
    );
}

export default Cuadrado;