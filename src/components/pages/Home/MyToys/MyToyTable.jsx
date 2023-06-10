import { Link } from "react-router-dom";

const MyToyTable = ({ toyCar }) => {
    const { _id, name, sellerName, price, quantity, subCategory } = toyCar;

    return (

        <tr>
            <td>  {name} </td>
            <td>{sellerName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/singleMyToys/${_id}`}> <button className="btn btn-ghost btn-xs">View</button></Link>

            </th>
        </tr>

    )
};

export default MyToyTable;