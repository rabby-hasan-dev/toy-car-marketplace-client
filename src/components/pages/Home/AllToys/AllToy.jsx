import { useLoaderData } from "react-router-dom";
import AllToyTable from "./AllToyTable";


const AllToy = () => {
    const allToys = useLoaderData();
    return (
        <div className="my-4">
            <h2 className="text-4xl text-bold text-center">All toys</h2>
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
                            allToys.map(allToy => <AllToyTable
                                key={allToy._id}
                                allToy={allToy}
                            ></AllToyTable>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllToy;