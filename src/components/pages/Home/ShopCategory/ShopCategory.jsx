import { useEffect, useState } from "react";
import ToyCarCard from "./ToyCarCard";


const ShopCategory = () => {
    const [toyDatas, setToyDatas] = useState([]);
    const [activeTab, setActiveTab] = useState('default');


    useEffect(() => {
        fetch(`https://toy-car-server-rabby65301-gmailcom.vercel.app/ShopCategory/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToyDatas(data)
            })
    }, [activeTab])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="my-8">
            <h2 className="text-4xl text-center mb-2">Shop Category</h2>
            <div className="tabs tabs-boxed  flex justify-center">
                <button onClick={() => handleTabClick('Sports Car')} className="tab hover:tab-active ">Sports car </button>
                <button onClick={() => handleTabClick('Police Car')} className="tab hover:tab-active">Police Car</button>
                <button onClick={() => handleTabClick('Truck')} className="tab hover:tab-active">Truck</button>
            </div>
            <div className="grid lg:grid-cols-3 gap-4 mt-4">
                {
                    toyDatas.map(toyData => <ToyCarCard
                        key={toyData._id}
                        toyData={toyData}
                    ></ToyCarCard>)
                }
            </div>
        </div>
    );
};

export default ShopCategory;