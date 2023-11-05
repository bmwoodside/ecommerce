import { useState } from "react"

const Item = (props) => {

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

    // had to move this out of the return block so that i could properly comment it out without breaking the app
    // easy quick-reference for the render from the data element/query:
    // <hr />
    // {
    //     itemsList
    //     ? (
    //         <>
    //         {/* placeholder weapon */}
    //         <h1>{itemsList[0].index}</h1>
    //         <h1>{itemsList[0].damage.damage_dice}</h1>
    //         <h1>{itemsList[0].damage.damage_type.index}</h1>
    //         <h1>{itemsList[0].range.normal === 5 ? "melee" : itemsList[0].range.normal}</h1>

    //         <hr />

    //         {/* placeholder armor */}
    //         <h1>{itemsList[39].index}</h1>
    //         <h1>{itemsList[39].armor_class.base}</h1>
    //         <h1>{itemsList[39].armor_category.name}</h1>
    //         <h1>{itemsList[39].armor_class.dex_bonus === true ? "yes" : "no"}</h1>
    //         </>
    //     ) : null
    // }


    return (
        <div className="item-container">
            
            {/* Define conditional rendering of item info here:
            obj[name] ? h1 obj[name] : Oops missing... (404 page)
            obj[Other_items_in_order_of_render_priority] ? obj[info] : null (figure out how to ternary without the "else" condition) */}

            <h1 className="item-name">Item Placeholder</h1>

            {/* this whole page turned into a test-page to make the "Items" component render */}

            <button className="rounded-full bg-indigo-400" onClick={GetAllEquipmentFromGraphQL}>fetch data</button>

            <hr />
            {
                itemsList
                ? (
                    itemsList.map((oneItem, i) => (
                        oneItem.index
                        ? (
                            <div>
                                <h1 key={i}>{oneItem.index}</h1>

                                {/* this doesn't work obv - has nested children for the right info - adding the correct info breaks this shit for some reason */}
                                <h1>{oneItem.damage_type}</h1>
                                
                                <h1>{oneItem.equipment_category.index}</h1>
                            </div>
                        ) : null
                    ))
                ) : null
            }

        </div>
    )
}

export default Item;