import { VFC } from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Layout from 'components/Layout';
import TextForm from 'components/Form/TextForm';
import Button from 'components/Button';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
});
interface IFormValues {
  firstName: string;
  age: number;
}

type SelectProps = {
  label: string;
  register: UseFormRegister<any>;
  required: boolean;
};

const Select = ({ register, label, required }: SelectProps) => (
  <>
    <label htmlFor="label">{label}</label>
    <select {...register(label, { required })}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
);

const IndexPage: VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({ resolver: yupResolver(schema) });
  const onSubmit = (data: IFormValues) => {
    alert(JSON.stringify(data));
  };
  console.log(errors);

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextForm
          label="firstName"
          register={register}
          required
          error={errors.firstName}
        />
        <Select label="age" register={register} required />
        <Button type="submit">送信</Button>
        {/* <input type="submit" /> */}
      </form>
    </Layout>
  );
};

export default IndexPage;
