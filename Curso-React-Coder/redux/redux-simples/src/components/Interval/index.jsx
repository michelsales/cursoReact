import "./index.css";
import React from "react";
import Card from "../Card";

function Interval(props) {
  const { min, max } = props;

  return (
    <Card title="Intervalo de numeros" red>
      <div className="Interval">
        <span>
          <strong>Mínimo: </strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.onMinChanged(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo: </strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.onMaxChanged(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
}

export default Interval;