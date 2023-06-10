import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";



const AddToys = () => {

    const { users } = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const sellerName = users?.displayName;
        const email = users?.email;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const addToy = {
            name,
            sellerName,
            photo,
            email,
            subCategory,
            price,
            rating,
            quantity,
            description

        };
        console.log(addToy)
        fetch('http://localhost:3000/allToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'Your Toy Add Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
               



            })

    }
    return (
        <div className="  bg-[#F3F3F3]">
            <h2 className="text-center text-3xl">Add A Toy</h2>
            <div className="card-body">
                <form onSubmit={handleAddToy} >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>

                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Seller Name</span>
                            </label>

                            <input type="text" defaultValue={users?.displayName} name="sellerName" placeholder=" seller Name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input name="email" defaultValue={users?.email} type="email" placeholder="Your Email" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>

                            <input type="text" name="subCategory" placeholder="Sub-category" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>

                            <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>

                            <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>

                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>

                            <textarea name="description" placeholder="Description" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                        </div>

                    </div>

                    <div className="form-control mt-6">
                        <input className="btn btn-info btn-block" type="submit" value="Add" />
                    </div>
                </form>

            </div>

        </div>
    );
};


export default AddToys;