import "./card.css";

 function card({ titulo, valor, descripcion }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p className="card-valor">{valor}</p>
      <p className="card-descripcion">{descripcion}</p>
    </div>
  );
}

export default card;