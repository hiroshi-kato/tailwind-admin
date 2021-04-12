import { VFC } from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';

import Layout from 'components/Layout';
import TextForm from 'components/Form/TextForm';
import Button from 'components/Button';

interface IFormValues {
  'First Name': string;
  Age: number;
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
  } = useForm<IFormValues>();
  const onSubmit = (data: IFormValues) => {
    alert(JSON.stringify(data));
  };
  console.log(errors);

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextForm
          label="First Name"
          register={register}
          required
          error={errors['First Name']}
        />
        <Select label="Age" register={register} required />
        <Button type="submit">送信</Button>
        {/* <input type="submit" /> */}
      </form>
    </Layout>
  );
};

export default IndexPage;
