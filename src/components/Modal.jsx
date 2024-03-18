import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useContext } from "react";
import { shoeContext } from "../store/ShoeContext";
import { createPortal } from "react-dom";
import { Button } from "./Button";

const Mode = forwardRef(function Modal(props, ref) {
  const { items, updateCart } = useContext(shoeContext);
  const totalSumArr = [];
  items.map((sum) => totalSumArr.push(sum.totalPrice));

  function totalSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const finalSum = totalSum(totalSumArr);
  // console.log(final)

  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className=" backdrop:bg-stone-950/95 p-5 rounded-md bg-stone-500"
    >
      <div className=" ">
        {items.length === 0 ? (
          <>
            <h1 className=" text-3xl text-btxt font-bold">
              Oops! Cart is empty
            </h1>
            <p className=" text-stxt font-bold">
              Please add an item(s) to cart.
            </p>
            <form method="close" className=" mt-10">
              <div className=" flex justify-center">
                <Button
                  className={
                    " bg-back text-stone-500 hover:text-stone-50 font-bold py-1 px-4 rounded"
                  }
                >
                  {"Close"}
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className=" w-96">
            <h1 className=" text-start font-bold text-btxt text-3xl mb-3">
              YOUR CART
            </h1>
            {items.map((item) => (
              <div
                key={item.id}
                className=" flex items-center mt-2 bg-stone-400 rounded-md justify-around p-1"
              >
                <div>
                  <p className=" text-btxt font-bold">{item.title}</p>{" "}
                  <p className=" -mt-2">(${item.price})</p>
                </div>
                <div className=" flex w-40 justify-around items-center">
                  <Button
                    onClick={() => {
                      updateCart(
                        {
                          id: item.id,
                          price: item.price,
                          quantity: item.quantity,
                        },
                        "-"
                      );
                    }}
                    className={
                      " px-2 hover:bg-slate-500 text-2xl font-bold rounded-md pb-1"
                    }
                  >
                    -
                  </Button>{" "}
                  <p className=" font-bold">{item.quantity}</p>{" "}
                  <Button
                    onClick={() => {
                      updateCart(
                        {
                          id: item.id,
                          price: item.price,
                          quantity: item.quantity,
                        },
                        "+"
                      );
                    }}
                    className={
                      " px-2 hover:bg-slate-700 text-2xl font-bold rounded-md pb-1"
                    }
                  >
                    +
                  </Button>
                </div>
              </div>
            ))}
            <div className=" font-bold text-black text-right mt-4">
              Cart Total: {finalSum.toLocaleString("en-US", {style: "currency", currency: "USD"})}
            </div>

            <div>
              <form className=" flex items-center justify-end mt-4 gap-5" method="close">
                <button className=" font-bold">Close</button>
                <button
                  className={
                    " px-2 py-1 font-bold bg-btxt text-white hover:bg-btxt/30 rounded-md"
                  }
                >
                  Checkout
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Mode;
