import { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

type props = {
  className?: string,
  error?: string
  type?: string
  [key: string]: any
  label?: string
  field: string
  handleOnChange: (value: string, field: string) => void
}

export default function AppInput({ field, handleOnChange, className, error, label, type = 'text', ...rest }: props) {
  const [chosenType, setChosenType] = useState(type);
  const handlePasswordToggle = () => {
    setChosenType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  const isPassword = type === 'password';

  return (
    <div className="flex flex-col gap-1">
      <div className="relative w-full">
        {label && <div className='mb-1 text-sm font-medium text-gray-600'><label htmlFor={field}> {label} </label></div>}
        <input
        id={field}
          type={chosenType}
          onChange={(e) => { handleOnChange(e.target.value, field) }}
          className={twMerge(`border-emerald-500 placeholder:text-sm sm:text-lg text-[1rem] focus:ring-emerald-500 rounded-md shadow-sm w-full p-2 pr-10 border focus:outline-none focus:ring-2`, className)
          }
          {...rest}
        />
        {isPassword && (
          <span
            onClick={handlePasswordToggle}
            className="absolute right-3 top-1/2 cursor-pointer text-gray-500"
          >
            {chosenType === 'password' ? (
              <IoEyeOutline
                className="w-5 h-5" />
            ) : (
              <IoEyeOffOutline className="w-5 h-5" />
            )}
          </span>
        )}
      </div>
      {error && (
        <small className="text-red-400 text-sm font-semibold text-left">
          {error}
        </small>
      )}
    </div>
  );
}
