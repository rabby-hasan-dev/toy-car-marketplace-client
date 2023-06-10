import { Link } from "react-router-dom";


const AllToyTable = ({ allToy }) => {
    const { _id, name, email, photo, sellerName, price, quantity, rating, subCategory } = allToy;

    return (

        <tr>
            <td>
                {name}
            </td>
            <td>{sellerName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/singleToyDetails/${_id}`}> <button className="btn btn-ghost btn-xs">View</button></Link>

            </th>
        </tr>

    );
};

export default AllToyTable;