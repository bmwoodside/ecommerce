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

    // placeholder data blob for the render section (reference material)
    // {
    //     oneItem
    //     ? (
    //         <>
    //             {/* placeholder weapon */}
    //             <h1>{oneItem.name}</h1>
    //             <h1>{oneItem.damage.damage_dice}</h1>
    //             <h1>{oneItem.damage.damage_type.index}</h1>
    //             <h1>{oneItem.range.normal === 5 ? "melee" : oneItem.range.normal}</h1>
    //         </>
    //         )

    //     :null
    //     }

    return (
        <div className="item-container">

            <h1 className="item-name">Item Placeholder - button (fetch) for testing</h1>
            <button className="rounded-full bg-indigo-400" onClick={GetOneItemInfoByIndex}>fetch data</button>

            {
            oneItem
            ? (
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">

                    {/* Product details */}
                    <div className="lg:max-w-lg lg:self-end">

                        <div className="mt-4">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{oneItem.name}</h1>
                        </div>

                        <section aria-labelledby="information-heading" className="mt-4">

                            <div className="flex items-center">
                                <p className="text-lg text-gray-900 sm:text-xl">{oneItem.cost.quantity} {oneItem.cost.unit}</p>
                            </div>

                            <div className="mt-4 space-y-6">
                                {/* this needs conditional rendering for armor... */}
                                <p className="text-base text-gray-500">{oneItem.damage.damage_dice} {oneItem.damage.damage_type.index}</p>
                                <p className="text-base text-gray-500">Range: {oneItem.range.normal === 5 ? "melee" : oneItem.range.normal}</p>
                            </div>

                            <div className="mt-6 flex items-center">
                                {/* <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" /> */}
                                <p className="ml-2 text-sm text-gray-500">In stock and ready to ship</p>
                            </div>
                        </section>
                    </div>

                    {/* Product image */}
                    <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                            {/* <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center" /> */}
                            <img src="" alt="placeholder" className="h-full w-full object-cover object-center" />
                            <h1>IMAGE PLACEHOLDER</h1>
                        </div>
                    </div>

                    {/* Product form */}
                    <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                            <form>
                                <div className="mt-10">
                                    <button
                                        type="submit"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </form>
                    </div>
                </div>
                )

            : null
            }

        </div>
    )
}

export default Item;