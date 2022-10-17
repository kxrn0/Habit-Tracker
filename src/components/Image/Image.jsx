import "./image.css";

export default function Image({ src, alt, left, right }) {
    return (
        <div className="image">
            <span
                className="background"
                style={{ backgroundImage: `url(${src})` }}
            ></span>
            <img src={src} alt={alt} />
            {left}
            {right}
        </div>
    );
}
