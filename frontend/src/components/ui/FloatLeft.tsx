import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";


const FloatLeft = () => {
    return (
        <div className="fixed top-0 -ml-8 p-2 w-full">
            <Link to="/" className="flex justify-start items-center text-sm text-gray-700">
                <IoIosArrowBack className="text-2xl text-gray-700" /> To home page
            </Link>
        </div>
    )
}

export default FloatLeft
