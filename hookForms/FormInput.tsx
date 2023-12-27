"use client";

import { Controller, useFormContext } from "react-hook-form";

type IInput = {
  type?: string;
  name: string;
  id?: string;
  value?: string;
  placeholder?: string;
  validation?: object;
  label:string;
};
const FormInput = ({
  id,
  name,
  placeholder,
  type,
  validation,
  value,
  label
}: IInput) => {
  const { control } = useFormContext();
  return (
    <>
      <label className="mb-2.5 block text-black dark:text-white">
        {label} <span className="text-meta-1">*</span>
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            {...field}
            value={value ? value : field.value || ""}
            type={type || "text"}
            placeholder={placeholder}
            // style={{border:"1px solid red"}}
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        )}
      />
    </>
  );
};

export default FormInput;
