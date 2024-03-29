import React, { useContext, useRef } from "react";
import { shoeContext } from "../store/ShoeContext";
import { Button } from "./Button";
import Modal from "./Modal";

export const Header = () => {
  const dialog = useRef();
  const { items } = useContext(shoeContext);
  const length = items.length;

  const showModal = ()=> {
    
    return dialog.current.open()
  }
  return (
    <div>
      <Modal ref={dialog}/>
      <header className=" flex-col text-center">
        <p className=" text-3xl font-bold text-btxt pt-10">
          MY NIKE STORE
        </p>
        <p className=" font-semibold text-btxt font-paci">
          Just do it.
        </p>
      </header>
      <div className=" lg:flex lg:justify-end md:flex md:justify-end sm:flex sm:justify-center -mb-16 mt-10">
        <Button onClick={showModal} className=" p-2 px-4 text-lg font-bold bg-stone-700 rounded text-white md:mr-10 lg:mr-10">
          Cart ({length})
        </Button>
      </div>
    </div>
  );
};
