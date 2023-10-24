import { Link } from "react-router-dom";


const Items = (props) => {
    // would be nice if i could figure out how to populate the images as well. stretch goal - **Future Feature**

    // this will need to be a getAll useEffect/useMemo/something to populate initial state (pending backend creation)
    let tempItemsArr = [
        {"desc":[],"special":[],"index":"club1","name":"Club1","equipment_category":{"index":"weapon","name":"Weapon","url":"/api/equipment-categories/weapon"},"weapon_category":"Simple","weapon_range":"Melee","category_range":"Simple Melee","cost":{"quantity":1,"unit":"sp"},"damage":{"damage_dice":"1d4","damage_type":{"index":"bludgeoning","name":"Bludgeoning","url":"/api/damage-types/bludgeoning"}},"range":{"normal":5},"weight":2,"properties":[{"index":"light","name":"Light","url":"/api/weapon-properties/light"},{"index":"monk","name":"Monk","url":"/api/weapon-properties/monk"}],"url":"/api/equipment/club","contents":[]},

        {"desc":[],"special":[],"index":"club2","name":"Club2","equipment_category":{"index":"weapon","name":"Weapon","url":"/api/equipment-categories/weapon"},"weapon_category":"Simple","weapon_range":"Melee","category_range":"Simple Melee","cost":{"quantity":1,"unit":"sp"},"damage":{"damage_dice":"1d4","damage_type":{"index":"bludgeoning","name":"Bludgeoning","url":"/api/damage-types/bludgeoning"}},"range":{"normal":5},"weight":2,"properties":[{"index":"light","name":"Light","url":"/api/weapon-properties/light"},{"index":"monk","name":"Monk","url":"/api/weapon-properties/monk"}],"url":"/api/equipment/club","contents":[]},

        {"desc":[],"special":[],"index":"padded-armor","name":"Padded Armor","equipment_category":{"index":"armor","name":"Armor","url":"/api/equipment-categories/armor"},"armor_category":"Light","armor_class":{"base":11,"dex_bonus":true},"str_minimum":0,"stealth_disadvantage":true,"weight":8,"cost":{"quantity":5,"unit":"gp"},"url":"/api/equipment/padded-armor","contents":[],"properties":[]},

    ]

    const addToCart = (e) => {
        e.preventDefault();

        //add something to the cart

        //delete me:
        console.log("added something to the cart!");
    }

    // {"desc":[],"special":[],"index":"club1","name":"Club1","equipment_category":{"index":"weapon","name":"Weapon","url":"/api/equipment-categories/weapon"},"weapon_category":"Simple","weapon_range":"Melee","category_range":"Simple Melee","cost":{"quantity":1,"unit":"sp"},"damage":{"damage_dice":"1d4","damage_type":{"index":"bludgeoning","name":"Bludgeoning","url":"/api/damage-types/bludgeoning"}},"range":{"normal":5},"weight":2,"properties":[{"index":"light","name":"Light","url":"/api/weapon-properties/light"},{"index":"monk","name":"Monk","url":"/api/weapon-properties/monk"}],"url":"/api/equipment/club","contents":[]}

    // {"desc":[],"special":[],"index":"padded-armor","name":"Padded Armor","equipment_category":{"index":"armor","name":"Armor","url":"/api/equipment-categories/armor"},"armor_category":"Light","armor_class":{"base":11,"dex_bonus":true},"str_minimum":0,"stealth_disadvantage":true,"weight":8,"cost":{"quantity":5,"unit":"gp"},"url":"/api/equipment/padded-armor","contents":[],"properties":[]}



    return (
        <div className="items-list-container">

            {/* Navbar somewhere - basing this off of "newegg" initially */}

            {/* filters somewhere */}

            {/* default view will be "featured" - just make up some stuff about what items we'll use here - maybe some starter items or something */}

            {tempItemsArr.map((oneItem, i) =>
                <div key={i} className="item-card">
                    <h3><Link to={`/items/${oneItem.name}`}>{oneItem.name}</Link></h3>
                    {oneItem.equipment_category.index == "weapon"
                        ? (<div className="weapon-info">
                            <h4>Damage: {oneItem.damage.damage_dice} {oneItem.damage.damage_type.index}</h4>
                            <h4>Range: {oneItem.range.normal}</h4>
                        </div> )
                    : oneItem.equipment_category.index == "armor" 
                        ? (<div className="armor-info">
                            <h4>AC: {oneItem.armor_class.base}</h4>
                            <h4>Armor Type: {oneItem.armor_category}</h4>
                            <h4>+Dex Bonus: {oneItem.armor_class.dex_bonus == true ? "Yes" : "No"}</h4>
                        </div>) 
                        : (<em>Error</em>)
                    }
                    <h2 className="item-price">{`${oneItem.cost.quantity} ${oneItem.cost.unit}`}</h2>
                    <Link to={`/items/${oneItem.name}`}><button className="view-details-btn btn">VIEW DETAILS</button></Link>
                    <button className="add-cart-btn btn" onClick={addToCart} disabled={true}>ADD TO CART</button>
                </div>
            )}


        </div>
    )
}

export default Items;