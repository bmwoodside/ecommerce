


const Item = (props) => {



    return (
        <div className="item-container">
            
            {/* Define conditional rendering of item info here:
            obj[name] ? h1 obj[name] : Oops missing... (404 page)
            obj[Other_items_in_order_of_render_priority] ? obj[info] : null (figure out how to ternary without the "else" condition) */}

            <h1 className="item-name">Item Placeholder</h1>

        </div>
    )
}

export default Item;