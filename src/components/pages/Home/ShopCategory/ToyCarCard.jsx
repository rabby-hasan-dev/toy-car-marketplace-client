

const ToyCarCard = ({ toyData }) => {
    const { _id, name, picture, price, rating } = toyData;
    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Toy photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price:{price}</p>
                    <p>Rating:{rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-info">View Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToyCarCard;