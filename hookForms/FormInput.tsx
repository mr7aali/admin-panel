"use client";
import { Controller, useFormContext } from "react-hook-form";
type IInput = {
  type: string;
  name: string;
  id?: string;
  value?: string;
  placeholder?: string;
  validation?: object;
  label: string;
  selectOption?: { [key: string]: any }[];
};
const FormInput = ({
  id,
  name,
  placeholder,
  type,
  validation,
  value,
  label,
  selectOption,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const InputClassName =
    "w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary";
  return (
    <>
      {label && (
        <label className="mb-2.5 block text-black dark:text-white">
          {label} <span className="text-meta-1">*</span>
        </label>
      )}

      <Controller
        control={control}
        rules={{
          required: `${label} field cannot be empty!`,
          minLength: {
            value: 2,
            message: `${label} field must be at least 4 characters long.!`,
          },
        }}
        name={name}
        render={({ field }) => (
          <>
            {type === "text" ? (
              <input
                {...field}
                value={value ? value : field.value || ""}
                type={type || "text"}
                placeholder={placeholder}
                // style={{border:"1px solid red"}}
                className={InputClassName}
              />
            ) : (
              <select className={InputClassName}>
                <option value="" className="text-center">
                  --Please choose an option--
                </option>
                {selectOption?.map((option) => (
                  <option
                    key={option.id}
                    value={option.id}
                    className="text-center"
                  >
                    {option.name}
                  </option>
                ))}
              </select>
            )}
          </>
        )}
      />
      {errors[name] && (
        <p
          style={{ color: "#ff3333", fontSize: "14px" }}
          className="text-red font-medium mt-2 ml-0 font-serif flex items-center"
        >
          Error : {errors[name]?.message as string}
        </p>
      )}
    </>
  );
};

export default FormInput;
