import type { ReactElement } from "react";
import AppButton from "./AppButton"
import { Link } from "react-router-dom";


type props = {
    choice: string,
    choicedesc: string,
    to: string,
    className?: string
    icon?: ReactElement

}
const WelcomeChoice = ({ to, choice, choicedesc, className, icon }: props) => {
    return (
        <Link to={to}
            className={`group text-center w-full flex flex-col justify-between items-center rounded-xl sm:p-6 p-2 py-3 transition-all duration-300 hover:scale-105 hover:shadow-md ${className}`} >
            <div className="text-4xl mb-3 flex justify-center">{icon && icon}</div>
            <h3 className="text-xl hidden sm:block font-bold mb-2">{choice && choice}</h3>
            <p className="text-sm sm:text-lg capitalize font-medium  mb-2">
                {choicedesc}
            </p>
            <AppButton text={choice && choice} variant="outline" className={` w-3/4 border !border-emerald-400 !font-bold`} />
        </Link>
    )
}


export default WelcomeChoice
