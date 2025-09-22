import { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

type props = {
  className?: string,
  error?: string
  type: string
  [key: string]: any
}

export default function AppInput({ className, error, type = 'text', ...rest }: props) {
  const [chosenType, setChosenType] = useState(type);

  const handlePasswordToggle = () => {
    setChosenType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  const isPassword = type === 'password';

  return (
    <div className="flex flex-col gap-1">
      <div className="relative w-full">
        <input
          type={chosenType}
          className={`border-emerald-500 focus:ring-emerald-500 rounded-md shadow-sm w-full p-2 pr-10 border focus:outline-none focus:ring-2 ${className} `
          }
          {...rest}

        />
        {isPassword && (
          <span
            onClick={handlePasswordToggle}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
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
