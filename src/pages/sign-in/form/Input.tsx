/* eslint-disable react/jsx-props-no-spreading */
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

interface IFormValues {
  email: string;
  password: string;
}

export default function Input({
  label,
  errors,
  register,
}: {
  errors: FieldErrors<IFormValues>;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
}) {
  const err = errors[label]?.message;

  return (
    <div className="w-full">
      <div className="text-xs font-semibold pb-2 px-2">
        <span>
          {label.toUpperCase()}:&nbsp;
          {errors && <span className="text-red-500">{err}</span>}
        </span>
      </div>
      <input
        {...register(label)}
        className={`input  ${err ? 'border-red-500 focus:border-orange-500' : ''}`}
      />
    </div>
  );
}
