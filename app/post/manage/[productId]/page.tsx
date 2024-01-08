/* eslint-disable react/no-unescaped-entities */

import ProductDetails from "@/components/productDetailsPage/ProductDetails";
import SingleFeatures from "@/components/productDetailsPage/SingleFeatures";
import { IProduct } from "@/types/product";

const ProductDetailsPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const res = await fetch(
    `https://star-tech-back-end.vercel.app/api/v1/product/${params.productId}`,
    {
      cache: "no-cache",
    }
  );
  const data = await res?.json();

  const { Specification, ...others } = data.data;
  const productData = others as IProduct;

  
  return (
    <>
      <ProductDetails data={productData} tableName={"product"}/>

      {/* max-w-[1290px] */}
      <div className="  mx-auto mt-5 grid grid-cols-12 gap-5 px-3">
        {/* left */}
        <div className="col-span-12 lg:col-span-9 ">
          <div className="sm:flex justify-center sm:justify-start sm:items-center">
            {["Specification", "Description", "Questions", "Reviews"].map(
              (Item, index) => (
                <div
                  key={index}
                  style={{ boxShadow: "0 1px 1px rgba(0,0,0,.1)" }}
                  className={`${
                    index === 0
                      ? "bg-[#ef4a23] text-white"
                      : "bg-white text-black"
                  } py-1 my-1 sm:my-0 sm:py-2 px-3 sm:px-5 mr-2 sm:mr-5 rounded  hover:text-white inline-block  hover:bg-[#ef4a23]  cursor-pointer`}
                >
                  <p className=" font-semibold text-[10px] sm:text-[14px]">
                    {Item}
                  </p>
                </div>
              )
            )}
          </div>

          <div className="bg-white rounded-md  mt-5 px-3 sm:px-5">
            <h2 className="font-semibold text-[20px] py-5">Specification</h2>

            {Object.entries(Specification).map(
              ([specificationName, specification],key:number) => (
                <SingleFeatures
                  key={key}
                  data={{
                    specificationName,
                    specification: specification as object,
                  }}
                />
              )
            )}
          </div>
        </div>

        {/* Right */}
        <div className="hidden lg:block h-auto col-span-3 rounded-md "></div>
      </div>
    </>
  );
};
export default ProductDetailsPage;
