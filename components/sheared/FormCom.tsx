import Form from "@/hookForms/Form";
import FormInput from "@/hookForms/FormInput";
import { IProduct } from "@/types/product";
import { IResponseType } from "@/types/response";
import { AxiosService } from "@/utils/Axios";
const FormCom = ({
  tableName,
  data,
  setModelOpen,
}: {
  tableName: string;
  data: IProduct;
  setModelOpen: (isOpen: boolean) => void;
}) => {
  const { id, ...tableData } = data;

  const onSubmit = async (data: any) => {
    const postProductData = {
      [tableName]: {
        id: id,
        ...data,
      },
    };

    const res = await AxiosService.patch("/api/v1/product", postProductData);
    const result: IResponseType = await res.data;

    if (result.success) {
      setModelOpen(false);
    }
  };
  return (
    <Form submitHandler={onSubmit} defaultValues={tableData}>
      <div className="p-6.5">
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(tableData).map(([fieldName, fieldValue]) => (
            <div key={fieldName} className="mb-4.5">
              {!(fieldName === "specification_id") ? (
                <FormInput
                  label={fieldName}
                  name={fieldName}
                  type="text"
                  placeholder={`Enter ${fieldName}`}
                />
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 ">
          <span
            onClick={() => setModelOpen(false)}
            className="cursor-pointer flex w-full justify-center rounded bg-red p-3 font-medium text-gray uppercase"
          >
            Cancle
          </span>
          <button
            type="submit"
            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray uppercase"
          >
            Submit
          </button>
        </div>
      </div>
    </Form>
  );
};

export default FormCom;
