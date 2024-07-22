"use client";
import React from "react";

interface SubmitBtnProps {
  text: string;
  isSubmitting: boolean; // 新しく追加
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({ text, isSubmitting }) => {
  return (
    <button
      type="submit"
      className={`w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
        isSubmitting
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      } focus:outline-none focus:ring focus:ring-blue-300`}
      disabled={isSubmitting} // 送信中はボタンを無効化
    >
      {isSubmitting ? "Submitting..." : text}
    </button>
  );
};

export default SubmitBtn;
