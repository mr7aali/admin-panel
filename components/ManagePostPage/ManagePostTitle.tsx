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
            <option value="">USA</option>
            <option value="">UK</option>
            <option value="">Canada</option>
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
