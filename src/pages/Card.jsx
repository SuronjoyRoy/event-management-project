
const Card = ({card}) => {
    const {cover, title, time, text}=card
    return (
        <div className="mx-auto text-center">
            <img className="w-full" src={cover} alt="" />
            <h2 className="tex-3xl py-3">{title}</h2>
            <p>{time}</p>
            <p>{text}</p>
            
        </div>
    );
};

export default Card;