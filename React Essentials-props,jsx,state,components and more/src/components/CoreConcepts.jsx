export default function Coreconcepts(props) {
  return (
    <li>
      <img src={props.image} alt="..." />
      <h3>{props.Title}</h3>
      <p>{props.Description}</p>
    </li>
  );
}
