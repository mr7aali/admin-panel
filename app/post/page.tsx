import ReusableForm from "@/components/postPage/ReusableForm";
import { getSpecification } from "@/constant/form";
import { ISpecification } from "@/types/Specification";
import { Metadata } from "next";
// import { Form } from "react-hook-form";
export const metadata: Metadata = {
  title: "Form Layout Page | Next.js E-commerce Dashboard Template",
  description: "This is Form Layout page for TailAdmin Next.js",
  // other metadata
};

const PostPage = async () => {
  const Specification = (await getSpecification()) 
  console.log(Specification);
  return (
    <div>
      <ReusableForm Specification={Specification} />
    </div>
  );
};

export default PostPage;
