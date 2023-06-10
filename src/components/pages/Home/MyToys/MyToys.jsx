import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import MyToyTable from "./MyToyTable";
import Swal from "sweetalert2";


const MyToys = () => {
    const { users } = useContext(AuthContext);
    const [toyCars, setToycars] = useState([]);

    const url = `https://toy-car-server-rabby65301-gmailcom.vercel.app/allToy?email=${users?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToycars(data))
    }, [])

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-car-server-rabby65301-gmailcom.vercel.app/allToy/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {


                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            console.log(data);
                        }
                        const remaining = toyCars.filter(toyCar => toyCar._id !== id);
                        setToycars(remaining);
                    })

            }
        })


    }

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
                                    handleDelete={handleDelete}
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