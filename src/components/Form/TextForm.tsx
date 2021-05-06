import { VFC } from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import TextField from 'components/TextField';

type TextFormProps = {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  required?: boolean;
  error?: FieldError;
};
const TextForm: VFC<TextFormProps> = ({
  id,
  label,
  register,
  required,
  error,
}) => {
  const errorMessage = error?.type === 'required' ? '必須項目です' : '';

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <TextField
        id={id}
        label={label}
        register={register}
        required={required}
        isError={!!error}
      />
      {errorMessage && (
        <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
      )}
    </>
  );
};

export default TextForm;
