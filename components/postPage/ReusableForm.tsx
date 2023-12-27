"use client";
import React from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Form from "@/hookForms/Form";
import FormInput from "@/hookForms/FormInput";
import { Specification } from "@/constant/form";
// import { groupConsecutiveArray } from "@/js/groupConsecutiveNumbers";

const ReusableForm = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const printInputInPattern = (index: number): boolean => {
    const towInputElementIndex = [
      4, 5, 9, 10, 14, 15, 19, 20, 24, 25, 29, 30, 34, 35, 39, 40, 44, 45, 49,
      50,
    ];
    return !towInputElementIndex.includes(index);
  };
  console.log(printInputInPattern(51));

  return (
    <section>
      <Breadcrumb pageName="Add Post" />

      <div className="">
        <div className="flex flex-col gap-9 w-1/2 ">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Contact Form
              </h3>
            </div>
            <Form submitHandler={onSubmit}>
              <div className="p-6.5">
                
               

                <div  className="grid grid-cols-12  gap-x-6">
                  {Specification.Processor.map((Item, i) => (
                    <div key={i} className={`mb-4.5 ${printInputInPattern(i+1)? "col-span-4":"col-span-6"}`}>
                      <FormInput
                        label={Item.fieldName}
                        type={Item.type}
                        placeholder={`Enter your ${Item.fieldName}`}
                        name={Item.name}
                      />
                    </div>
                  ))}
                 
                </div>
            
                <button
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                >
                  Send Message
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReusableForm;
