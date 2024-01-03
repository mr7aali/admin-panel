import ManagePostTitle from "@/components/ManagePostPage/ManagePostTitle";
import { IProduct } from "@/types/product";
import TableHeader from "@/components/ManagePostPage/TableHeader";
import TableBody from "@/components/ManagePostPage/TableBody";

const ManagePost = async () => {
  const tableHeader = ["Category", "Price", "Sold", "Profit", "Action"];

  const res = await fetch(
    "https://star-tech-back-end.vercel.app/api/v1/product/"
  );
  const data = await res.json();
  const productData: IProduct[] = data.data;
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <ManagePostTitle title="All Products" />

      <TableHeader tableHeader={tableHeader} />
      {productData.map((product, key: number) => (
        <TableBody key={key} product={product} />
      ))}
    </div>
  );
};

export default ManagePost;
