
import "./Result.css";

// Création de mon composant Result avec les props en paramètre
function Result(props) {

    // On return un div une span et un balise a
    return (
        <div className="render-container">
            {/* L'id du lien */}
            <span>{props.id + 1} - </span>
            {/* Valeur du lien */}
            <a href={props.item} target="_blank">{props.item}</a>
        </div>
    );
}

// Export du composant Result
export default Result;
