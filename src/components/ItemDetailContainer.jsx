import { useParams } from "react-router";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { getItemData } from "../data/mockService";


function IteamDetailContainer() {
    const { itemID } = useParams();

    const [product, setProduct] = useState({});

    useEffect( () => {
        getItemData (itemID).then( response => setProduct (response) )
    }, [] );


return (
        <section>
            <h2>{product.title}</h2>
            <img src={product.img} alt={product.title} />
            <p>{product.description}</p>
            <h4> ${product.price}</h4>
            <ItemCount />
        </section>

    );
}

export default IteamDetailContainer;