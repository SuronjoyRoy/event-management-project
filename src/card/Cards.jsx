import SingleCard from "./SingleCard";

const Cards = ({data}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
            {
                data?.map(card => <SingleCard key={card.id} card={card}></SingleCard>)
            }
        </div>
    );
};

export default Cards;