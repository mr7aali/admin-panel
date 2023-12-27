"use client";
import React from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Form from "@/hookForms/Form";
import FormInput from "@/hookForms/FormInput";
import { Specification } from "@/constant/form";

const ReusableForm = () => {
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
                Contact Form
              </h3>
            </div>
            <Form submitHandler={onSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <FormInput
                      label="First Name"
                      name="first name"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <FormInput
                      label="Last name"
                      name="last name"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <FormInput
                      label="Last name"
                      name="last name"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div style={{border:"1px solid red"}} className="mb-4.5">
                  <FormInput
                    label="Email"
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                  />
                </div>
                {Specification.product.map((Item, index) => (
                  <div key={index} className="mb-4.5">
                    <FormInput
                      label={Item.fieldName}
                      type={Item.type}
                      placeholder={`Enter your ${Item.fieldName}`}
                      name={Item.name}
                    />
                  </div>
                ))}
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
