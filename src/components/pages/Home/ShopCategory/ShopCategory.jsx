import { useEffect, useState } from "react";


const ShopCategory = () => {
    const [toyDatas, setToyDatas] = useState([]);
    const [activeTab, setActiveTab] = useState();
    console.log(activeTab);

    useEffect(() => {
        fetch(`http://localhost:3000/ShopCategory`)
            .then(res => res.json())
            .then(data => {
                setToyDatas(data)
            })
    }, [])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };

    return (
        <div>
            <h2 className="text-4xl text-center">Shop Category</h2>
            <div className="tabs tabs-boxed  flex justify-center">
                <button onClick={()=> handleTabClick('Sports Car')} className="tab hover:tab-active ">Sports car </button>
                <button onClick={ ()=> handleTabClick('Police Car')} className="tab hover:tab-active">Police Car</button>
                <button onClick={()=> handleTabClick('Truck')} className="tab hover:tab-active">Truck</button>
            </div>
            <div>
                {
                    toyDatas.map(toyData => <p
                    key={toyData._id}
                    >{toyData.name}</p>)
                }
            </div>
        </div>
    );
};

export default ShopCategory;