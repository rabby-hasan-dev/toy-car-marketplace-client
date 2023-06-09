import { useEffect, useState } from "react";


const ShopCategory = () => {
    const [toyDatas, setToyDatas] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/ShopCategory`)
            .then(res => res.json())
            .then(data => {
                setToyDatas(data)
            })
    }, [])

    return (
        <div>
            <h2 className="text-4xl text-center">Shop Category</h2>
            <div className="tabs tabs-boxed  flex justify-center">
                <button className="tab">Sports car </button>
                <button className="tab tab-active">Police Car</button>
                <button className="tab">Truck</button>
            </div>
            <div>
                {
                    toyDatas.map(toyData => <p>{toyData.name}</p>)
                }
            </div>
        </div>
    );
};

export default ShopCategory;