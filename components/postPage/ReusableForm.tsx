"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Form from "@/hookForms/Form";
import FormInput from "@/hookForms/FormInput";
import { Specification, formName } from "@/constant/form";
import { printInputInPattern } from "@/js/FormHelpers";
// import { groupConsecutiveArray } from "@/js/groupConsecutiveNumbers";

const ReusableForm = () => {
  // const NeededformName = ["product"];
  const [currentForm, setCurrentForm] = useState(0);
  const [givenForm, setGiveForm] = useState(formName);
  const [neededFormName, setNeededFormName] = useState(["product"]);

  // useEffect(() => {}, []);
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const handleSelectedForm = (e: any) => {
    const select = e.target.value;
    setNeededFormName((pre) => [...pre, select]);
    setGiveForm(givenForm.filter((item) => item !== select));
  };

  return (
    <section>
      <Breadcrumb pageName="Add Post" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-12">
        <div className="flex flex-col gap-9 sm:col-span-8">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                {neededFormName[currentForm].replace(/_/g, " ")} Form
              </h3>
            </div>
            <Form submitHandler={onSubmit}>
              <div className="p-6.5">
                <div className="grid grid-cols-12  gap-x-6">
                  {Specification[neededFormName[currentForm]].map((Item, i) => (
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
                  {!(currentForm === neededFormName.length - 1) ? (
                    <button
                      onClick={() =>
                        setCurrentForm((pre) =>
                          currentForm < neededFormName.length - 1
                            ? pre + 1
                            : neededFormName.length - 1
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
                          currentForm < neededFormName.length - 1
                            ? pre + 1
                            : neededFormName.length - 1
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
        {/*//! { fdsfjdkfj } */}
        <div className="flex flex-col gap-9 bg-white sm:col-span-4">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white text-center">
              {/* {NeededformName[currentForm].replace(/_/g, " ")} Form */}
              Select your needed Form
            </h3>
          </div>
          {/* select form */}
          <div className="px-5">
            <select
              defaultValue={""}
              onChange={handleSelectedForm}
              className="w-full  rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            >
              <option value="1" defaultChecked>
                {" "}
                {"<--- Select an option --->"}{" "}
              </option>
              {givenForm.map((Item: string) => (
                <option key={Item} value={Item}>
                  {Item.replace(/_/g, " ")}
                </option>
              ))}
            </select>
          </div>

          <div className="p-5 flex flex-wrap justify-center gap-1">
            {neededFormName.map((Item: string) => (
              <p
                key={Item}
                
                className="selected-form  bg-primary hover:bg-danger text-white px-2 py-2 text-xs font-bold rounded-md uppercase cursor-pointer "
              >
                <span className="span1 ">{Item.replace(/_/g, " ")} </span>
                <span className="span2">remove</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReusableForm;
