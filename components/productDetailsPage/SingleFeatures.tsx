"use client";
import React, { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import FormModal from "../sheared/FormModal";
const SingleFeatures = ({
  data,
}: {
  data: { specificationName: string; specification: object };
}) => {
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  return (
    <>
      <div className="pb-5">
        <h3 className="text-[#3749bb] font-bold px-3 py-2 text-[14px] sm:text-[16px] bg-[rgba(55,73,187,.05)] rounded-md flex justify-between items-center">
          <span>{formatStringForSpecification(data.specificationName)}</span>
          <span
            onClick={() => setModelOpen(true)}
            className="ml-5 cursor-pointer "
          >
            <FiEdit />
          </span>
        </h3>

        {Object.entries(data.specification as any).map(
          ([featureName, feature],key:number) =>
            !(featureName === "specification_id" || featureName === "id") ? (
              <p
                key={key}
                className="grid grid-cols-3 px-3 py-2"
                style={{ borderBottom: "1px solid #ecedef" }}
              >
                <span className="opacity-80 text-[12px] sm:text-[14px]">
                  {featureName.replace(/_/g, " ")}
                </span>
                <span className="font-semibold col-span-2 md:col-span-1 text-[12px] sm:text-[14px]">
                  {feature as string}
                </span>
              </p>
            ) : (
              <></>
            )
        )}
      </div>
      <FormModal
        tableName={data.specificationName}
        data={data.specification}
        modelOpen={modelOpen}
        setModelOpen={setModelOpen}
      />
    </>
  );
};

export default SingleFeatures;

export const formatStringForSpecification = (inputString: string) => {
  const stringWithSpaces = inputString.replace(/([A-Z])/g, " $1");
  const formattedString =
    stringWithSpaces.charAt(0).toUpperCase() + stringWithSpaces.slice(1);
  return formattedString;
};
