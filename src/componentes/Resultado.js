import React from "react";
import Mensaje from "./Mensaje";


const Resultado = ({cantidad, total, plazo}) => (
    <div className="u-full-width resultado">
        <h2>Resumen</h2>
        <p>La cantidad solicitada es: $ {cantidad}</p>
        <p>La cantidad a pagar en {plazo} Meses</p>
        <p>Su pago mensual es de: $ {(total / plazo).toFixed(2)}</p>
        <p>La cantidad total a pagar es: $ {(total).toFixed(2)}</p>
    </div>
);

export default Resultado