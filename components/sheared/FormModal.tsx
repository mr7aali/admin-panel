"use client";

import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import FormCom from "./FormCom";

const FormModal = ({
  data,
  modelOpen,
  setModelOpen,
}: {
  data: any;
  modelOpen: boolean;
  setModelOpen: (isOpen: boolean) => void;
}) => {
  // const { id, ...productData } = data;

  // console.log(data, productData);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full grid place-items-center backdrop-blur transition-opacity duration-300 ${
        modelOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-2/6 mx-auto ">
        <div className="rounded-sm border  border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white flex items-center justify-between">
              <span>Sign Up Form</span>
              <span
                onClick={() => setModelOpen(false)}
                className="p-1 text-2xl cursor-pointer text-red"
              >
                <FaDeleteLeft />
              </span>
            </h3>
          </div>

          <FormCom data={data} setModelOpen={setModelOpen} />
        </div>
      </div>
    </div>
  );
};

export default FormModal;
