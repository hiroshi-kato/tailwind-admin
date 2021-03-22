import React, { VFC } from 'react';

export type TextFieldProps = {
  name: string;
  id?: string;
  ref?: React.RefObject<any>;
  placeholder?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField: VFC<TextFieldProps> = ({
  name,
  id,
  ref,
  placeholder,
  error,
  onChange,
}) => (
  <>
    <input
      type="text"
      name={name}
      id={id}
      ref={ref}
      onChange={onChange}
      placeholder={placeholder}
      className={`shadow-sm block w-full sm:text-sm rounded-md ${
        error
          ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
          : 'focus:ring-indigo-500 focus:border-indigo-500 border-gray-300'
      } `}
    />
    {error && (
      <p className="mt-2 text-sm text-red-600" id="email-error">
        {error}
      </p>
    )}
  </>
);

export default TextField;
