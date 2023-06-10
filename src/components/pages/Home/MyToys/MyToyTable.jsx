import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyToyTable = ({ toyCar, handleDelete }) => {
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
            <th>
              <Link to={`/updateToy/${_id}`}>  <button className="btn btn-ghost btn-xs mr-2"><FaEdit className=""></FaEdit> Edit </button></Link>

                <button onClick={()=> handleDelete(_id)} className="btn btn-ghost btn-xs"><span className="text-red-400">X</span></button>

            </th>
        </tr>

    )
};

export default MyToyTable;