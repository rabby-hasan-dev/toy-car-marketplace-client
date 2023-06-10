import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import MyToyTable from "./MyToyTable";


const MyToys = () => {
    const { users } = useContext(AuthContext);
    const [toyCars, setToycars] = useState([]);

    const url = `http://localhost:3000/allToy?email=${users?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToycars(data))
    }, [])

    return (
        <div>
            <div className="my-4">
            <h2 className="text-4xl text-bold text-center">My Toys</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Toy Name
                            </th>
                            <th>
                                Seller Name
                            </th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                           toyCars.map(toyCar => <MyToyTable
                                key={toyCar._id}
                                toyCar={toyCar}
                            ></MyToyTable>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
        </div>
    );
};

export default MyToys;