
const SingleCard = ({ card }) => {
    const { cover, title, time, text } = card;
    return (
        
        <div className="card card-compact w-100 lg:w-80  mb-5 bg-base-100 shadow-xl">
            <figure><img src={cover} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{time}</p>
                <p>{text}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;