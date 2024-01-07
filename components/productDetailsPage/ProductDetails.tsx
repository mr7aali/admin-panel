"use client";
import Form from "@/hookForms/Form";
import FormInput from "@/hookForms/FormInput";
import { IResponseType } from "@/types/response";
import Image from "next/image";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import FormModal from "../sheared/FormModal";

const ProductDetails = ({ data }: { data: any }) => {
  const [editKeyFeature, setEditKeyFeature] = useState(false);
  const [keyFeatures, setkeyFeatures] = useState<string[]>(
    (data.key_features as string).split(";")
  );
  const [modelOpen, setModelOpen] = useState<boolean>(false);

  const onSubmit = (data: { feature: string }) => {
    const feature = data.feature;
    setkeyFeatures((pre) => [...pre, feature]);
  };

  const patchKeyFeatures = async () => {
    const productData = {
      product: { id: data.id, key_features: keyFeatures.join(";") },
    };

    const res = await fetch(
      "https://star-tech-back-end.vercel.app/api/v1/product/",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      }
    );
    const result: IResponseType = await res.json();
    if (result.success === true) {
      setEditKeyFeature(!editKeyFeature);
    }
  };
  return (
    <>
      <div className="bg-white ">
        <div className="max-w-[1290px] mx-auto flex flex-col justify-center items-center md:items-start md:flex-row sm:pt-10">
          <div className="px-[15px]">
            <Image
              src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/g2412/g2412-06-500x500.webp"
              alt=""
              className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"
              width={400}
              height={400}
            />
          </div>
          <div className="px-[15px] md:ml-10 pb-8">
            {/* //! <KeyFeatures data={data} /> */}
            <div>
              <h2 className="text-[18px] flex items-center  mb-2 font-semibold sm:text-[22px] pb-2 font-serif text-[#3749bb]">
                {/* MSI G2412 23.8" FHD 170Hz IPS 1ms FreeSync Premium Gaming Monitor */}
                <span>{data?.name} </span>
                <span
                  onClick={() => setModelOpen(true)}
                  className="ml-5 cursor-pointer "
                >
                  <FiEdit />
                </span>
              </h2>

              <aside className="flex flex-wrap my-2">
                <div className="bg-[rgba(55,73,187,.05)] my-1 rounded-full mr-2">
                  <p className="px-3 sm:px-5 py-1 text-xs sm:text-sm text-black-2">
                    Price:{" "}
                    <span className="font-semibold"> {data?.price} ৳</span>
                  </p>
                </div>
                <div className="bg-[rgba(55,73,187,.05)] my-1 rounded-full mr-2">
                  <p className="px-3 sm:px-5 py-1 text-xs sm:text-sm text-black-2">
                    Regular Price:{" "}
                    <span className="font-semibold">{data?.price} ৳</span>
                  </p>
                </div>
                <div className="bg-[rgba(55,73,187,.05)] my-1 rounded-full mr-2">
                  <p className="px-3 sm:px-5 py-1 text-xs sm:text-sm text-black-2">
                    Status:{" "}
                    <span className="font-semibold">{data?.status}</span>
                  </p>
                </div>
                <div className="bg-[rgba(55,73,187,.05)] my-1 rounded-full mr-2">
                  <p className="px-3 sm:px-5 py-1 text-xs sm:text-sm text-black-2">
                    Product Code:{" "}
                    <span className="font-semibold">{data?.product_code}</span>
                  </p>
                </div>
                <div className="bg-[rgba(55,73,187,.05)] my-1 rounded-full mr-2">
                  <p className="px-3 sm:px-5 py-1 text-xs sm:text-sm text-black-2">
                    Brand: <span className="font-semibold">{data?.brand}</span>
                  </p>
                </div>
              </aside>
              {editKeyFeature ? (
                <div>
                  <h3 className="text-[18px] text-black font-semibold sm:text-[20px] font-serif my-4">
                    Key Features
                  </h3>

                  {keyFeatures.map((Item: string, key: number) => (
                    <p
                      key={key}
                      className="my-1 text-[15px] sm:text-[16px] font-serif"
                    >
                      <span>{Item}</span>
                    </p>
                  ))}
                  <div className="mt-[20px] flex">
                    <p
                      onClick={() => setEditKeyFeature(!editKeyFeature)}
                      className="cursor-pointer py-1 px-5 border-2 rounded-md inline-block bg-success text-white uppercase shadow-3"
                    >
                      {" "}
                      Edit Key Info
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-[18px] text-black font-semibold sm:text-[20px] font-serif my-4">
                    Add Key Features
                  </h3>

                  {keyFeatures.map((Item: string, key: number) => (
                    <p
                      key={key}
                      className="my-1 text-[15px] sm:text-[16px] font-serif"
                    >
                      {Item}
                      <span
                        onClick={() =>
                          setkeyFeatures((pre) =>
                            pre.filter((key) => key !== Item)
                          )
                        }
                        className="p-1 cursor-pointer font-bold text-red"
                      >
                        X
                      </span>
                    </p>
                  ))}

                  <Form submitHandler={onSubmit}>
                    <div className="max-w-70 mt-4">
                      <FormInput
                        label=""
                        name="feature"
                        placeholder="Type new feature"
                        type="text"
                      />
                    </div>

                    <div className="flex gap-3 mt-[20px] ">
                      <button
                        type="submit"
                        className="cursor-pointer py-1 px-5 bo rder-2 rounded-md inline-block text-black-2 uppercase shadow-2"
                      >
                        Add
                      </button>
                      <button
                        type="submit"
                        onClick={() => patchKeyFeatures()}
                        className="cursor-pointer py-1 px-5 border-2 rounded-md inline-block bg-success text-white uppercase shadow-3"
                      >
                        Done
                      </button>
                    </div>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <FormModal
        data={data}
        modelOpen={modelOpen}
        setModelOpen={setModelOpen}
      />
    </>
  );
};

export default ProductDetails;
