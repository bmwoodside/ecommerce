import { useState } from "react"
import { useParams } from "react-router-dom";

const Item = (props) => {

    const [oneItem, setOneItem] = useState();
    let { _id } = useParams();

    const GetOneItemInfoByIndex = () => {
        fetch(`https://www.dnd5eapi.co/api/equipment/${_id}`)
            .then(res => {
                // console.log("oneItem res", res);
                return res.json();
            })
            .then(data => {
                // console.log("oneItem data", data);
                setOneItem(data);
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="item-container">
            
            {/* Define conditional rendering of item info here:
            obj[name] ? h1 obj[name] : Oops missing... (404 page)
            obj[Other_items_in_order_of_render_priority] ? obj[info] : null */}

            <h1 className="item-name">Item Placeholder</h1>

            <button className="rounded-full bg-indigo-400" onClick={GetOneItemInfoByIndex}>fetch data</button>

        {
        oneItem
        ? (
            <>
                {/* placeholder weapon */}
                <h1>{oneItem.name}</h1>
                <h1>{oneItem.damage.damage_dice}</h1>
                <h1>{oneItem.damage.damage_type.index}</h1>
                <h1>{oneItem.range.normal === 5 ? "melee" : oneItem.range.normal}</h1>
            </>
            )

        :null
        }



        </div>
    )
}

export default Item;