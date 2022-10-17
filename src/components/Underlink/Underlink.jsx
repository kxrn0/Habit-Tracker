import { Link } from "react-router-dom";

import "./underlink.css";

export default function Underlink({ path, icon, alt }) {
    return (
        <span className="underlink">
            <Link to={path}>
                <img src={icon} alt={alt} />
            </Link>
            <span></span>
        </span>
    );
}
