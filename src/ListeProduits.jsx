import './ListeProduits.scss';
import Produit from './Produit';
import lesProduits from './data/produits.json'

export default function ListeProduits(){
    console.log('La variable lesProduits : ', lesProduits);
    //Exemple avec la fonction map()
    //let notes = [59.56, 78.23, 85.25, 35.99];
    //Pour transformer ce tableau dans un tableau qui contient les notes arrondies à un espace décimale
    //let notesArrondies = notes.map(uneNote => return uneNote.toFixed(1)-0);
    //lesProduits.map(produit => <Produit nom={produit.nom} prix={produit.prix} pid={produit.id/>)


    //Méthode 1 (prog impérative, avec une boucle for)
    let composantsProduits = [];
    //Parcourir le tableau lesProduits et générer un composant Produit pour chaque élément
    for (let i = 0; i < lesProduits.length; i++){
        composantsProduits.push(<Produit nom={lesProduits[i].nom} prix={lesProduits[i].prix} pid={lesProduits[i].id}/>);
    }


    return(
        <section className="produits">
            <h2>Nos produits</h2>
            <div className="ListeProduits">
                {composantsProduits}
            </div>
        </section>
    )
}