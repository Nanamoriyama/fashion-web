import React from "react";

interface FormInputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  type,
  value,
  onChange,
}) => {
  return (
    <div className="form-control">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="input input-bordered w-full p-2 border-b border-black focus:outline-none focus:border-black placeholder-black placeholder-opacity-100 text-sm"
        placeholder={
          name === "username"
            ? "*Username"
            : name === "email"
            ? "*Email address"
            : "*Password"
        }
      />
    </div>
  );
};

export default FormInput;
