import AppButton from "../../components/ui/AppButton"
import AppInput from "../../components/ui/AppInput"
import Guest from "../../Layouts/Guest"
import { Link } from "react-router-dom"
import paths from "../../Routes/paths"
import GoogleSocialLogin from "../../components/GoogleSocialLogin"
import FloatLeft from "../../components/ui/FloatLeft"
const Login = () => {
  return (
    <Guest>
      <form className=" mx-auto sm:w-4/12 w-11/12  p-4 space-y-3 mb-20 pt-0">
        <FloatLeft />
        <div className="">
          <h4 className="text-center font-medium text-xl">Login HiBreeder</h4>
        </div>
        <div className="">
          <AppInput placeholder="Enter Email" type="email" label="Email" />
        </div>

        <div className="">
          <AppInput placeholder="Enter Password" type="password" label="Password" />
        </div>

        <div className="text-center w-full mb-8 space-y-2">
          <AppButton text="Login" variant="success" className="px-8  w-full rounded-md " />
          <GoogleSocialLogin />
        </div>

        <div className="flex justify-between items-center w-full">
          <Link to={paths.forgotPassword} className="text-sm text-gray-600 underline">Forgot password?</Link>
          <Link to={paths.register} className="text-sm text-gray-600 underline">Create Account</Link>
        </div>
      </form>

    </Guest>
  )
}

export default Login
