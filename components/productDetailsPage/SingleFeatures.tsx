import React from "react";

const SingleFeatures = ({
  data,
}: {
  data: { specificationName: string; specification: object };
}) => {
  return (
    <div className="pb-5">
      <h3 className="text-[#3749bb] font-bold px-3 py-2 text-[14px] sm:text-[16px] bg-[rgba(55,73,187,.05)] rounded-md">
        {formatStringForSpecification(data.specificationName)}
      </h3>

      {Object.entries(data.specification as any).map(
        ([featureName, feature]) => (
          <p
            key={featureName}
            className="grid grid-cols-3 px-3 py-2"
            style={{ borderBottom: "1px solid #ecedef" }}
          >
            <span className="opacity-80 text-[12px] sm:text-[14px]">
              {featureName.replace(/_/g, " ")}
            </span>
            <span className="font-semibold col-span-2 md:col-span-1 text-[12px] sm:text-[14px]">
              {feature as string}
            </span>
          </p>
        )
      )}
    </div>
  );
};

export default SingleFeatures;

export const formatStringForSpecification = (inputString: string) => {
  const stringWithSpaces = inputString.replace(/([A-Z])/g, " $1");
  const formattedString =
    stringWithSpaces.charAt(0).toUpperCase() + stringWithSpaces.slice(1);
  return formattedString;
};
