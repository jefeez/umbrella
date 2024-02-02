import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import Submit from '../../../components/Submit';
import Input from './Input';
import SignUp from '..';
import { useAuth } from '../../../hooks/useAuth';

const schemas = z.object({
  username: z
    .string({
      required_error: 'username is a required field',
      invalid_type_error: 'username must be a string',
    })
    .min(3, 'must be 3 or more characters long')
    .max(10, 'Must be 10 or fewer characters long'),
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

  const { signUp } = useAuth();

  const onSubmit = async (data: ISign) => {
    try {
      await signUp(data);
      // eslint-disable-next-line no-empty
    } catch (error) {}
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Input errors={errors} label="username" register={register} />
      <Input errors={errors} label="email" register={register} />
      <Input errors={errors} label="password" register={register} />
      <Submit />
    </form>
  );
}
