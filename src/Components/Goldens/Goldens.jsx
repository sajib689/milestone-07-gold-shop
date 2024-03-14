import { useEffect } from "react";
import { useState } from "react";
import GoldCard from "../GoldCard/GoldCard";


const Goldens = ({handleLoadGold}) => {
    const [golds, setGolds] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setGolds(data))

    },[])
    console.log(golds)
    return (
        <div className="grid grid-cols md:grid-cols-3 gap-5">
            {
              golds.map(gold => <GoldCard key={gold.id} handleLoadGold={handleLoadGold} gold={gold}></GoldCard>)  
            }
        </div>
    );
};

export default Goldens;