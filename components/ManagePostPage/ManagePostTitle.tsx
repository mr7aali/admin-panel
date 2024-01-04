const ManagePostTitle = ({ title }: { title: string }) => {
  const pageNumber = ["10", "20", "30", "50", "70", "100"];
  return (
    <div className="flex justify-between items-center md:px-6 xl:px-7.5">
      <div className="py-6  ">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          {title}
        </h4>
      </div>
      <div className="flex gap-5">
        <div className="flex gap-2 items-center">
          <label>Category</label>
          <select className="relati ve z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-7 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ">
            {Catagory.map((Item, key) => (
              <option key={key} value={Item.title}>
                {Item.title.replace(/_/g, " ")}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <label>Page</label>
          <select className="relati ve z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-7 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ">
            {pageNumber.map((page) => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ManagePostTitle;
const Catagory: { title: string; Image: string }[] = [
  {
    title: "Drone",
    Image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/drone-48x48.png",
  },
  {
    title: "Gimbal",
    Image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/gimbal-48x48.png",
  },
  {
    title: "Battery",
    Image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/laptop-battery-01-48x48.png",
  },
  {
    title: "TV",
    Image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/tv-48x48.png",
  },
  {
    title: "Mobile_Phone",
    Image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/mobile-phone-48x48.png",
  },
  {
    title: "Power_Station",
    Image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/powerstation-48x48.png",
  },
  {
    title: "VR",
    Image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/vr-48x48.png",
  },
  {
    title: "Smart_Watch",
    Image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/smart-watch-48x48.png",
  },
  {
    title: "Action_Camera",
    Image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/action-camera-48x48.png",
  },
  {
    title: "Graphics_Card",
    Image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/gpu-48x48.png",
  },
  {
    title: "Printer",
    Image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/printer-48x48.png",
  },
  {
    title: "Headphone",
    Image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/headphone-48x48.png",
  },
  {
    title: "Earbuds",
    Image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/earbuds-48x48.png",
  },
  {
    title: "Bluetooth",
    Image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/bt-speaker-48x48.png",
  },
  {
    title: "CC_Camera",
    Image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/cc-camera-48x48.png",
  },
  {
    title: "Gaming_Console",
    Image:
      "https://www.startech.com.bd/image/cache/catalog/category-thumb/gaming-console-48x48.png",
  },
];
