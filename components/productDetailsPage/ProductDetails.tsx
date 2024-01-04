import Image from "next/image";

const ProductDetails = ({ data }: { data: any }) => {
  console.log(data.key_features);
  const keyFeatures = (data.key_features as string).split(";");
  // const { Specification, ...productData } = data;
  
  return (
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
            <h2 className="text-[18px] mb-2 font-semibold sm:text-[22px] pb-2 font-serif text-[#3749bb]">
              {/* MSI G2412 23.8" FHD 170Hz IPS 1ms FreeSync Premium Gaming Monitor */}
              {data?.name}
            </h2>

            <aside className="flex flex-wrap my-2">
              <div className="bg-[rgba(55,73,187,.05)] my-1 rounded-full mr-2">
                <p className="px-3 sm:px-5 py-1 text-xs sm:text-sm text-black-2">
                  Price: <span className="font-semibold"> {data?.price} ৳</span>
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
                  Status: <span className="font-semibold">{data?.status}</span>
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
            <div>
              <h3 className="text-[18px] text-black font-semibold sm:text-[20px] font-serif my-4">
                Key Features
              </h3>

              {keyFeatures.map((Item: string) => (
                <p
                  key={Item}
                  className="my-1 text-[15px] sm:text-[16px] font-serif"
                >
                  {Item}
                </p>
              ))}

              <a className="text-[#e5330b] cursor-pointer mt-[10px] font-serif relative after:content-[''] after:block after:absolute after:w-full after:h-[2px] after:bg-[#e5330b] after:bottom-[-8px] after:transform after:origin-bottom-right after:scale-x-8 after:hover:scale-x-100">
                Edit Key Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

const key_features = [
  "Model: iGame GeForce RTX 4060 Ti Ultra W DUO OC 16GB-V",
  "Core Clock: Base:1830Mhz; Boost:2460Mhz",
  "Memory Clock: 17Gbps",
  "Memory Interface: 128bit",
  "Output: 3x DP+HDMI",
];
