import './Produit.scss';
export default function Produit(props){
    return(
        <article className="Produit">
            <img src={"image-produits/" + props.pid + ".webp"} alt={props.nom} />
            <div className="titre">{props.nom}</div>
            <div className="prix">{props.prix}</div>
            <button>Ajouter au panier</button>
        </article>
    )
    
}