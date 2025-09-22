import AppButton from "./AppButton"
import { Link } from "react-router-dom";


type props = {
    choice: string,
    choicedesc: string,
    to: string,

}
const WelcomeChoice = ({ to, choice, choicedesc }: props) => {
    return (
        <Link to={to}
                className={`group w-full bg-white rounded-2xl p-6 border-green-300 shadow-lg border-4 transition-all duration-300 hover:scale-105 hover:shadow-xl `} >
        <div className="text-center ">
            
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{choice && choice}</h3>
                <p className="text-sm text-gray-600 mb-4">
                    {choicedesc}
                </p>
                <AppButton text={choice && choice} variant="outline" className={` w-3/4 border border-green-400`} />
                </div>
            </Link>
    )
}


export default WelcomeChoice
