"use client";
import React from "react";

interface SubmitBtnProps {
  text: string;
  isSubmitting: boolean;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({ text, isSubmitting }) => {
  return (
    <button
      type="submit"
      className={`w-full py-3 px-4 text-sm font-medium rounded-full text-white ${
        isSubmitting
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-black hover:bg-gray-800"
      } focus:outline-none focus:ring focus:ring-gray-300`}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Submitting..." : text}
    </button>
  );
};

export default SubmitBtn;
