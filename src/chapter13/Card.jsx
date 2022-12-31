import "./Card.css";

function Card(props) {
  const { title, backgroundColor, children } = props;

  return (
    <div
      className="CardStyle"
      style={{
        backgroundColor: backgroundColor || "white",
      }}
    >
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

export default Card;
