import AppButton from "../../components/ui/AppButton"
import AppInput from "../../components/ui/AppInput"
import Guest from "../../Layouts/Guest"
import { Link } from "react-router-dom"
import { TbArrowBack } from "react-icons/tb";
import paths from "../../Routes/paths";
import FloatLeft from "../../components/ui/FloatLeft";

const ForgotPassword = () => {
  return (
    <Guest>
      <form className="mx-auto sm:w-4/12 w-11/12  p-4 pt-0 space-y-4 mb-10">
            <FloatLeft/>

        <div className="">
          <h4 className="text-center font-bold text-xl">Forgotten Password</h4>
        </div>

        <div className="">
          <AppInput placeholder="Enter Email" label="Email" type="email" />
        </div>


        <div className="text-center w-full mb-4 ">
          <AppButton text="Reset password" variant="success" className="px-8 w-full rounded-md " />
        </div>

        <div className="flex justify-end items-center w-full">
          <Link to={paths.login} className="text-sm text-gray-600 hover:underline flex justify-center items-center "> <TbArrowBack /> Login</Link>
        </div>
      </form>

    </Guest>
  )
}

export default ForgotPassword
