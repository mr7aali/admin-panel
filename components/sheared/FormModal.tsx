"use client";

import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import FormCom from "./FormCom";
import { formatStringForSpecification } from "../productDetailsPage/SingleFeatures";

const FormModal = ({
  tableName,
  data,
  modelOpen,
  setModelOpen,
}: {
  tableName: string;
  data: any;
  modelOpen: boolean;
  setModelOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div
      className={`fixed z-9999  top-0 left-0 w-full h-full grid place-items-center backdrop-blur transition-opacity duration-300 ${
        modelOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full p-5 md:w-1/2 xl:w-2/6 mx-auto ">
        <div className="rounded-sm border  border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white flex items-center justify-between">
              
            
              {formatStringForSpecification(tableName)}
              <span
                onClick={() => setModelOpen(false)}
                className="p-1 text-2xl cursor-pointer text-red"
              >
                <FaDeleteLeft />
              </span>
            </h3>
          </div>

          <FormCom
            tableName={tableName}
            data={data}
            setModelOpen={setModelOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default FormModal;
