import { twMerge } from "tailwind-merge";

type ButtonVariant = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'outline';

type Props = {
    onClick?: () => void;
    text: string;
    className?: string;
    variant?: ButtonVariant;
    disabled?: boolean;
    isLoading?:boolean
}

const AppButton = ({isLoading=false, className, text, onClick, variant = 'default', disabled = isLoading }: Props) => {
    const getVariantClasses = (variant: ButtonVariant): string => {
        const baseClasses = 'inline-block px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 active:opacity-50';
        const variants = {
            default: 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300',
            primary: 'bg-blue-500 text-white hover:bg-blue-600 border border-blue-500',
            secondary: 'bg-purple-500 text-white hover:bg-purple-600 border border-purple-500',
            success: 'bg-emerald-500 text-white hover:bg-emerald-600 border border-emerald-500',
            danger: 'bg-red-500 text-white hover:bg-red-600 border border-red-500',
            warning: 'bg-yellow-500 text-white hover:bg-yellow-600 border border-yellow-500',
            outline: 'bg-transparent text-gray-700 hover:bg-gray-50 border border-gray-300'
        };

        const disabledClasses = 'opacity-75 cursor-not-allowed ';

        return `${baseClasses} ${variants[variant]} ${disabled ? disabledClasses : 'cursor-pointer'}`;
    };

    return (
        <button 
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
            className={twMerge(`${getVariantClasses(variant)}`,className)}
        >
          {isLoading ? <div className="mx-auto w-5 h-5 rounded-full border border-t-0 animate-spin "></div> : text}   
        </button>
    );
}

export default AppButton;
