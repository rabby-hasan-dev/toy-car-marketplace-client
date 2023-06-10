import { useLoaderData } from "react-router-dom";


const SingleToyDetails = () => {
    const singleToy = useLoaderData();
    const { _id, name, picture, price, quantity, rating, description
    } = singleToy;

    return (
        <>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p> Quantity:{quantity}</p>
                    <p> Rating:{rating}</p>
                    <p> Description:{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SingleToyDetails;