import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const CardShow = () => {
    const [card, setCard] = useState({});
    const { id } = useParams();
    const cards = useLoaderData();
    useEffect(() => {
        const findCard = cards?.find((card) => card.id == id);
    
        setCard(findCard);
      }, [id, cards]);
    return (
        <div>
            <Card card={card}></Card>
        </div>
    );
};

export default CardShow;