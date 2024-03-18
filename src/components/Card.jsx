import React from "react";
import { useContext } from "react";
import { shoeContext } from "../store/ShoeContext";
import { Button } from "./Button";
import { SHOE_DATA } from "../helpers";

export const Card = () => {
  const {addToCart} = useContext(shoeContext)
 

  return (
    <div className=" lg:flex md:flex justify-around mx-10  flex-wrap mt-20">
      {SHOE_DATA.map((item) => {
        return (
          <div key={item.id} className=" text-white border-2 border-stxt rounded-md lg:w-2/5 md:w-2/5 mb-10 ">
            <div className=" h-52 overflow-hidden">
              <img
                // className=" object-cover h-full w-full rounded-t-md md:hover:scale-125 lg:hover:scale-125 transition duration-500 ease-in-out"
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
            </div>
            <div className=" text-center font-semibold mt-2 text-2xl">
              {item.title}
            </div>
            <div className=" p-4 text-sm">{item.info}</div>
            <div className=" flex justify-between mx-10 mb-4 items-center">
              <span className=" text-btxt font-bold text-xl">
                {item.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}
              </span>
              <Button onClick={()=> {addToCart({
                id: item.id,
                title: item.title, 
                price: item.price
              })}} className={" hover:bg-stxt px-2 rounded-md bg-stone-800 p-2"}>
                Add to Cart
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
