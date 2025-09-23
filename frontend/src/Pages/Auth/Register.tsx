import AppButton from "../../components/ui/AppButton"
import AppInput from "../../components/ui/AppInput"
import Guest from "../../Layouts/Guest"
import { Link } from "react-router-dom"
import paths from "../../Routes/paths"
import FloatLeft from "../../components/ui/FloatLeft"
import GoogleSocialLogin from "../../components/GoogleSocialLogin"

const Register = () => {
  return (
    <Guest>
      <form className="mx-auto sm:w-4/12 w-11/12  p-4 pt-0 space-y-3">
        <FloatLeft />

        <div className="">
          <h4 className="text-center font-bold text-xl">Register HiBreeder</h4>
        </div>
        <div className="">
          <AppInput placeholder="Enter Full Name" label="Full Name" />
        </div>

        <div className="">
          <AppInput placeholder="Enter Email" label="Email" type="email" />
        </div>

        <div className="">
          <AppInput placeholder="Enter Password" label="Password" type="password" />
        </div>

        <div className="">
          <AppInput placeholder="Confirm Password" label="Confirm Password" type="password" />
        </div>

        <div className="text-center w-full">
          <AppButton text="Register" variant="success" className="px-8 w-full rounded-md " />
        </div>
        <div className="text-center w-full mb-8">
          <GoogleSocialLogin text="Continue with Google"/>      
            </div>

        <div className="flex justify-between items-center w-full">
          <Link to={paths.forgotPassword} className="text-sm text-gray-600 hover:underline">Forgot password?</Link>
          <Link to={paths.login} className="text-sm text-gray-600 hover:underline">Login account</Link>
        </div>
      </form>

    </Guest>
  )
}

export default Register
