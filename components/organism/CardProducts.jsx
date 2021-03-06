import React from 'react'
import Image from "next/image"

const CardProducts = ({ id, images, title, description, prices }) => {
    return (
        <React.Fragment>
            <div className="card w-full bg-base-200 shadow-xl">
                <figure><Image src={images} height={270} width={300} alt="product" className='h-[165px] object-cover w-full' /></figure>
                <div className="card-body p-4">
                    <h2 className="font-bold text-md">{title}</h2>
                    <p className='font-normal text-sm my-2'>{description}</p>
                    <div className="card-actions justify-between items-center">
                        <h1 className="font-bold text-yellow-500 text-md">$ {prices}</h1>
                        <button className="btn btn-primary btn-sm text-xs">Buy Now</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardProducts