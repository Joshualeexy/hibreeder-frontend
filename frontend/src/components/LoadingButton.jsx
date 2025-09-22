import { AiOutlineLoading3Quarters } from "react-icons/ai";
import AppButton from "./AppButton";

const LoadingButton = ({ className = "", text = "Loading" }) => {
    return (
        <AppButton
            type="loading"
            className={" bg-emerald-500 "+className}
            text={text}
            icon={<AiOutlineLoading3Quarters className="animate-spin" />}
        />
    );
};
export default LoadingButton;
