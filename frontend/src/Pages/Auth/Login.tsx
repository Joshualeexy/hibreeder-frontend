import AppButton from "../../components/AppButton"
import AppInput from "../../components/AppInput"
import Guest from "../../Layouts/Guest"
import { Link } from "react-router-dom"
const Login = () => {
  return (
    <Guest>
      <form className="mx-auto sm:w-4/12 w-10/12  p-4 space-y-4">
        <div className="">
          <AppInput placeholder="Enter Email" type="email" />
        </div>

        <div className="">
          <AppInput placeholder="Enter Password" type="password" />
        </div>

        <div className="text-center w-full mb-8">
          <AppButton text="Login" variant="success" className="px-8 w-full rounded-md " />
        </div>    
        
         <div className="flex justify-between items-center w-full">
          <Link to="/forgot-password" className="text-sm text-gray-600 hover:underline">Forgot Password?</Link>
          <Link to="/register" className="text-sm text-gray-600 hover:underline">Create Account</Link>
        </div>
      </form>

    </Guest>
  )
}

export default Login
