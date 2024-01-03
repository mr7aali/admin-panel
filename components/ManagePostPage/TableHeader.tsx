const TableHeader = ({ tableHeader }: { tableHeader: string[] }) => {
  return (
    <div className="grid grid-cols-12 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
      <div className="col-span-3 flex items-center">
        <p className="font-medium">Product Name</p>
      </div>

      {tableHeader.map((Item) => (
        <div key={Item} className=" flex items-center justify-center">
          <p className="font-medium">{Item}</p>
        </div>
      ))}
    </div>
  );
};

export default TableHeader;
