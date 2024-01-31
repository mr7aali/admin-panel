import ManagePostTitle from "@/components/ManagePostPage/ManagePostTitle";
import { IProduct } from "@/types/product";
import CategoryTableBody from "@/components/ManagePostPage/CategoryTableBody";

const ManagePost = async () => {
  const tableHeader = ["Category", "Price", "Sold", "Profit", "Action"];

  const res = await fetch(
    "https://star-tech-back-end.vercel.app/api/v1/product/",
    { cache: "no-store" }
  );
  const data = await res.json();
  const productData: IProduct[] = data.data;

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <ManagePostTitle title="All Products" />

      {/* <TableHeader tableHeader={tableHeader} /> */}
      <div className="grid grid-cols-12 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Product Name</p>
        </div>

        {tableHeader.map((Item) => (
          <div key={Item} className=" flex items-center justify-center">
            <p className="font-medium">Name</p>
          </div>
        ))}
      </div>
      <div style={{border:"1px solid red"}}>
        {productData.map((product, key: number) => (
          <CategoryTableBody key={key} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ManagePost;
