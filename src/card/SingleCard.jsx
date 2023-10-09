import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {
    const { cover, title, time, text, id } = card;
    return (
        
        <div className="card card-compact w-100 lg:w-80  mb-5 bg-base-100 shadow-xl">
            <figure className="md:p-5 p-2"><img src={cover} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{time}</p>
                <p>{text}</p>
                <div className="card-actions justify-center">
                    <Link to={`/cards/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;