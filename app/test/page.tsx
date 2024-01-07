"use client";
import React, { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";

const FormModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button onClick={toggleModal}>Open Modal</button>

      {/* Modal */}
      <div
        className={`fixed top-0 left-0 w-full h-full grid place-items-center backdrop-blur transition-opacity duration-1000 ${
          isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-2/6 mx-auto">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white flex items-center justify-between">
                <span>Sign Up Form</span>
                <span
                  onClick={toggleModal}
                  className="p-1 text-2xl cursor-pointer text-red"
                >
                  <FaDeleteLeft />
                </span>
              </h3>
            </div>
            {/* ... rest of your modal content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
