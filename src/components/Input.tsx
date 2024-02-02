/* eslint-disable react/jsx-props-no-spreading */
import { Path, UseFormRegister } from 'react-hook-form';

interface IFormValues {
  email: string;
  password: string;
}

export default function Input({
  label,
  register,
  required,
}: {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
}) {
  return (
    <div className="w-full">
      <div className="text-xs font-semibold pb-2 px-2">
        <span>{label.toUpperCase()}:&nbsp;</span>
      </div>
      <input {...register(label, { required })} className="input" />
    </div>
  );
}
