import { Link } from "react-router-dom";


const ToyCarCard = ({ toyData }) => {
    const { _id, name, picture, price, rating } = toyData;
    const handleDetails=(id)=>{
        console.log(id)

    }
    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Toy photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price:{price}</p>
                    <p>Rating:{rating}</p>
                    <div className="card-actions justify-end">
                       <Link to={`/singleToy/${_id}`} > <button onClick={()=> handleDetails(_id)} className="btn btn-info">View Details</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToyCarCard;