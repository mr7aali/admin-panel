import ManagePostTitle from "@/components/ManagePostPage/ManagePostTitle";
import { IProduct } from "@/types/product";
import CategoryTableBody from "@/components/ManagePostPage/CategoryTableBody";

const ManagePost = async () => {
  const tableHeader = ["Price", "Status", "Profit", "Action"];

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
      <div className="grid grid-cols-6 border-t  border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 ">
        <div className="col-span-4 flex items-center">
          <p className="font-medium uppercase">Category Image</p>
        </div>

        {tableHeader.map((Item) => (
          <div key={Item} className=" flex items-center justify-center">
            <p className="font-medium uppercase">{Item}</p>
          </div>
        ))}
      </div>

      {productData.map((product, key: number) => (
        <CategoryTableBody key={key} product={product} />
      ))}
    </div>
  );
};

export default ManagePost;
