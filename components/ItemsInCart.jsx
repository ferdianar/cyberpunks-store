import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { connect } from 'react-redux'
import { AdjustmentQty, RemoveFromCart } from "../redux/actions/products"

const ItemsInCart = ({ id, images, title, description, prices, quantity, removeItems, AdjustmentQty }) => {
    const [tempQuantity, setTempQuantity] = useState(quantity)

    const AddQuantity = () => {
        setTempQuantity(tempQuantity + 1)
        AdjustmentQty(id, tempQuantity + 1)
    }

    const MinQuantity = () => {
        if (tempQuantity > 0) {
            setTempQuantity(tempQuantity - 1)
            AdjustmentQty(id, tempQuantity - 1)
        } if (tempQuantity === 0) {
            removeItems(id)
        }
    }

    return (
        <div className="card w-full bg-base-200 shadow-xl p-4">
            <figure><Image src={images} height={270} width={300} className='h-[165px] object-cover rounded-xl w-full' alt="Shoes" /></figure>
            <div className="mt-4">
                <h2 className="font-bold text-md">{title}</h2>
                <p className='font-normal text-sm my-2'>{description}</p>
                <div className="card-actions justify-between items-center mt-4">
                    <h1 className="font-bold text-yellow-500 text-md">$ {prices}</h1>
                    <h1 className="font-bold text-yellow-500 text-md flex items-center gap-x-2">
                        <button onClick={MinQuantity} className="px-2 pt-0 rounded-full bg-primary txt-white hover:bg-blue-800">-</button>
                        {/* <input type="number" min={1} name="quantity" id="quantity" value={tempQuantity} onChange={UpdateQuantity} /> */}
                        {tempQuantity}
                        <button onClick={AddQuantity} className="px-2 pt-0  rounded-full bg-primary txt-white hover:bg-blue-800">+</button>
                    </h1>
                </div>
                <div className="mt-3 w-full">
                    {/* <button className="w-full btn btn-primary btn-sm text-xs">Checkout</button> */}
                    <button onClick={() => removeItems(id)} className="w-full btn btn-error text-white btn-sm text-xs mt-3">Remove Items</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeItems: (id) => dispatch(RemoveFromCart(id)),
        AdjustmentQty: (id, value) => dispatch(AdjustmentQty(id, value))
    }
}

export default connect(null, mapDispatchToProps)(ItemsInCart)