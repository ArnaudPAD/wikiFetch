import { useEffect, useState } from "react";
import Result from "../Result/Result";
import "./Search.css";

function Search() {
    const [recherche, setRecherche] = useState("");
    const [rechercheList, setRechercheList] = useState([]);
    const [nomList, setNomList] = useState([])

    // Fonction qui modifie la variable d'état recherche en fonction de la valeur rentrée dans l'input
    const handleChange = (e) => {
        setRecherche(e.target.value);
    };
    // Fonction qui récupère les données de l'API wikipedia avec le mot clef stocké dans la variable d'état recherche
    const actu = async () => {
        // Colis/ Information de la réponse (status,url,...)
        let response = await fetch(
            `https://fr.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${recherche}&format=json`
        );

        // On récupère les données de l'api qui vont nous servir à faire l'affichage
        let donnees = await response.json();

        // Modifier ma variable d'état rechercheListe avec les données qu'on reçoit depuis l'API
        setRechercheList(donnees[3]);


    };

    useEffect(() => { }, [recherche]);

    // Création fonction Affichage des données reçu par l'API wikipedia
    const renderMyList = () => {
        // Verification si il y'a une valeur dans le tableau
        if (rechercheList.length > 0) {
            // Pour chaque item à l'intérieur du tableau rechercheList on crée:
            return rechercheList.map((item, key) => {
                // Un composant Result qui prend en props la key et l'item
                return <><Result id={key} item={item} /></>
            });
        } else {
            // Sinon c'est que rechercheList n'est pas un tableau donc on affiche une phrase par défaut
            return <h3>Aucun résultat trouvé</h3>;
        }
    };

    return (
        <>
            <h1> Mes recherches Wikipedia</h1>
            {/* Quand je modifie la valeur de l'input je déclenche la fonction handleChange */}
            <input onChange={handleChange} placeholder="Votre recherche" />
            {/* Quand je clique sur le bouton je déclenche la fonction actu */}
            <button onClick={actu}>wikiSearch</button>
            {/* Appel fonction Affichage de ma liste avec les données de l'api */}
            <div>{renderMyList()}</div>
        </>
    );
}

export default Search;
