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
        <div className="items-component-container bg-white">
            <div className="mx-auto max-w-7x1 overflow-hidden sm:px-6 lg:px-8 border-solid border-4 border-red-600">
                <h2 className="sr-only">Items List</h2>
                {/* <h1>placeholder1</h1> */}

                <div className="-mx-px grid grid-cols-2 border-1 border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4 items-list-container">
                    {/* <h1>placeholder2</h1> */}

                    {tempItemsArr.map((oneItem, i) => 
                        <div key={i} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
                            {/* <h1>placeholder3</h1> */}

                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                                <img
                                    src="placeholder"
                                    alt="placeholder"
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>

                            <div className="pb-4 pt-10 text-center flex flex-1 flex-col space-y-2 p-4">
                                <h3 className="text-sm font-medium text-gray-900">
                                    <Link to={`/items/${oneItem.name}`}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {oneItem.name}
                                    </Link>
                                </h3>

                                {oneItem.equipment_category.index == "weapon"
                                    ? (<div className="weapon-info">
                                        <p className="text-sm text-gray-500">Damage: {oneItem.damage.damage_dice} {oneItem.damage.damage_type.index}</p>
                                        <p className="text-sm text-gray-500">Range: {oneItem.range.normal === 5 ? "Melee" : oneItem.range.normal}</p>

                                        {/* See how my styling is different than the other button below?? -- I'm a placeholder button so you don't forget -- remove me */}
                                        <button type="button" className="rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            Add To Cart
                                        </button>
                                        {/* Remove the button element above this line (after fixing styles) -- don't forget! */}

                                    </div>)
                                : oneItem.equipment_category.index == "armor"
                                    ? (<div className="armor-info">
                                        <p className="text-sm text-gray-500">AC: {oneItem.armor_class.base}</p>
                                        <p className="text-sm text-gray-500">Armor Type: {oneItem.armor_category}</p>
                                        <p className="text-sm text-gray-500">+Dex Bonus: {oneItem.armor_class.dex_bonus == true ? "Yes" : "No"}</p>
                                    </div>)
                                    : (<em>Error</em>)
                                }

                                <div className="flex flex-1 flex-col justify-end">
                                    {/* <p className="text-sm italic text-gray-500">{product.options}</p> */}
                                    <p className="text-sm italic text-gray-500">placeholder options</p>
                                    <p className="text-base font-medium test-gray-900">{oneItem.cost.quantity} {oneItem.cost.unit}</p>

                                    {/* styling is jacked up - this is full div width but above is only partial... pick a size */}
                                    <button type="button" className="rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Items;