import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useNavigate, Link } from 'react-router-dom';
import Submit from '../../../components/Submit';
import Input from './Input';
import { useAuth } from '../../../hooks/useAuth';

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

  const { signIn } = useAuth();
  const nav = useNavigate();

  const onSubmit = async (data: ISign) => {
    try {
      await signIn(data);
      nav('/app');
      // eslint-disable-next-line no-empty
    } catch (error) {}
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Input errors={errors} type="email" label="email" register={register} />
      <Input errors={errors} type="password" label="password" register={register} />
      <Submit>SIGN-IN</Submit>
      <div className="w-full flex flex-col py-2">
        <div className="w-full text-xs font-bold pl-5">
          Don&apos;t have an account yet?&nbsp;&nbsp;
          <Link to="/sign-up" className="text-indigo-500 hover:text-indigo-400">
            SIGN-UP
          </Link>
        </div>
      </div>
    </form>
  );
}
