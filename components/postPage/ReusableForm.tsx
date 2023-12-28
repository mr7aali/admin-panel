"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Form from "@/hookForms/Form";
import FormInput from "@/hookForms/FormInput";
import { Specification, } from "@/constant/form";
import { printInputInPattern } from "@/js/FormHelpers";
// import { groupConsecutiveArray } from "@/js/groupConsecutiveNumbers";

const ReusableForm = () => {
  const NeededformName = ["product"];
  const [currentForm, setCurrentForm] = useState(0);

  // useEffect(() => {}, []);
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section>
      <Breadcrumb pageName="Add Post" />

      <div className="">
        <div className="flex flex-col gap-9 w-1/2 ">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                {NeededformName[currentForm].replace(/_/g, " ")} Form
              </h3>
            </div>
            <Form submitHandler={onSubmit}>
              <div className="p-6.5">
                <div className="grid grid-cols-12  gap-x-6">
                  {Specification[NeededformName[currentForm]].map((Item, i) => (
                    <div
                      key={i}
                      className={`mb-4.5 ${
                        printInputInPattern(i + 1) ? "col-span-6" : "col-span-4"
                      }`}
                    >
                      <FormInput
                        label={Item.fieldName}
                        type={Item.type}
                        placeholder={`Enter your ${Item.fieldName}`}
                        name={Item.name}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <button
                    onClick={() =>
                      setCurrentForm((pre) => (currentForm === 0 ? 0 : pre - 1))
                    }
                    disabled={currentForm === 0}
                    className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                  >
                    Previous Step
                  </button>
                  {!(currentForm === NeededformName.length - 1) ? (
                    <button
                      onClick={() =>
                        setCurrentForm((pre) =>
                          currentForm < NeededformName.length - 1
                            ? pre + 1
                            : NeededformName.length - 1
                        )
                      }
                      type="submit"
                      className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        setCurrentForm((pre) =>
                          currentForm < NeededformName.length - 1
                            ? pre + 1
                            : NeededformName.length - 1
                        )
                      }
                      type="submit"
                      className="flex w-full justify-center rounded bg-green p-3 font-medium text-gray"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReusableForm;
