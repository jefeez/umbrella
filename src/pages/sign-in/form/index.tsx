import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import Submit from '../../../components/Submit';
import Input from './Input';

const schemas = z.object({
  email: z
    .string({
      invalid_type_error: 'email is required field',
      required_error: 'email must be a string',
    })
    .email('invalid email address'),
  password: z
    .string({
      required_error: 'password is a required field',
      invalid_type_error: 'password must be a string',
    })
    .min(5, 'must be 5 or more characters long'),
});

export type ISign = z.infer<typeof schemas>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISign>({
    resolver: zodResolver(schemas),
  });

  const onSubmit = (data: ISign) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Input errors={errors} label="email" register={register} />
      <Input errors={errors} label="password" register={register} />
      <Submit />
    </form>
  );
}
