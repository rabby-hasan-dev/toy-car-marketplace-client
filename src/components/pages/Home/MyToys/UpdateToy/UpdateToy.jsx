
import { useContext } from 'react';
import { AuthContext } from '../../../../../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const { users } = useContext(AuthContext);
    const updateToys = useLoaderData();
    const { _id, price, quantity, description } = updateToys;

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;  
        const price = form.price.value;  
        const quantity = form.quantity.value;
        const description = form.description.value;

        // const dueAmount = form.dueAmount.value;
        console.log( price, quantity, description);
        const UpdateToy = {
            price,
            quantity,
            description

        };

        fetch(`https://toy-car-server-rabby65301-gmailcom.vercel.app/allToy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'Your Toy Car Update Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                console.log(data)



            })

    }
    return (
        <div className="  bg-[#F3F3F3]">
            <h2 className="text-center text-3xl">Update A Toy</h2>
            <div className="card-body">
                <form onSubmit={handleUpdateToy} >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>

                            <input type="text" defaultValue={price} name="price" placeholder="Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>

                            <input type="text" defaultValue={quantity} name="quantity" placeholder="Available quantity" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>

                            <textarea defaultValue={description} name="description" placeholder="Description" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                        </div>

                    </div>

                    <div className="form-control mt-6">
                        <input className="btn btn-info btn-block" type="submit" value="Update" />
                    </div>
                </form>

            </div>

        </div>
    )
};

export default UpdateToy;