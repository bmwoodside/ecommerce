import { useState } from "react";
import { Link } from "react-router-dom";


const Items = (props) => {
    // would be nice if i could figure out how to populate the images as well. stretch goal - **Future Feature**

    const [itemsList, setItemsList] = useState();
    
    const GetAllEquipmentFromGraphQL = () => {
        const url = 'https://www.dnd5eapi.co/graphql';
    
        const query = `
            query Equipments {
                equipments {
                    ... on Weapon {
                        index
                        name
                        desc
                        weight
                        weapon_range
                        special
                        cost {
                            quantity
                            unit
                        }
                        equipment_category {
                            index
                            name
                        }
                        damage {
                            damage_dice
                            damage_type {
                                index
                                name
                                desc
                            }
                        }
                        range {
                            normal
                            long
                        }
                    }
                    ... on Armor {
                        index
                        name
                        desc
                        weight
                        str_minimum
                        stealth_disadvantage
                        cost {
                            quantity
                            unit
                        }
                        equipment_category {
                            index
                            name
                        }
                        armor_class {
                            base
                            dex_bonus
                            max_bonus
                        }
                        armor_category {
                            index
                            name
                        }
                    }
                }
            }
            
        `;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'data': '{"query":"query { __typename }"}'
            },
            body: JSON.stringify({query})
        };
    
        const request = new Request(url, options);

        fetch(request)
            .then(res => {
                console.log("res", res);
                return res.json();
            })
            .then(data => {
                console.log("data", data);
                console.log("equip", data.data.equipments);
                setItemsList(data.data.equipments);
            })
            .catch(err => console.log(err));
    };

    const addToCart = (e) => {
        e.preventDefault();

        //add something to the cart

        //delete me:
        console.log("added something to the cart!");
    }

    return (
        <div className="items-component-container bg-white">

            {/* replace me with a useEffect/useMemo or something. */}
            <button onClick={GetAllEquipmentFromGraphQL}>fetch data</button>

            <div className="mx-auto max-w-7x1 overflow-hidden sm:px-6 lg:px-8 border-solid border-4 border-red-600">
                <h2 className="sr-only">Items List</h2>

                <div className="-mx-px grid grid-cols-2 border-1 border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4 items-list-container">
                    {
                        itemsList
                        ? (
                            itemsList.map((oneItem, i) => (
                                oneItem.index
                                ? (
                                    <div key={i} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
            
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
                                                    {/* the commented line below about damage_dice is erroring for what feels like an issue with 
                                                    the equipment_category condition checking - seems to not differentiate correctly. */}
                                                    {/* <p className="text-sm text-gray-500">Damage: {oneItem.damage.damage_dice} {oneItem.damage.damage_type.index}</p> */}
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
                                                    <p className="text-sm text-gray-500">Armor Type: {oneItem.armor_category.name}</p>
                                                    <p className="text-sm text-gray-500">+Dex Bonus: {oneItem.armor_class.dex_bonus == true ? "Yes" : "No"}</p>
                                                </div>)
                                                : (<em>Error</em>)
                                            }
            
                                            <div className="flex flex-1 flex-col justify-end">
                                                <p className="text-sm italic text-gray-500">placeholder options</p>
                                                <p className="text-base font-medium test-gray-900">{oneItem.cost.quantity} {oneItem.cost.unit}</p>
            
                                                {/* styling is jacked up - this is full div width but above is only partial... pick a size */}
                                                <button type="button" className="rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : null
                            ))
                        ) : "Click button to load data.. (change me with the useEffect addition to 'loading..')" 
                    }
                </div>
            </div>
        </div>
    )
}

export default Items;