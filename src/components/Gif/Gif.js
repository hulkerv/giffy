import "./Gif.css"
import { Link } from "wouter";


const Gif = ({ url, id, title }) => (
  <div  className="Gif">
    <h4>{title}</h4>
    <img src={url} alt={title} />
    <Link to={`/gif/info/${id}`}>Info</Link>
  </div>
);

export default Gif