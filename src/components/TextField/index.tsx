import React, { VFC } from 'react';
import { UseFormRegister } from 'react-hook-form';

export type TextFieldProps = JSX.IntrinsicElements['input'] & {
  label: string;
  register: UseFormRegister<any>;
  isError?: boolean;
};

const TextField: VFC<TextFieldProps> = ({
  label,
  register,
  required = false,
  placeholder,
  isError,
}) => (
  <>
    <input
      type="text"
      {...register(label, { required })}
      placeholder={placeholder}
      className={`shadow-sm block w-full sm:text-sm rounded-md ${
        isError
          ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
          : 'focus:ring-indigo-500 focus:border-indigo-500 border-gray-300'
      } `}
    />
  </>
);

export default TextField;
