"use client"
import { ReactElement, ReactNode } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

type IFormConfig = {
  defaultValues?: object;
};
type IFormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & IFormConfig;

const Form = ({ children, submitHandler, defaultValues }: IFormProps) => {
  const formconfig: IFormConfig = {};

  if (!!defaultValues) {
    formconfig["defaultValues"] = defaultValues;
  }

  const methods = useForm<IFormProps>(formconfig);

  const onSubmit = (data: any) => {
    submitHandler(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
