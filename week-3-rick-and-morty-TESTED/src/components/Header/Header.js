import "./header.css";
export default function Header(props) {
  return <div className="Header">
    <h1>Rick and Morty</h1>
    {props.children}
  </div>;
}
