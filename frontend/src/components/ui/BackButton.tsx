import { TbArrowBack } from "react-icons/tb"
import { Link } from "react-router-dom"
type Props = {
    text: string
    to: string
}
const BackButton = ({ to, text }: Props) => {
    return (
        <Link to={to} className="text-sm text-gray-600 underline flex justify-center items-center "> <TbArrowBack className="mt-1 mr-1" />{text}</Link>
    )
}

export default BackButton
